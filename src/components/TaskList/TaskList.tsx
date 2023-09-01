// React imports
import { useState } from 'react';
import { ChangeEvent } from 'react';

// Icons and Styles imports
import { Trash } from '@phosphor-icons/react'
import styles from './TaskList.module.scss'
interface taskListPros {
    id: number;
    task: string;
    onChangeDoneTask: (status: boolean) => void;
    onDelete: (id: number, doneTask: boolean) => void;
}

export function TaskList({id, task, onChangeDoneTask, onDelete } : taskListPros ) {
    // States
    const [statusTask, setStatusTask] = useState(false)

    // Sends parameters to complete the task to the parent component.
    function doneTask(event: ChangeEvent<HTMLInputElement>) {
        setStatusTask(event.target.checked)
        onChangeDoneTask(event.target.checked)
    }

    // Sends parameters to delete the task to the parent component.
    function deleteTask() {
        onDelete(id, statusTask)
    }
    
    return (
        <div className={styles.taskListing}>
            <div className={styles.checkboxAndText}>
                <input 
                    className='checkbox' 
                    onChange={doneTask} 
                    id={id.toString()} 
                    type='checkbox'
                />
                <label htmlFor={id.toString()}></label>
                <p className={statusTask === true ? (styles.done) : 'i'}>
                    {task}
                </p>
            </div>

            <button onClick={deleteTask} className={styles.delete}>
                <Trash size={20} />
            </button>
        </div>
    )
}