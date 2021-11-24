// Code goes here!

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDListElement;
  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDListElement;

    const importeNode = document.importNode(this.templateElement.content, true);
  }
}
