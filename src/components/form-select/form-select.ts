export class FormSelect extends HTMLElement {
  options: HTMLElement[];
  value: string;
  $backdrop: HTMLElement;

  connectedCallback() {
    this.classList.add("form-select");
    this.options = [...this.children] as HTMLElement[];
    this.innerHTML = this.getAttribute("placeholder") ?? " Selecione ...";

    this.addEventListener("click", () => {
      this.$backdrop = document.querySelector<HTMLElement>(".backdrop");
      if (!this.$backdrop) {
        this.createOptions();
        return;
      }
      this.$backdrop?.remove();
    });

    document.querySelector("html").addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const item = event.target as HTMLElement;
      if (item.tagName != "FORM-SELECT") {
        this.$backdrop?.remove();
      }
    });
  }

  createOptions() {
    this.$backdrop = document.createElement("div");
    this.$backdrop.classList.add("backdrop");
    this.options
      .map((value) => {
        return value.cloneNode(true) as HTMLElement;
      })
      .forEach((value) => {
        this.changeOption(value, this.$backdrop);
        this.$backdrop.appendChild(value);
      });

    this.append(this.$backdrop);
    this.$backdrop?.focus();
  }

  changeOption($element: HTMLElement, $backdrop: HTMLElement) {
    $element.addEventListener("click", (event) => {
      const item = event.target as HTMLElement;
      this.innerHTML = item.innerHTML;
      this.value = item.getAttribute("value");
      this.setAttribute("value", this.value);
      event.preventDefault();
      event.stopPropagation();
      this.dispatchEvent(new Event("change"));
      $backdrop.remove();
    });
  }
}

customElements.define("form-select", FormSelect);
