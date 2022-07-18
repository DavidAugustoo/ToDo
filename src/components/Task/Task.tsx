import { Circle, Trash } from 'phosphor-react';

import style from '../Task/Task.module.css'

interface TaskProps {
    id: string;
    content: string;
    isChecked: boolean;
    onDeleteTask: (id: string) => void;
}

export function Task({id, content, isChecked, onDeleteTask}: TaskProps) {

    function handleDeleteTask() {
        onDeleteTask(id);
    }

    return (
        <ul className={style.taskItem}>
            <button className={style.taskCheckbox}>
                <Circle size={20} />
            </button>

            <p>{content}</p>
            
            
            <button className={style.taskDelete} onClick={handleDeleteTask}>
                <Trash size={17} />
            </button>
        </ul>
    )
}