import { Trash } from '@phosphor-icons/react'
import styles from './TaskList.module.scss'
import { useState } from 'react';
import { ChangeEvent } from 'react';

interface taskListPros {
    id: number;
    task: string;
    onChangeDoneTask: (status: boolean) => void;
    onDelete: (id: number, doneTask: boolean) => void;
}

export function TaskList({id, task, onChangeDoneTask, onDelete } : taskListPros ) {

    const [statusTask, setStatusTask] = useState(false)

    function doneTask(event: ChangeEvent<HTMLInputElement>) {
        setStatusTask(event.target.checked)
        onChangeDoneTask(event.target.checked)
    }

    function deleteTask() {
        onDelete(id, statusTask)
    }
    
    return (
        <div className={styles.taskListing}>
            <div className={styles.checkboxAndText}>
                <input className='checkbox' onChange={doneTask} id={id.toString()} type='checkbox'/>
                <label htmlFor={id.toString()}></label>
                <p className={statusTask === true ? (styles.done) : 'i'}>{task}</p>
            </div>
            <button onClick={deleteTask} className={styles.delete}><Trash size={20} /></button>
        </div>
    )
}