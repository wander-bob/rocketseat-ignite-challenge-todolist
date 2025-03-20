import styles from './TaskDaskboard.module.css';
import clipboard from '../assets/clipboard.svg';

import { Task } from './Task';

interface Data {
  content: string;
  checked: boolean;
}

interface DataProps {
  data: Data[];
}

export function TaskDashboard({ data }: DataProps) {
  return (
    <div className={styles['task-container']}>
      <div className={styles['task-status-board']}>
        <div className={styles['task-counter']}>
          <strong className={styles['opened-tasks']}>Tarefas criadas</strong>
          <span className={styles.counter}>0</span>
        </div>
        <div className={styles['task-counter']}>
          <strong className={styles['closed-tasks']}>Concluídas</strong>
          <span className={styles.counter}>0</span>
        </div>
      </div>
      <div className={styles['task-list']}>
        {data.length > 0 ? (
          data.map((task) => <Task content={task.content} />)
        ) : (
          <div className={styles['task-list-empty']}>
            <img src={clipboard} alt="Taskboard vazia" />
            <h3>Você ainda não tem tarefas cadastradas</h3>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </div>
    </div>
  );
}
