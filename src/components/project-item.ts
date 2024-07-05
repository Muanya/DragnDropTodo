import { autobind } from "../decorators/template.js";
import { Draggable, ProjectData } from "../models/project.js";

export class ProjectItem implements Draggable {
    constructor(private project: ProjectData, parent: HTMLUListElement) {
      this.render(parent);
    }
  
    public get persons(): string {
      if (this.project.numberOfPeople < 1) {
        return "No Person";
      } else if (this.project.numberOfPeople === 1) {
        return "1 Person";
      } else {
        return `${this.project.numberOfPeople} Persons`;
      }
    }
  
    private render(parent: HTMLUListElement) {
      const h2El = document.createElement("h2");
      h2El.textContent = this.project.title;
  
      const h3El = document.createElement("h3");
      h3El.textContent = this.persons + " Assigned";
  
      const pEl = document.createElement("h2");
      pEl.textContent = this.project.description;
  
      const liEl = document.createElement("li");
  
      // insert elements
      liEl.insertAdjacentElement("beforeend", h2El);
      liEl.insertAdjacentElement("beforeend", h3El);
      liEl.insertAdjacentElement("beforeend", pEl);
  
      parent.appendChild(liEl);
  
      this.configure(liEl);
    }
    configure(element: HTMLLIElement) {
      element.setAttribute("draggable", "true");
      element.addEventListener("dragstart", this.dragStartHandler);
      element.addEventListener("dragend", this.dragEndHandler);
    }
  
    @autobind
    dragStartHandler(event: DragEvent): void {
      event.dataTransfer!.setData("text/plain", this.project.id);
      event.dataTransfer!.dropEffect = "move";
    }
  
    @autobind
    dragEndHandler(_: DragEvent): void {
      console.log("DragEnd");
    }
  }
  