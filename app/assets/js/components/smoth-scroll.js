// Vanilla JavaScript Scroll to Anchor
// @ https://perishablepress.com/vanilla-javascript-scroll-anchor/

(function() {
  scrollTo();
})();

function scrollAnchors(e, respond = null) {
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
  e.preventDefault();
  const targetID = respond
    ? respond.getAttribute("href")
    : this.getAttribute("href");
  const targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);
  window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });
  const checkIfDone = setInterval(function() {
    const atBottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = "-1";
      targetAnchor.focus();
      window.history.pushState("", "", targetID);
      clearInterval(checkIfDone);
    }
  }, 100);
}

function scrollTo() {
  const links = document.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    if (
      link.href &&
      link.href.indexOf("#") != -1 &&
      (link.pathname == location.pathname ||
        "/" + link.pathname == location.pathname) &&
      link.search == location.search
    ) {
      link.onclick = scrollAnchors;
    }
  }
}
