import styles from './NewTask.module.scss';
import { PlusCircle } from '@phosphor-icons/react'

const tasks = [
    {
        status: false,
        task: 'Configurar projeto'
    },
    {
        status: false,
        task: 'Criar variaveis'
    }
]

export function NewTask(){

    function handleNewTask() {

    }


    return (
        <div className={styles.newTask}>
            <form onSubmit={handleNewTask}>
                <input type='text' placeholder='Digite uma nova tarefa' />
                <button type='submit'>Criar <PlusCircle size={16} /></button>
            </form>

            <div className={styles.statusTasks}>
                <p className={styles.textBlue}>Tarefas criadas <span>0</span></p>
                <p className={styles.textPurple}>Concluidas <span>2 de 5</span></p>
            </div>
        </div>
    )
}