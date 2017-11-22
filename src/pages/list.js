import data from './data';

export default function renderList(listId = 'groceries') {
  const list = data.lists[listId];

  return `
    <h1>${list.title}</h1>
    <ul>
      ${list.items.map(item => `<list-item title="${item.title}" checked="${item.checked}"><!--#include virtual="/list-item?title=${encodeURIComponent(item.title)}&checked=${encodeURIComponent(item.checked)}" --></list-item>`).join('')}
    </ul>
  `;
}
