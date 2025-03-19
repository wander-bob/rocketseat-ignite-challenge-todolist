import { Button } from './Button';

import styles from './Input.module.css';
import plus from '../assets/plus.svg';

export function Input() {
  return (
    <div className={styles['input-container']}>
      <div className={styles['input-wrapper']}>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Adicione uma nova tarefa"
        />
      </div>
      <Button content="Criar" icon={plus} />
    </div>
  );
}
