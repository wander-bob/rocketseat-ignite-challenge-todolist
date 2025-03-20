import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content?: string;
  icon: string;
}

export function Button({ icon, content, ...props }: ButtonProps) {
  return (
    <button type="button" className={content && styles.button} {...props}>
      {content}
      <img src={icon} />
    </button>
  );
}
