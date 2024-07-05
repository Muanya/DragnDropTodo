var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { autobind } from "../decorators/template.js";
export class ProjectItem {
    constructor(project, parent) {
        this.project = project;
        this.render(parent);
    }
    get persons() {
        if (this.project.numberOfPeople < 1) {
            return "No Person";
        }
        else if (this.project.numberOfPeople === 1) {
            return "1 Person";
        }
        else {
            return `${this.project.numberOfPeople} Persons`;
        }
    }
    render(parent) {
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
    configure(element) {
        element.setAttribute("draggable", "true");
        element.addEventListener("dragstart", this.dragStartHandler);
        element.addEventListener("dragend", this.dragEndHandler);
    }
    dragStartHandler(event) {
        event.dataTransfer.setData("text/plain", this.project.id);
        event.dataTransfer.dropEffect = "move";
    }
    dragEndHandler(_) {
        console.log("DragEnd");
    }
}
__decorate([
    autobind
], ProjectItem.prototype, "dragStartHandler", null);
__decorate([
    autobind
], ProjectItem.prototype, "dragEndHandler", null);
//# sourceMappingURL=project-item.js.map