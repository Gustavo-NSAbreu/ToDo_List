import { useState } from 'react';
import { TaskListProps } from '../types/TaskListProps.interface';
import Task from './Task';
import styles from './TaskList.module.css';
import EmptyTaskList from './EmptyTaskList';

export default function TaskList({ tasks, onDeleteTask }: TaskListProps) {
  const [completedTasks, setCompletedTasks] = useState(0);

  function handleCompleteTask(isCompleted: boolean) {
    if (isCompleted) setCompletedTasks((state) => state + 1);
    else setCompletedTasks((state) => state - 1);
  }

  const completedTasksCounter = tasks.length
    ? `${completedTasks} de ${tasks.length}`
    : tasks.length;

  const showTaskList = 
    tasks.length 
    ? tasks.map((task) => (
        <Task
          info={task.info}
          onCompleteTask={handleCompleteTask}
          onDeleteTask={onDeleteTask}
          key={task.info}
        />
      ))
    : <EmptyTaskList />;
  return (
    <div className={styles.wrapper}>
      <header>
        <div>
          Tarefas criadas<span>{tasks.length}</span>
        </div>
        <div>
          Concluídas<span>{completedTasksCounter}</span>
        </div>
      </header>

      <main>
        {showTaskList}
      </main>
    </div>
  );
}
