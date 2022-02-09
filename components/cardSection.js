import InfoCard from "./card.js";

export default class CardSection extends HTMLElement {
  constructor() {
    super();

    this.secName = '';
    this.cardStrings = [];
  }

  connectedCallback() {
    this.secName = this.getAttribute('sec-name');
    this.cardStrings = this.getAttribute('card-str').split(',');

    this.render();
  }

  render() {
    const cards = this.cardStrings.map(function(c) {
      return InfoCard.createComponent(c);
    });

    this.innerHTML = `
      <section class="${this.secName}" sec="${this.secName}">
        ${cards.join('\n')}
      </section>
    `;
  }

  static createComponent(secName, cardStrings) {
    const componentTag = 'card-section';
    return `<${componentTag} sec-name="${secName}" card-str="${cardStrings.join(',')}"></${componentTag}>`;
  }
}

customElements.define('card-section', CardSection);