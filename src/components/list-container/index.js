/* globals HTMLElement  */
import render from './render';

class ListContainer extends HTMLElement {
  static get tagName() {
    return 'list-container';
  }

  static get observedAttributes() {
    return ['items', 'title'];
  }
  connectedCallback() {
    const title = this.getAttribute('title');
    this.log('connected', title);
    this.render();
  }
  render() {
    const title = this.getAttribute('title');
    const items = this.getAttribute('items');
    console.log(items);
    this.innerHTML = render({title, items});
  }
  attributeChangedCallback(attr, oldValue, newValue) {
    this.log('attributeChanged', attr, oldValue, newValue);
    this.render();
  }
  disconnectedCallback() {
    const title = this.getAttribute('title');
    this.log('disconnected', title);
  }
  log(...args) {
    console.log(`🔘 ${ListContainer.tagName}`, ...args);
  }
}

export default ListContainer;
