(function () {
  var section = document.querySelector(".footnotes[role='doc-endnotes']");
  if (!section) return;

  var items = {};
  section.querySelectorAll("li[id]").forEach(function (li) {
    items[li.id] = li.innerHTML;
  });

  var heading = document.getElementById("footnotes");
  if (heading) heading.remove();
  section.remove();

  var dialog = document.querySelector(".fn-modal");
  if (!dialog) return;
  var content = dialog.querySelector(".fn-modal-content");

  document.addEventListener("click", function (e) {
    var link = e.target.closest("a[href^='#fn:']");
    if (!link) return;
    e.preventDefault();
    var id = decodeURIComponent(link.getAttribute("href").slice(1));
    var html = items[id];
    if (!html) return;
    content.innerHTML = html;
    document.body.style.overflow = "hidden";
    dialog.showModal();
  });

  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) dialog.close();
  });

  dialog.addEventListener("close", function () {
    document.body.style.overflow = "";
  });
})();
