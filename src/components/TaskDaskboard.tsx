import styles from './TaskDaskboard.module.css';
import clipboard from '../assets/clipboard.svg';

import { Task } from './Task';
import { TaskProps } from '../App';

interface Props {
  tasks: TaskProps[];
  completedTasks: number;
  onDeleteTask: (id: string) => void;
  onToggleTaskStatus: (id: string, status: boolean) => void;
}

export function TaskDashboard({
  tasks,
  completedTasks,
  onDeleteTask,
  onToggleTaskStatus,
}: Props) {
  function handleToggleTaskStatus(taskId: string, status: boolean) {
    onToggleTaskStatus(taskId, status);
  }

  return (
    <div className={styles['task-container']}>
      <div className={styles['task-status-board']}>
        <div className={styles['task-counter']}>
          <strong className={styles['opened-tasks']}>Tarefas criadas</strong>
          <span className={styles.counter}>{tasks.length}</span>
        </div>
        <div className={styles['task-counter']}>
          <strong className={styles['closed-tasks']}>Concluídas</strong>
          <span className={styles.counter}>
            {tasks.length && `${completedTasks} de ${tasks.length}`}
          </span>
        </div>
      </div>
      <div className={styles['task-list']}>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              taskId={task.id}
              checked={task.checked}
              content={task.content}
              onDelete={onDeleteTask}
              onChecked={handleToggleTaskStatus}
            />
          ))
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
