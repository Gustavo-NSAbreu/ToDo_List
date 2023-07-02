import { TaskProps } from "./TaskProps.interface";

export interface TaskCreatorProps{
  onTaskCreation: (newTask: TaskProps) => void;
}