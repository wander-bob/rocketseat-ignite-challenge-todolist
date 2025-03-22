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

  const finishedTasks = tasks.reduce((prev, task) => {
    if (task.checked) {
      return prev + 1;
    }
    return prev;
  }, 0);

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

  function handleTaskStatus(id: string, status: boolean) {
    const updatedTasksList = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, checked: status };
      }
      return { ...task };
    });
    setTasks(updatedTasksList);
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

        <TaskDashboard
          tasks={tasks}
          completedTasks={finishedTasks}
          onDeleteTask={handleDeleteTask}
          onToggleTaskStatus={handleTaskStatus}
        />
      </main>
    </div>
  );
}
