import { ProjectData } from "../models/project.js";

export type projectStatus = "active" | "finished";
export type Listener = (c: ProjectData[]) => void;