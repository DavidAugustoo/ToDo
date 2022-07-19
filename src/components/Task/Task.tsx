import { Circle, Trash, CheckCircle } from 'phosphor-react';

import style from '../Task/Task.module.css'

interface TaskProps {
    id: string;
    content: string;
    isChecked: boolean;
    onDeleteTask: (id: string) => void;
    changeStatusTask: (id: string) => void;
}

export function Task({ id, content, isChecked, onDeleteTask, changeStatusTask }: TaskProps) {

    function handleDeleteTask() {
        onDeleteTask(id);
    }

    function onChangeStatusTask() {
        changeStatusTask(id)
    }

    return (
        <li className={style.taskItem}>
            {isChecked ?
                <button className={style.taskCheckboxCompleted} onClick={onChangeStatusTask}>
                    <CheckCircle size={20} weight="fill" />
                </button>
                :
                <button className={style.taskCheckbox} onClick={onChangeStatusTask}>
                    <Circle size={20} />
                </button>
            }

            {isChecked ?
                <p className={style.taskCompleted}>{content}</p>
                :
                <p>{content}</p>
            }

            <button className={style.taskDelete} onClick={handleDeleteTask}>
                <Trash size={17} />
            </button>
        </li>
    )
}