import { Header } from './components/Header';

import styles from './App.module.css';
import { Input } from './components/Input';
import { TaskDashboard } from './components/TaskDaskboard';

interface Task {
  content: string;
  checked: boolean;
}

// const tasks: Task[] = [];
const tasks: Task[] = [
  {
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores uteligendi optio eos aut perspiciatis.',
    checked: false,
  },
  {
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores uteligendi optio eos aut perspiciatis.',
    checked: true,
  },
];

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Input />

        <TaskDashboard data={tasks} />
      </main>
    </div>
  );
}
