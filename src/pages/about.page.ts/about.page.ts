import "./about.page.scss";
export class AboutPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div>
        <h1>Details Page</h1>
        <p>Here are the details.</p>
        <a href="#home">Go back to Home</a>
      </div>
    `;
  }
}
