import { Circle, Trash } from 'phosphor-react';

import style from '../Task/Task.module.css'

export function Task() {
    return (
        <ul className={style.taskItem}>
            <button className={style.taskCheckbox}>
                <Circle size={20} />
            </button>

            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            
            
            <button className={style.taskDelete}>
                <Trash size={17} />
            </button>
        </ul>
    )
}