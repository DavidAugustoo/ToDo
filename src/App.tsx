import { Header } from './components/Header/Header';
import { PlusCircle } from 'phosphor-react';

import style from './App.module.css';

import './global.css';

function App() {
  return (
    <>
    <Header />

    <form className={style.taskForm} action="">
      <input placeholder="Adicione uma nova tarefa" />

      <button type="submit">
        Criar
        <PlusCircle size={20} weight="bold"/>
      </button>
    </form>

    </>
  )
}

export default App
