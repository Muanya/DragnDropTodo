import { autobind } from "../decorators/template.js";
import { DragTarget, ProjectData } from "../models/project.js";
import { service } from "../services/project.js";
import { projectStatus } from "../utils/util.js";
import { ProjectItem } from "./project-item.js";

export class ProjectList implements DragTarget {
    element: HTMLElement;
  
    constructor(private type: projectStatus) {
      this.element = document.querySelector(`#${type}-projects`) as HTMLElement;
      service.addListeners(this.addProject);
      this.renderContent();
    }
  
    @autobind
    dragOverHandler(event: DragEvent): void {
      event.preventDefault();
      const liEl = this.element.querySelector("ul")!;
      liEl.classList.add("droppable");
    }
  
    @autobind
    dropHandler(event: DragEvent): void {
      const data = event.dataTransfer!.getData("text/plain");
      service.updateList(data, this.type);
    }
  
    @autobind
    dragLeaveHandler(event: DragEvent): void {
      const liEl = this.element.querySelector("ul")!;
      liEl?.classList.remove("droppable");
    }
  
    public renderContent() {
      const listId = `${this.type}-projects-list`;
      this.element.querySelector("ul")!.id = listId;
      this.element.querySelector("h2")!.textContent =
        this.type.toUpperCase() + " PROJECTS";
      this.configure();
    }
  
    configure() {
      this.element.addEventListener("dragover", this.dragOverHandler);
      this.element.addEventListener("drop", this.dropHandler);
      this.element.addEventListener("dragleave", this.dragLeaveHandler);
    }
  
    @autobind
    public addProject(projects: ProjectData[]) {
      const ul = document.getElementById(
        `${this.type}-projects-list`
      ) as HTMLUListElement;
  
      ul.innerHTML = "";
  
      for (let project of projects) {
        if (project.status == this.type) {
          new ProjectItem(project, ul);
        }
      }
    }
  }
  