// Multiversal fan-out proxy: POST {question} -> {question, answer, agree, total, models:[{name,agrees}]}
const SYS = "Answer the user's question accurately and concisely in 2-4 sentences.";
// One-key mode: if OPENROUTER_API_KEY is set, every model goes through OpenRouter (model ids overridable via OR_<NAME>_MODEL).
const OR_MODELS = { ChatGPT: "openai/gpt-5-mini", Claude: "anthropic/claude-haiku-5.5", Gemini: "google/gemini-3.5-flash-lite", Grok: "x-ai/grok-4.3" };
const viaOpenRouter = (n) => (q, e) => post("https://openrouter.ai/api/v1/chat/completions",
  { authorization: `Bearer ${e.OPENROUTER_API_KEY}`, "http-referer": "https://multiversal.ai", "x-title": "multiversal" },
  { model: e[`OR_${n.toUpperCase()}_MODEL`] || OR_MODELS[n], max_tokens: 400, messages: [{ role: "system", content: SYS }, { role: "user", content: q }] })
  .then(j => j.choices[0].message.content);
const DIRECT = {
  ChatGPT: (q, e) => e.OPENAI_API_KEY && post("https://api.openai.com/v1/chat/completions",
    { authorization: `Bearer ${e.OPENAI_API_KEY}` },
    { model: e.OPENAI_MODEL || "gpt-4o-mini", messages: [{ role: "system", content: SYS }, { role: "user", content: q }] })
    .then(j => j.choices[0].message.content),
  Claude: (q, e) => e.ANTHROPIC_API_KEY && post("https://api.anthropic.com/v1/messages",
    { "x-api-key": e.ANTHROPIC_API_KEY, "anthropic-version": "2023-06-01" },
    { model: e.ANTHROPIC_MODEL || "claude-3-5-haiku-latest", max_tokens: 400, system: SYS, messages: [{ role: "user", content: q }] })
    .then(j => j.content[0].text),
  Gemini: (q, e) => e.GEMINI_API_KEY && post(`https://generativelanguage.googleapis.com/v1beta/models/${e.GEMINI_MODEL || "gemini-2.0-flash"}:generateContent?key=${e.GEMINI_API_KEY}`,
    {}, { systemInstruction: { parts: [{ text: SYS }] }, contents: [{ parts: [{ text: q }] }] })
    .then(j => j.candidates[0].content.parts[0].text),
  Grok: (q, e) => e.XAI_API_KEY && post("https://api.x.ai/v1/chat/completions",
    { authorization: `Bearer ${e.XAI_API_KEY}` },
    { model: e.XAI_MODEL || "grok-3-mini", messages: [{ role: "system", content: SYS }, { role: "user", content: q }] })
    .then(j => j.choices[0].message.content),
};
const PROVIDERS = new Proxy(DIRECT, { get: (t, n) => (q, e) => (e.OPENROUTER_API_KEY ? viaOpenRouter(n) : t[n])(q, e) });
async function post(url, headers, body) {
  const r = await fetch(url, { method: "POST", headers: { "content-type": "application/json", ...headers }, body: JSON.stringify(body), signal: AbortSignal.timeout(25000) });
  if (!r.ok) throw new Error(`${url} ${r.status}`);
  return r.json();
}
async function synthesize(q, answers, env) {
  const list = answers.map(a => `[${a.name}]\n${a.text}`).join("\n\n");
  const prompt = `Question: ${q}\n\nAnswers from several AIs:\n${list}\n\nWrite one combined best answer (2-4 sentences, plain text) reflecting the majority view, and say which AIs agree with it. Reply ONLY as JSON: {"answer": string, "agree": [names that agree]}`;
  const synth = ["Grok", "ChatGPT", "Claude", "Gemini"].find(n => answers.some(a => a.name === n));
  const raw = await PROVIDERS[synth](prompt, env);
  const m = raw.match(/\{[\s\S]*\}/);
  return JSON.parse(m ? m[0] : raw);
}
export default {
  async fetch(req, env) {
    const cors = { "access-control-allow-origin": env.ALLOWED_ORIGIN || "*", "access-control-allow-methods": "POST, OPTIONS", "access-control-allow-headers": "content-type" };
    const json = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { "content-type": "application/json", ...cors } });
    if (req.method === "OPTIONS") return new Response(null, { headers: cors });
    if (req.method !== "POST") return json({ error: "POST only" }, 405);
    let q; try { q = String((await req.json()).question || "").trim().slice(0, 2000); } catch { }
    if (!q) return json({ error: "question required" }, 400);
    const names = Object.keys(DIRECT).filter(n => keyFor(n, env));
    if (!names.length) return json({ error: "no model API keys configured" }, 503);
    const settled = await Promise.allSettled(names.map(n => PROVIDERS[n](q, env)));
    const answers = settled.map((s, i) => s.status === "fulfilled" && s.value ? { name: names[i], text: s.value } : null).filter(Boolean);
    if (!answers.length) return json({ error: "all models failed" }, 502);
    let syn;
    try { syn = await synthesize(q, answers, env); } catch { syn = { answer: answers[0].text, agree: [answers[0].name] }; }
    const agreeSet = new Set(syn.agree || []);
    const models = answers.map(a => ({ name: a.name, agrees: agreeSet.has(a.name), text: a.text }));
    return json({ question: q, answer: syn.answer, agree: models.filter(m => m.agrees).length, total: models.length, models });
  },
};
function keyFor(n, e) { if (e.OPENROUTER_API_KEY) return true; return { ChatGPT: e.OPENAI_API_KEY, Claude: e.ANTHROPIC_API_KEY, Gemini: e.GEMINI_API_KEY, Grok: e.XAI_API_KEY }[n]; }
