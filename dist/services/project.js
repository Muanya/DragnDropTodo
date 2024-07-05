import { ProjectData } from "../models/project.js";
class ProjectService {
    constructor() {
        this.projectList = [];
        this.listeners = [];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        else {
            this.instance = new ProjectService();
            return this.instance;
        }
    }
    addProjects(title, description, numberOfPeople) {
        this.projectList.push(new ProjectData(Math.random().toString(), title, description, numberOfPeople, "active"));
        this.notifyListeners();
    }
    addListeners(listener) {
        this.listeners.push(listener);
    }
    notifyListeners() {
        for (const func of this.listeners) {
            func(this.projectList.slice());
        }
    }
    updateList(id, newStatus) {
        const project = this.projectList.find((proj) => proj.id === id);
        if (project && project.status != newStatus) {
            project.status = newStatus;
            this.notifyListeners();
        }
    }
}
export const service = ProjectService.getInstance();
//# sourceMappingURL=project.js.map