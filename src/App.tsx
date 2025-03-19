import { Header } from './components/Header';

import styles from './App.module.css';

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <div className="add-task-input">
          <input type="text" placeholder="Adicione uma nova tarefa" />
        </div>
        <button>criar</button>

        <div className="task-board">
          <div className="counter">
            <div className="close-tasks">
              Title
              <p>counter</p>
            </div>
            <div className="opened-tasks">
              Title
              <p>counter</p>
            </div>
            <div className="task-list">
              <div className="task">
                <button>state</button>
                content
                <button>delete</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
