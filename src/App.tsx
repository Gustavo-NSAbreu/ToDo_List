// import styles from './App.module.css';
import Header from './components/Header';
import TaskCreator from './components/TaskCreator';
import TaskList from './components/TaskList';

import { useState } from 'react';

import styles from './App.module.css';
import './global.css';
import { TaskProps } from './types/TaskProps.interface';

function App() {
  const [tasks, setTasks] = useState(Array<TaskProps>);

  function handleTaskCreation(newTask: TaskProps) {
    setTasks((state) => [...state, newTask]);
  }

  function handleDeleteTask(taskInfoToDelete: string) {
    setTasks(
      (state) =>
        (state = state.filter((task) => task.info !== taskInfoToDelete))
    );
  }

  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <TaskCreator onTaskCreation={handleTaskCreation} />
        <TaskList
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
