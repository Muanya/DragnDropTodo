var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { autobind } from "../decorators/template.js";
import { service } from "../services/project.js";
import { ProjectItem } from "./project-item.js";
export class ProjectList {
    constructor(type) {
        this.type = type;
        this.element = document.querySelector(`#${type}-projects`);
        service.addListeners(this.addProject);
        this.renderContent();
    }
    dragOverHandler(event) {
        event.preventDefault();
        const liEl = this.element.querySelector("ul");
        liEl.classList.add("droppable");
    }
    dropHandler(event) {
        const data = event.dataTransfer.getData("text/plain");
        service.updateList(data, this.type);
    }
    dragLeaveHandler(event) {
        const liEl = this.element.querySelector("ul");
        liEl === null || liEl === void 0 ? void 0 : liEl.classList.remove("droppable");
    }
    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector("ul").id = listId;
        this.element.querySelector("h2").textContent =
            this.type.toUpperCase() + " PROJECTS";
        this.configure();
    }
    configure() {
        this.element.addEventListener("dragover", this.dragOverHandler);
        this.element.addEventListener("drop", this.dropHandler);
        this.element.addEventListener("dragleave", this.dragLeaveHandler);
    }
    addProject(projects) {
        const ul = document.getElementById(`${this.type}-projects-list`);
        ul.innerHTML = "";
        for (let project of projects) {
            if (project.status == this.type) {
                new ProjectItem(project, ul);
            }
        }
    }
}
__decorate([
    autobind
], ProjectList.prototype, "dragOverHandler", null);
__decorate([
    autobind
], ProjectList.prototype, "dropHandler", null);
__decorate([
    autobind
], ProjectList.prototype, "dragLeaveHandler", null);
__decorate([
    autobind
], ProjectList.prototype, "addProject", null);
//# sourceMappingURL=project-list.js.map