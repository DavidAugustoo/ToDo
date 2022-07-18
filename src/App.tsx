import { Header } from './components/Header/Header';
import { PlusCircle } from 'phosphor-react';
import {v4 as uuid} from 'uuid';

import style from './App.module.css';

import './global.css';
import { Task } from './components/Task/Task';
import { ChangeEvent, FormEvent, useState } from 'react';

interface Task {
  id: string
  content: string,
  isChecked: boolean
}

function App() {

  const [newTaskText, setNewTaskText] = useState('');

  const [tasks, setTasks] = useState<Task[]>([]);

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, {
      id: uuid(),
      content: newTaskText,
      isChecked: false
    }]);

    setNewTaskText('');
  }

  return (
    <>
      <Header />

      <main>
        <form onSubmit={handleCreateNewTask} className={style.taskForm}>
          <input 
            value={newTaskText}
            onChange={handleNewTaskChange}
            placeholder="Adicione uma nova tarefa" 
          />

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
          {tasks.map(task => {
            return <Task key={task.id} content={task.content} isChecked={task.isChecked}/>
          })}
        </li>
      </main>

    </>
  )
}

export default App
