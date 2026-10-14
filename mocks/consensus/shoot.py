from playwright.sync_api import sync_playwright
d="/workspace/multiversal-lander/mocks/consensus/"
with sync_playwright() as p:
  b=p.chromium.launch();pg=b.new_page(viewport={"width":1440,"height":900})
  def s(f,out,sel=None,off=0):
    pg.goto("file://"+d+f);pg.wait_for_timeout(300)
    if sel: pg.evaluate(f"window.scrollTo(0,document.querySelector('{sel}').getBoundingClientRect().top+scrollY-{off})")
    pg.screenshot(path=d+out)
  s("home.html","home-1440.png");s("results.html","results-consensus-1440.png");s("results.html","results-columns-1440.png","#columns",30)
  s("pricing.html","pricing-1440.png");s("pricing.html","pricing-faq-1440.png",".faq",200)
