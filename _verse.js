
      var lastLayerScreen = screen5;
      var selectedAct = null;
      var verseName = document.getElementById("verse-name");
      var verseKicker = document.getElementById("verse-kicker");
      var verseApp = document.getElementById("verse-app");
      var outName = document.getElementById("out-name");
      var outKicker = document.getElementById("out-kicker");
      var outApp = document.getElementById("out-app");
      var outCopyBtn = document.getElementById("out-copy");
      var verseCopy = "";

      var modelLabel = {
        grok: "Grok",
        gpt: "GPT",
        gemini: "Gemini",
        claude: "Claude",
        deepseek: "DeepSeek"
      };
      var wireLabel = {
        domain: "www.",
        mail: "Email",
        tiktok: "TikTok",
        x: "X",
        instagram: "Instagram",
        slack: "Slack",
        linkedin: "Linked In",
        inscription: "Inscription"
      };
      var wireActs = {
        instagram: [
          ["caption", "Draft a caption"],
          ["comments", "Reply to comments"],
          ["story", "Cut a story"],
          ["dms", "Sort the DMs"]
        ],
        x: [
          ["post", "Draft a post"],
          ["thread", "Reply in a thread"],
          ["quote", "Quote a take"],
          ["mentions", "Scan mentions"]
        ],
        tiktok: [
          ["hook", "Draft a hook"],
          ["caption", "Cut a caption"],
          ["comments", "Reply to comments"],
          ["sound", "Suggest a sound"]
        ],
        mail: [
          ["reply", "Draft a reply"],
          ["inbox", "Sort the inbox"],
          ["follow", "Write a follow-up"],
          ["file", "File a thread"]
        ],
        slack: [
          ["message", "Draft a message"],
          ["summary", "Summarize a channel"],
          ["thread", "Reply in a thread"],
          ["standup", "Write a standup"]
        ],
        linkedin: [
          ["post", "Draft a post"],
          ["comment", "Reply to a comment"],
          ["note", "Write a note"],
          ["feed", "Scan the feed"]
        ],
        domain: [
          ["page", "Draft a page"],
          ["bio", "Write a bio"],
          ["form", "Answer a form"],
          ["check", "Check the site"]
        ],
        inscription: [
          ["draft", "Draft an inscription"],
          ["note", "Write a note"],
          ["mint", "Watch a mint"],
          ["hash", "File a hash"]
        ]
      };

      var VOICE_BASE = {
        hook: "Watch to the cut.",
        caption: "Kept it short. The picture does the rest.",
        post: "No announcement. Just the work.",
        quote: "Noted. Here is the shorter version.",
        replySoft: "That is the idea.",
        replyAsk: "When it is ready. Not before.",
        replyLove: "It was the light.",
        story1: "now",
        story2: "the cut",
        story3: "good night",
        sound: "Original · room tone",
        dmYes: "Send the work. I will read it.",
        dmNo: "Not this. Good luck with it.",
        mail: "Read this twice. The answer is the second line.",
        slack: "Here. We are fine. Details on request.",
        bio: "A named voice. Prefers the short version.",
        standup: "Yesterday: the work. Today: the work. Blockers: none.",
        summary: "Twelve messages. One decision. The rest was weather.",
        page: "A page. One idea. No extra doors.",
        note: "Short note. The rest can wait.",
        hash: "Filed. The hash is the record.",
        check: "The site holds. Nothing loud is wrong.",
        follow: "Following up once. Then I wait."
      };
      var VOICES = {
        keanu: {
          hook: "Stay until the city gets quiet.",
          caption: "Left the lights on. Walked until they were not my problem. Good night.",
          post: "Tuesday. No news. That is the post.",
          quote: "I heard it. I will keep the useful part.",
          replySoft: "That is the idea.",
          replyAsk: "When it is ready. Not before.",
          replyLove: "It was just the window.",
          story1: "now",
          story2: "the city does the talking",
          story3: "good night",
          sound: "Engine idle · original",
          dmYes: "Send the work. I will read it.",
          dmNo: "I do not do shoutouts. Good luck with the drop.",
          mail: "Got this. The real question is in the next line.",
          slack: "Here. Short version: we are fine.",
          bio: "Actor. Motorcycles. Tries not to waste the light.",
          standup: "Yesterday: the cut. Today: the cut. Blockers: none.",
          page: "A quiet page. One photograph. One line.",
          note: "Keep it. I will look tonight."
        },
        elsa: {
          hook: "The air held. I let it.",
          caption: "Cold is a kind of quiet.",
          post: "The weather did the work. I stood still.",
          quote: "I will not thaw for the noise.",
          replySoft: "Then it is working.",
          replyAsk: "When the ice says so.",
          replyLove: "It is only weather.",
          story1: "still",
          story2: "the fjord",
          story3: "good night",
          sound: "Ice over water · original",
          dmYes: "Write. I will read it.",
          dmNo: "No. That is not my season.",
          mail: "Noted. The answer is the shorter one.",
          slack: "Here. The temperature held. So did I.",
          bio: "Prefers the cold. Speaks once.",
          standup: "Yesterday: the freeze. Today: the freeze. Blockers: thaw.",
          page: "White field. One line. The rest is frost.",
          note: "Filed under winter."
        },
        barbie: {
          hook: "Pink is a decision.",
          caption: "Pink is a decision. So is showing up.",
          post: "I dressed for the argument. Then I skipped it.",
          quote: "Cute. Now the real sentence.",
          replySoft: "Correct.",
          replyAsk: "Soon. In this color.",
          replyLove: "Thank you. I know.",
          story1: "look",
          story2: "the set",
          story3: "good night",
          sound: "Studio pop · original",
          dmYes: "Send the brief. Make it pink or make it good.",
          dmNo: "Not a collab. A no.",
          bio: "The doll who read the contract.",
          page: "A landing page that does not apologize."
        },
        wednesday: {
          hook: "Smile if you must. I will not.",
          caption: "I came for the silence. It was late.",
          post: "Joy is optional. Precision is not.",
          quote: "Wrong. Here is the correction.",
          replySoft: "Unfortunately, yes.",
          replyAsk: "Never is a time.",
          replyLove: "Do not.",
          story1: "watch",
          story2: "the dark",
          story3: "good night",
          sound: "Cello, dry · original",
          dmNo: "No. And no.",
          bio: "Allergic to group photos."
        },
        morgan: {
          hook: "Listen. Then decide.",
          caption: "The work speaks. I only read it aloud.",
          post: "Nothing extra. That is the point.",
          replySoft: "Yes.",
          replyAsk: "In time.",
          replyLove: "The light did that.",
          sound: "Low room · original",
          bio: "Voice first. Then the rest."
        },
        bill: {
          hook: "Anyway.",
          caption: "I showed up. That was the joke.",
          post: "Still here. Unexpected, even to me.",
          replySoft: "Sure.",
          replyAsk: "After lunch. Maybe.",
          replyLove: "Okay.",
          sound: "Hotel piano · original",
          bio: "Deadpan. On time when it matters."
        },
        elisabeth: {
          hook: "The work continues.",
          caption: "The work continues. The weather is incidental.",
          post: "Duty first. The rest is furniture.",
          replySoft: "Thank you.",
          replyAsk: "In due course.",
          replyLove: "Kind of you.",
          sound: "Hall, empty · original",
          bio: "Service. Then silence."
        },
        zendaya: {
          hook: "Look once. Then look away.",
          caption: "Clean line. No extra glitter.",
          post: "I posted the work. Not the noise around it.",
          replyAsk: "When the cut is right.",
          sound: "Night walk · original",
          bio: "Precise. Current. Done."
        },
        sabrina: {
          hook: "One chorus. Then the dark.",
          caption: "Sequins, then the quiet after.",
          post: "The show ended. I kept the lights for a minute.",
          sound: "Crowd, then none · original",
          bio: "Pop, then the hallway."
        },
        timothee: {
          hook: "A small voice in a large room.",
          caption: "I left the sentence unfinished. It was better.",
          post: "Soft on purpose.",
          sound: "Page turn · original",
          bio: "Reads more than he posts."
        },
        sydney: {
          hook: "Night first.",
          caption: "The city was louder. I was not.",
          post: "Sharp, then home.",
          sound: "Club, outside · original",
          bio: "Night shift. Clean edges."
        },
        bluey: {
          hook: "One more game.",
          caption: "We played until the sun sat down. Then a bit more.",
          post: "Keep it kind. That is the rule.",
          replySoft: "Yep!",
          replyAsk: "After snacks.",
          replyLove: "Love you too.",
          sound: "Backyard · original",
          dmNo: "Mum says not today.",
          bio: "Games. Sisters. Blue sky."
        },
        chef: {
          caption: "Salt. Heat. That is the post.",
          hook: "Taste first.",
          post: "The plate is the argument.",
          bio: "Cooks. Does not over-explain."
        },
        coach: {
          caption: "Three sets. Water. That is the post.",
          hook: "Again.",
          post: "Form first. Then speed.",
          standup: "Yesterday: legs. Today: lungs. Blockers: none."
        },
        concierge: {
          caption: "Arranged. You do not need the how.",
          hook: "This way.",
          mail: "Booked. Confirmation in the second line."
        },
        reviewer: {
          caption: "I watched it twice. Once was not enough to be fair.",
          hook: "The cut that matters.",
          post: "One note. Then I stop."
        },
        writer: {
          caption: "One sentence. Then a door.",
          hook: "Start later than you think.",
          page: "A page with one job."
        }
      };

      function voiceOf(key) {
        var own = VOICES[key] || {};
        var out = {};
        Object.keys(VOICE_BASE).forEach(function (k) {
          out[k] = own[k] || VOICE_BASE[k];
        });
        return out;
      }
      function esc(s) {
        return String(s == null ? "" : s)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/"/g, "&quot;");
      }
      function handleOf(name) {
        var h = String(name || "agent").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        h = h.replace(/[^a-z0-9]+/g, "");
        return "@" + (h || "agent");
      }
      function siteOf(name) {
        return handleOf(name).slice(1) + ".multiversal.ai";
      }
      function layerLabel() {
        var pressed = document.querySelector(".scenario[aria-pressed='true']");
        if (pressed) {
          var strong = pressed.querySelector("strong");
          if (strong) return strong.textContent;
        }
        if (selectedLayer === "upload") return "Yours";
        return selectedLayer || "Agent";
      }
      function layerKey() {
        return (selectedLayer || "agent").toLowerCase();
      }
      function layerFaceSrc() {
        var pressed = document.querySelector(".scenario[aria-pressed='true']");
        if (pressed) {
          var img = pressed.querySelector("img");
          if (img && img.getAttribute("src")) return img.getAttribute("src");
        }
        return agentFace ? agentFace.getAttribute("src") : "";
      }
      function actLabelOf(act) {
        var acts = wireActs[selectedWire] || wireActs.instagram;
        for (var i = 0; i < acts.length; i++) {
          if (acts[i][0] === act) return acts[i][1];
        }
        return act;
      }
      function actsHtml() {
        var acts = wireActs[selectedWire] || wireActs.instagram;
        var html = '<div class="verse-acts" role="listbox" aria-label="What to do">';
        acts.forEach(function (pair) {
          html += '<button type="button" class="verse-act" data-act="' + esc(pair[0]) + '">' + esc(pair[1]) + "</button>";
        });
        return html + "</div>";
      }
      function bindActs(root) {
        Array.prototype.forEach.call(root.querySelectorAll(".verse-act"), function (btn) {
          btn.addEventListener("click", function () {
            selectedAct = btn.getAttribute("data-act");
            goToScreen8();
          });
        });
      }

      function incoming() {
        return [
          { who: "@lena", text: "this is so you", k: "replySoft" },
          { who: "@miles", text: "when is the next one", k: "replyAsk" },
          { who: "@june", text: "wait this photo", k: "replyLove" }
        ];
      }
      function threadHtml(v) {
        var rows = incoming().map(function (c) {
          return '<div class="thread-row"><p class="who">' + esc(c.who) + '</p><p class="inn">' + esc(c.text) + '</p><p class="out">' + esc(v[c.k]) + "</p></div>";
        }).join("");
        return '<div class="out-sheet"><h2>Replies</h2>' + rows + '<p class="out-status">draft · not sent</p></div>';
      }
      function inboxHtml(v) {
        var rows =
          '<div class="inbox-bucket"><h3>Reply</h3><div class="thread-row"><p class="who">@sam</p><p class="inn">collab on a drop?</p><p class="out">' + esc(v.dmNo) + '</p></div></div>' +
          '<div class="inbox-bucket"><h3>Later</h3><div class="thread-row"><p class="who">@press</p><p class="inn">twenty minutes next week?</p><p class="out">' + esc(v.dmYes) + '</p></div></div>' +
          '<div class="inbox-bucket"><h3>Skip</h3><div class="thread-row"><p class="who">@grid</p><p class="inn">you won a giveaway</p></div></div>';
        return '<div class="out-sheet"><h2>Sorted</h2>' + rows + '<p class="out-status">draft · not sent</p></div>';
      }
      function storyHtml(v) {
        return '<div class="out-sheet"><h2>Story</h2><div class="story-row"><div class="story-frame">' + esc(v.story1) + '</div><div class="story-frame">' + esc(v.story2) + '</div><div class="story-frame">' + esc(v.story3) + '</div></div><p class="out-status">draft · not sent</p></div>';
      }
      function postSheet(title, body) {
        return '<div class="out-sheet"><h2>' + esc(title) + '</h2><p class="out-post">' + esc(body) + '</p><p class="out-status">draft · not sent</p></div>';
      }

      function copyForAct(act, v) {
        if (act === "caption" || act === "hook") return v[act] || v.caption;
        if (act === "post" || act === "quote" || act === "message" || act === "reply" || act === "follow" || act === "note" || act === "draft" || act === "page" || act === "bio" || act === "check" || act === "hash" || act === "standup" || act === "summary") {
          return v[act] || v.post;
        }
        if (act === "sound") return v.sound;
        if (act === "comments" || act === "comment" || act === "thread" || act === "form") {
          return incoming().map(function (c) { return c.who + ": " + c.text + "\n" + v[c.k]; }).join("\n\n");
        }
        if (act === "dms" || act === "inbox" || act === "feed" || act === "file" || act === "mentions" || act === "mint") {
          return "Reply\n@sam: collab on a drop?\n" + v.dmNo + "\n\nLater\n@press: twenty minutes next week?\n" + v.dmYes + "\n\nSkip\n@grid: you won a giveaway";
        }
        if (act === "story") return [v.story1, v.story2, v.story3].join(" · ");
        return v.caption;
      }

      function overlayFor(act, v) {
        if (act === "comments" || act === "comment" || act === "thread" || act === "form") return threadHtml(v);
        if (act === "dms" || act === "inbox" || act === "feed" || act === "file" || act === "mentions" || act === "mint") return inboxHtml(v);
        if (act === "story") return storyHtml(v);
        if (act === "sound") return postSheet("Sound", v.sound);
        if (act === "hook") return postSheet("Hook", v.hook);
        if (act === "caption") return postSheet("Caption", v.caption);
        if (act === "bio") return postSheet("Bio", v.bio);
        if (act === "page") return postSheet("Page", v.page);
        if (act === "check") return postSheet("Check", v.check);
        if (act === "hash") return postSheet("Hash", v.hash);
        if (act === "standup") return postSheet("Standup", v.standup);
        if (act === "summary") return postSheet("Summary", v.summary);
        if (act === "mail" || act === "reply") return postSheet("Reply", v.mail);
        if (act === "follow") return postSheet("Follow-up", v.follow);
        if (act === "note" || act === "draft") return postSheet("Note", v.note);
        if (act === "quote") return postSheet("Quote", v.quote);
        if (act === "message") return postSheet("Message", v.slack);
        if (act === "post") return postSheet("Post", v.post);
        return postSheet("Draft", v.caption);
      }

      function faceStage(src, extra, overlay) {
        return '<div class="app-stage"><img class="cover" alt="" src="' + esc(src) + '">' + (extra || "") + (overlay || "") + "</div>";
      }

      function paintApp(root, act) {
        var name = layerLabel();
        var src = layerFaceSrc();
        var handle = handleOf(name);
        var v = voiceOf(layerKey());
        var wire = selectedWire;
        var overlay = act ? overlayFor(act, v) : "";
        var html = "";
        if (wire === "tiktok") {
          html = '<div class="app app-tt">' +
            faceStage(src, '<div class="app-meta"><p class="app-user">' + esc(handle) + '</p><p class="app-sub">' + esc(act ? "" : "tap a job") + '</p><p class="app-sound">' + esc(act === "sound" ? v.sound : ("original sound · " + name.toLowerCase())) + "</p></div>", overlay) +
            (act ? "" : actsHtml()) + "</div>";
        } else if (wire === "instagram") {
          html = '<div class="app app-ig"><div class="app-bar"><span class="dot"><img alt="" src="' + esc(src) + '"></span><strong>' + esc(handle) + '</strong></div>' +
            faceStage(src, act ? "" : '<div class="app-meta"><p class="app-sub">tap a job</p></div>', overlay) +
            (act ? "" : actsHtml()) + "</div>";
        } else if (wire === "x") {
          html = '<div class="app app-x"><div class="app-bar"><span class="dot"><img alt="" src="' + esc(src) + '"></span><strong>' + esc(handle) + '</strong><span> · ' + esc(name) + "</span></div>" +
            '<div class="x-feed">' + (act ? overlay : ('<div class="x-tweet"><span class="from">' + esc(handle) + '</span>tap a job. the draft lands here.</div>')) + "</div>" +
            (act ? "" : actsHtml()) + "</div>";
        } else if (wire === "mail") {
          html = '<div class="app app-mail"><div class="app-bar"><strong>Inbox</strong><span> · ' + esc(name) + "</span></div>" +
            '<div class="mail-list">' + (act ? overlay : ('<div class="mail-item"><span class="from">@press</span>twenty minutes next week?</div><div class="mail-item"><span class="from">@sam</span>collab on a drop?</div><div class="mail-item"><span class="from">@grid</span>you won a giveaway</div>')) + "</div>" +
            (act ? "" : actsHtml()) + "</div>";
        } else if (wire === "slack") {
          html = '<div class="app app-slack"><div class="app-bar"><strong>#multiversal</strong><span> · ' + esc(name) + "</span></div>" +
            '<div class="sl-log">' + (act ? overlay : ('<div class="sl-msg"><span class="from">' + esc(handle) + '</span>here. tap a job.</div>')) + "</div>" +
            (act ? "" : actsHtml()) + "</div>";
        } else if (wire === "linkedin") {
          html = '<div class="app app-li"><div class="app-bar"><span class="dot"><img alt="" src="' + esc(src) + '"></span><strong>' + esc(name) + '</strong><span> · layer</span></div>' +
            faceStage(src, act ? "" : '<div class="app-meta"><p class="app-sub">start a post</p></div>', overlay) +
            (act ? "" : actsHtml()) + "</div>";
        } else if (wire === "inscription") {
          html = '<div class="app app-ord">' +
            faceStage(src, '<p class="ord-id">inscription · ' + esc(handle) + "</p>" + (act ? "" : '<div class="app-meta"><p class="app-sub">tap a job</p></div>'), overlay) +
            (act ? "" : actsHtml()) + "</div>";
        } else {
          html = '<div class="app app-web"><p class="url">' + esc(siteOf(name)) + "</p>" +
            faceStage(src, act ? "" : '<div class="app-meta"><p class="app-user">' + esc(name) + '</p><p class="app-sub">tap a job</p></div>', overlay) +
            (act ? "" : actsHtml()) + "</div>";
        }
        root.innerHTML = html;
        if (!act) bindActs(root);
        if (act) verseCopy = copyForAct(act, v);
        else verseCopy = "";
      }

      function goToScreen7() {
        var model = modelLabel[selectedModel] || selectedModel;
        var door = wireLabel[selectedWire] || selectedWire;
        verseKicker.textContent = model;
        verseName.textContent = door;
        screen7.setAttribute("data-skin", selectedWire || "domain");
        paintApp(verseApp, null);
        showScreen(screen7);
      }
      function goToScreen8() {
        if (!selectedAct) return;
        var door = wireLabel[selectedWire] || selectedWire;
        outKicker.textContent = door;
        outName.textContent = actLabelOf(selectedAct);
        screen8.setAttribute("data-skin", selectedWire || "domain");
        paintApp(outApp, selectedAct);
        showScreen(screen8);
      }
      function finishLayer() {
        if (!selectedLayer && !personalityMd) return;
        goToScreen7();
      }
