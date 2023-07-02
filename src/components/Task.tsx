import { ChangeEvent, useState } from 'react';
import styles from './Task.module.css';
import { Trash } from '@phosphor-icons/react';
import { TaskProps } from '../types/TaskProps.interface';

export default function Task({ info, onCompleteTask, onDeleteTask }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheck() {
    setIsChecked((state) => !state);
    onCompleteTask(!isChecked)
  }

  function handleDeleteTask() {
    onDeleteTask(info);
    handleCheck();
  }

  const taskInfoStyle = isChecked
    ? styles['task-info-done']
    : styles['task-info'];

  return (
    <div className={styles.task}>
      <input
        type="checkbox"
        className={styles.checkbox}
        onChange={handleCheck}
        defaultChecked={false}
      />
      <p className={taskInfoStyle}>
        {info}
      </p>
      <button onClick={handleDeleteTask}>
        <Trash size={14} />
      </button>
    </div>
  );
}
