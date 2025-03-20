import { Button } from './Button';

import styles from './Input.module.css';
import plus from '../assets/plus.svg';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps) {
  return (
    <div className={styles['input-container']}>
      <div className={styles['input-wrapper']}>
        <input autoFocus={true} type="text" name="task" id="task" {...props} />
      </div>
      <Button content="Criar" icon={plus} type="submit" />
    </div>
  );
}
