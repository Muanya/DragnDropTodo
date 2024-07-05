import { autobind, loadTemplate } from "../decorators/template.js";
import { Validater } from "../models/project.js";
import { service } from "../services/project.js";

@loadTemplate("project-input", "app", "user-input")
export class ProjectInput {
  formElement: HTMLFormElement;
  titleInput: HTMLInputElement;
  descriptionInput: HTMLInputElement;
  peopleInput: HTMLInputElement;

  constructor() {
    this.formElement = document.querySelector("#user-input") as HTMLFormElement;
    this.titleInput = document.querySelector("#title") as HTMLInputElement;
    this.descriptionInput = document.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInput = document.querySelector("#people") as HTMLInputElement;

    this.configure();
  }

  configure(): void {
    this.formElement.addEventListener("submit", this.submitHandler);
  }

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const result = this.getUserInput();

    if (!Array.isArray(result)) {
      return;
    }

    service.addProjects(...result);
  }

  private getUserInput(): [string, string, number] | undefined {
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

  validate(val: Validater): boolean {
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
}
