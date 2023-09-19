export class HomePage extends HTMLElement {
  constructor() {
    super();

    this.connectedCallback();
  }
  connectedCallback() {
    this.innerHTML = `
      <div>
        <h1>Home Page</h1>
        <p>Welcome to the home page!</p>
        <a href="#about">Go to About</a>
      </div>
    `;
  }
}
