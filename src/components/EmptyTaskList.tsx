import styles from './EmptyTaskList.module.css';
import clipboard from '../assets/clipboard.svg'

export default function EmptyTaskList() {
  return (
    <div className={styles.emptyTaskList}>
      <img src={clipboard} />
      <div>
        <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}