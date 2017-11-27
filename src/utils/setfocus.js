export default domElement => {
  const el = domElement;
  const range = document.createRange();
  const sel = window.getSelection();
  range.setStart(el.childNodes[0], el.childNodes[0].length);
  range.collapse(true);
  sel.removeAllRanges();
  sel.addRange(range);
  el.focus();
};
