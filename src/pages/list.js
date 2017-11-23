import data from './data';

export default function renderList(listId = 'groceries') {
  const list = data.lists[listId];
  const items = JSON.stringify(list.items);

  return `<list-container items="${items}" title="${list.title}">
    <!--#include virtual="/list-container?title=${encodeURIComponent(list.title)}&items=${encodeURIComponent(items)}" -->
  </list-container>`;
}
