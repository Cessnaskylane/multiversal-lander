from playwright.sync_api import sync_playwright
d="/workspace/multiversal-lander/mocks/decision-brief-dark/"
with sync_playwright() as p:
  b=p.chromium.launch();pg=b.new_page(viewport={"width":1440,"height":900})
  def s(f,out,sel=None,off=0):
    pg.goto("file://"+d+f+"#shot");pg.wait_for_timeout(1500)
    if sel: pg.evaluate(f"window.scrollTo(0,document.querySelector('{sel}').getBoundingClientRect().top+scrollY-{off})")
    pg.screenshot(path=d+out)
  s("loader.html","loader-1440.png");s("home.html","home-1440.png");s("results.html","brief-1440.png");s("results.html","brief-models-1440.png","#columns",420)
  s("pricing.html","pricing-1440.png");s("pricing.html","pricing-faq-1440.png",".faq",200)
