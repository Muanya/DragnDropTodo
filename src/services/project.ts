import { ProjectData } from "../models/project.js";
import { Listener, projectStatus } from "../utils/util.js";

class ProjectService {
    private static instance: ProjectService;
    private projectList: ProjectData[] = [];
    private listeners: Listener[] = [];
  
    private constructor() {}
  
    public static getInstance(): ProjectService {
      if (this.instance) {
        return this.instance;
      } else {
        this.instance = new ProjectService();
        return this.instance;
      }
    }
  
    addProjects(title: string, description: string, numberOfPeople: number) {
      this.projectList.push(
        new ProjectData(
          Math.random().toString(),
          title,
          description,
          numberOfPeople,
          "active"
        )
      );
  
      this.notifyListeners();
    }
  
    addListeners(listener: Listener) {
      this.listeners.push(listener);
    }
  
    private notifyListeners() {
      for (const func of this.listeners) {
        func(this.projectList.slice());
      }
    }
  
    public updateList(id: string, newStatus: projectStatus) {
      const project = this.projectList.find((proj) => proj.id === id);
  
      if (project && project.status != newStatus) {
        project.status = newStatus;
        this.notifyListeners();
      }
    }
  }

  
  export const service = ProjectService.getInstance();
