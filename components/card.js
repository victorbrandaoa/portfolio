export default class InfoCard extends HTMLElement {
  constructor() {
    super();

    this.title = '';
    this.content = [];
  }

  async getContent() {
    const sec = this.parentElement.getAttribute('sec');
    const subSec = this.getAttribute('sub-sec');

    const response = await fetch('./data/content.json');
    const json_data = await response.json();

    return json_data[sec][subSec];
  }

  setContent(data) {
    this.title = data['title'];
    this.content = data['content'];
  }

  async connectedCallback() {
    const data = await this.getContent();
    this.setContent(data);

    this.render();
  }

  render() {
    const renderContent = this.content.map(function (c) {
      return `<p>${c}</p>`;
    });

    this.innerHTML = `
    <style>
    </style>

    <div class="card-box">
      <h3>${this.title}</h3>
      <div class="card-content-box">
        ${renderContent.join('\n')}
      </div>
    </div>
    `;
  }

  static createComponent(subSec) {
    const componentTag = 'info-card';
    return `<${componentTag} sub-sec="${subSec}"></${componentTag}>`;
  }
}

customElements.define('info-card', InfoCard);