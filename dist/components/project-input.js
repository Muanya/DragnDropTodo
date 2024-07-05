var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { autobind, loadTemplate } from "../decorators/template.js";
import { service } from "../services/project.js";
let ProjectInput = class ProjectInput {
    constructor() {
        this.formElement = document.querySelector("#user-input");
        this.titleInput = document.querySelector("#title");
        this.descriptionInput = document.querySelector("#description");
        this.peopleInput = document.querySelector("#people");
        this.configure();
    }
    configure() {
        this.formElement.addEventListener("submit", this.submitHandler);
    }
    submitHandler(event) {
        event.preventDefault();
        const result = this.getUserInput();
        if (!Array.isArray(result)) {
            return;
        }
        service.addProjects(...result);
    }
    getUserInput() {
        const isValidTitle = this.validate({
            field: this.titleInput.value,
            required: true,
        });
        const isValidDesc = this.validate({
            field: this.descriptionInput.value,
            required: false,
            minLength: 1,
            maxLength: 250,
        });
        const isValidPeople = this.validate({
            field: +this.peopleInput.value,
            required: false,
            minLength: 1,
            maxLength: 5,
        });
        if (!isValidTitle || !isValidDesc || !isValidPeople) {
            alert("Invalid input");
            return;
        }
        return [
            this.titleInput.value,
            this.descriptionInput.value,
            +this.peopleInput.value,
        ];
    }
    validate(val) {
        let isValid = true;
        if (val.required) {
            isValid = isValid && val.field.toString().trim().length !== 0;
        }
        if (val.minLength != null && typeof val.field === "string") {
            isValid = isValid && val.field.trim().length >= val.minLength;
        }
        if (val.minLength != null && typeof val.field === "number") {
            isValid = isValid && val.field >= val.minLength;
        }
        if (val.maxLength != null && typeof val.field === "string") {
            isValid = isValid && val.field.length <= val.maxLength;
        }
        if (val.maxLength != null && typeof val.field === "number") {
            isValid = isValid && val.field <= val.maxLength;
        }
        return isValid;
    }
};
__decorate([
    autobind
], ProjectInput.prototype, "submitHandler", null);
ProjectInput = __decorate([
    loadTemplate("project-input", "app", "user-input")
], ProjectInput);
export { ProjectInput };
//# sourceMappingURL=project-input.js.map