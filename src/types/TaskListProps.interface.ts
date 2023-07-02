interface Task {
  info: string;
}

export interface TaskListProps {
  tasks: Array<Task>;
  onDeleteTask: (taskInfoToDelete: string) => void;
}
