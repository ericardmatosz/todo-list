import styles from './NewTask.module.scss';
import { PlusCircle } from '@phosphor-icons/react'
import { TaskList } from '../TaskList/TaskList'
import { useState } from 'react';

import { ChangeEvent } from 'react';
import { FormEvent } from 'react';

interface taskFormat {
    id: number,
    task: string
}

export function NewTask(){
    const [tasks, setTasks] = useState<taskFormat[]>([]);
    const [taskText, setTaskText] = useState('')
    
    const [checkboxStatus, setCheckboxStatus] = useState(0) 

    function handeTaskText(event: ChangeEvent<HTMLInputElement>) {
        setTaskText(event.target.value)
    }

    function handleNewTask(event: FormEvent) {
        event.preventDefault();

        let maxID: number | taskFormat = 1

        if(tasks.length) {
            maxID = tasks.reduce(function(prev, current) { 
                return prev.id > current.id ? prev : current; 
            });
            
            maxID = maxID.id + 1;
        }

        setTasks([...tasks, { id: maxID, task: taskText}])
        setTaskText('')
    }

    function handleDoneTask(done: boolean) {
        done ? setCheckboxStatus(checkboxStatus + 1) : setCheckboxStatus(checkboxStatus - 1)
    }

    return (
        <div className={styles.tasks}>
            <form onSubmit={handleNewTask}>
                <input value={taskText} onChange={handeTaskText} type='text' placeholder='Digite uma nova tarefa' />
                <button type='submit'>Criar <PlusCircle size={16} /></button>
            </form>

            <div className={styles.statusTasks}>
                <p className={styles.textBlue}>Tarefas criadas <span>{tasks.length}</span></p>
                <p className={styles.textPurple}>Concluidas <span>{checkboxStatus} de {tasks.length}</span></p>
            </div>

            <div className={styles.taskList}>
                {
                    tasks.map((task) => {
                        if(tasks.length > 0) {
                            return <TaskList key={task.id} id={task.id} task={task.task} onChangeDoneTask={handleDoneTask}/>
                        }
                    })
                }
                
            </div>
        </div>
    )
}