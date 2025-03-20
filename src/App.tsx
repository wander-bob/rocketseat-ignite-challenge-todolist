import { Header } from './components/Header';

import styles from './App.module.css';
import { Input } from './components/Input';
import { TaskDashboard } from './components/TaskDaskboard';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

export interface TaskProps {
  id: string;
  content: string;
  checked: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [taskContent, setTaskContent] = useState('');

  function handleTaskContent(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setTaskContent(event.target.value);
  }

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();
    const newTask = {
      id: crypto.randomUUID(),
      content: taskContent,
      checked: false,
    };

    setTasks([...tasks, newTask]);
    setTaskContent('');
  }

  function handleNewTaskValid(event: InvalidEvent<HTMLInputElement>) {
    console.log(event);
    event.target.setCustomValidity('É necessário informar o nome da tarefa.');
  }

  function handleDeleteTask(taskToDeleteID: string) {
    const filteredTasks = tasks.filter((task) => task.id !== taskToDeleteID);
    setTasks(filteredTasks);
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <form onSubmit={handleAddNewTask}>
          <Input
            value={taskContent}
            required
            onInvalid={handleNewTaskValid}
            onChange={handleTaskContent}
            placeholder="Adicione uma nova tarefa"
          />
        </form>

        <TaskDashboard data={tasks} onDeleteTask={handleDeleteTask} />
      </main>
    </div>
  );
}
