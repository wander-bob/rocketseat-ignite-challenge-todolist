import { Header } from './components/Header';

import styles from './App.module.css';
import { Input } from './components/Input';
import { TaskDashboard } from './components/TaskDaskboard';
import { ChangeEvent, useState } from 'react';

export interface TaskProps {
  id: string;
  content: string;
  checked: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [taskContent, setTaskContent] = useState('');

  function handleTaskContent(element: ChangeEvent<HTMLInputElement>) {
    setTaskContent(element.target.value);
  }

  function handleAddNewTask() {
    const newTask = {
      id: crypto.randomUUID(),
      content: taskContent,
      checked: false,
    };

    setTasks([...tasks, newTask]);
    setTaskContent('');
  }

  function handleDeleteTask(taskToDeleteID: string) {
    const filteredTasks = tasks.filter((task) => task.id !== taskToDeleteID);
    setTasks(filteredTasks);
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Input
          onChange={handleTaskContent}
          value={taskContent}
          onCreateNewTask={handleAddNewTask}
        />

        <TaskDashboard data={tasks} onDeleteTask={handleDeleteTask} />
      </main>
    </div>
  );
}
