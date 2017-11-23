export default function render({title, items}) {
  return `<h1>${title}</h1>
    <ul>
      ${items.map(item => `<list-item title="${item.title}" checked="${item.checked}"><!--#include virtual="/list-item?title=${encodeURIComponent(item.title)}&checked=${encodeURIComponent(item.checked)}" --></list-item>`).join('')}
    </ul>
  `;
}
