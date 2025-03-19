import styles from './Button.module.css';

interface ButtonProps {
  content?: string;
  icon: string;
}

export function Button({ icon, content }: ButtonProps) {
  return (
    <button type="button" className={content && styles.button}>
      {content}
      <img src={icon} />
    </button>
  );
}
