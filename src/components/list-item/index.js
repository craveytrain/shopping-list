/* globals HTMLElement  */
import render from './render';

class ListItem extends HTMLElement {
  static get tagName() {
    return 'list-item';
  }

  static get observedAttributes() {
    return ['title', 'checked'];
  }
  connectedCallback() {
    const title = this.getAttribute('title');
    this.log('connected', title);
    this.render();
  }
  render() {
    const title = this.getAttribute('title');
    const checked = this.getAttribute('checked') === 'true';
    this.innerHTML = render({title, checked});
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
    console.log(`🔘 ${ListItem.tagName}`, ...args);
  }
}

export default ListItem;
