export interface TaskProps {
  info: string;
  onCompleteTask: (isCompleted: boolean) => void;
  onDeleteTask: (taskInfoToDelete: string) => void;
}