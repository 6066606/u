(function () {
  document.addEventListener("click", (e) => {
    const pre = e.target.closest("pre:has(code)");
    if (pre) pre.focus();
  });
  document.addEventListener("copy", (e) => {
    const pre = e.target.closest("pre:has(code)");
    if (!pre) return;
    e.preventDefault();
    const content = window.getSelection().toString() || pre.textContent;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(content);
    }
  });
})();
