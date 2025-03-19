import styles from './TaskDaskboard.module.css';
import clipboard from '../assets/clipboard.svg';

import { Task } from './Task';
import { useState } from 'react';

export function TaskDashboard() {
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
        {/* <div className={styles['task-list-empty']}>
          <img src={clipboard} alt="Taskboard vazia" />
          <h3>Você ainda não tem tarefas cadastradas</h3>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div> */}

        <Task
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ut
        eligendi optio eos aut perspiciatis."
        />
        <Task
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ut
        eligendi optio eos aut perspiciatis."
        />
      </div>
    </div>
  );
}
