/* ==========================================================
   Azam's Aesthetic Avenue
   1) Image fallback  2) Placeholder-link notice
   ========================================================== */
(function () {
  "use strict";

  /* ---------- 1) Image fallback ---------- */
  function showFallback(img) {
    if (img.dataset.failed) return;
    img.dataset.failed = "true";

    var label = img.getAttribute("data-fallback") || "";
    if (!label) {
      img.style.display = "none";
      return;
    }
    var span = document.createElement("span");
    span.className = "img-fallback " + img.className;
    span.setAttribute("role", "img");
    span.setAttribute("aria-label", img.alt);
    span.textContent = label;
    img.replaceWith(span);
  }

  document.querySelectorAll("img[data-fallback]").forEach(function (img) {
    img.addEventListener("error", function () {
      showFallback(img);
    });
    if (img.complete && img.naturalWidth === 0) {
      showFallback(img);
    }
  });

  /* ---------- 2) Placeholder links ----------
     Buttons that still have href="#" do not jump to the top;
     they show a small "Link not added yet" notice instead.
     Once you add a real URL, this does nothing. */
  var toast = document.getElementById("toast");
  var timer;

  function notify(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(timer);
    timer = setTimeout(function () {
      toast.classList.remove("show");
    }, 2200);
  }

  document.querySelectorAll(".link").forEach(function (tile) {
    tile.addEventListener("click", function (e) {
      var href = tile.getAttribute("href");
      if (!href || href === "#") {
        e.preventDefault();
        notify("Link not added yet");
      }
    });
  });
})();
