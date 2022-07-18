import { Circle, Trash } from 'phosphor-react';

import style from '../Task/Task.module.css'

interface TaskProps {
    id: string
    content: string,
    isChecked: boolean
}

export function Task({content, isChecked}: TaskProps) {
    return (
        <ul className={style.taskItem}>
            <button className={style.taskCheckbox}>
                <Circle size={20} />
            </button>

            <p>{content}</p>
            
            
            <button className={style.taskDelete}>
                <Trash size={17} />
            </button>
        </ul>
    )
}