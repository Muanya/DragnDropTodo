import { projectStatus } from "../utils/util.js";

// interfaces
export interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

export interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
}

export interface Validater {
  field: string | number;
  required: boolean;
  minLength?: number;
  maxLength?: number;
}

export class ProjectData {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public numberOfPeople: number,
    public status: projectStatus
  ) {}
}
