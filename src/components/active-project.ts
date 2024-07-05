import { loadTemplate } from "../decorators/template.js";
import { ProjectList } from "./project-list.js";

@loadTemplate("project-list", "app", "active-projects")
export class ActiveProject extends ProjectList {
  constructor() {
    super("active");
  }
}

