export default function applyClass(parent, cssClass) {
  const els = parent.querySelectorAll('#editable-heading');

  els.forEach(item => {
    item.classList.add(cssClass);
  });
}
