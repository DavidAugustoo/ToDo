import { Header } from './components/Header/Header';
import { PlusCircle } from 'phosphor-react';

import style from './App.module.css';

import './global.css';
import { Task } from './components/Task/Task';

function App() {
  return (
    <>
      <Header />

      <main>
        <form className={style.taskForm} action="">
          <input placeholder="Adicione uma nova tarefa" />

          <button type="submit">
            Criar
            <PlusCircle size={20} weight="bold" />
          </button>
        </form>

        <div className={style.taskArea}>
          <p className={style.taskCreated}>Tarefas Criadas <span>3</span></p>
          <p className={style.taskCompleted}>Concluídas <span>2 de 5</span></p>
        </div>

        <li className={style.taskList}>
          <Task />
          <Task />
          <Task />
        </li>
      </main>

    </>
  )
}

export default App
