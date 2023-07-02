import { PlusCircle } from '@phosphor-icons/react';

import styles from './TaskCreator.module.css';
import { TaskCreatorProps } from '../types/TasksCreatorProps.interface';
import { ChangeEvent, useState } from 'react';
import { TaskProps } from '../types/TaskProps.interface';

export default function TaskCreator({ onTaskCreation }: TaskCreatorProps) {
  const [taskText, setTaskText] = useState('');

  function handleTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setTaskText(event.target.value);
  }

  function handleTaskCreation() {
    const task = { info: taskText } as TaskProps;
    onTaskCreation(task);
    setTaskText('');
  }

  return (
    <div className={styles.wrapper}>
      <textarea
        placeholder="Adicione uma nova tarefa"
        value={taskText}
        onChange={handleTextChange}
      />
      <button onClick={handleTaskCreation}>
        <div>
          Criar
          <PlusCircle
            size={16}
            weight={'bold'}
          />
        </div>
      </button>
    </div>
  );
}
