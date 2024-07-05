import { loadTemplate } from "../decorators/template.js";
import { ProjectList } from "./project-list.js";

@loadTemplate("project-list", "app", "finished-projects")
export class FinishedProject extends ProjectList {
  constructor() {
    super("finished");
  }
}