import { PlusCircle } from '@phosphor-icons/react';

import styles from './TaskCreator.module.css';

export default function TaskCreator() {
  return (
    <div className={styles.wrapper}>
      <textarea placeholder="Adicione uma nova tarefa" />
      <button>
        <div>
          Criar
          <PlusCircle size={16} weight={'bold'} />
        </div>
      </button>
    </div>
  );
}