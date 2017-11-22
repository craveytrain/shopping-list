export default function render({title, checked}) {
  return `<li><input type="checkbox" ${checked ? 'checked' : ''}/>${title}</li>`;
}
