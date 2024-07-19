import { ChangeEvent, FormEvent, useState } from "react";

import { ClipboardText, PlusCircle } from "@phosphor-icons/react";

import { TaskList } from "../TaskList";
import styles from "./styles.module.scss";

type taskFormat = {
  id: number;
  task: string;
  status?: "done" | "todo";
};

export function NewTask() {
  const [tasks, setTasks] = useState<taskFormat[]>([]);
  const [newTask, setNewText] = useState("");
  const [taskStatus, setTaskStatus] = useState(0);
  const [taskId, setTaskId] = useState(0);

  function handeTaskText(e: ChangeEvent<HTMLInputElement>) {
    setNewText(e.target.value);
  }

  function handleNewTask(e: FormEvent) {
    e.preventDefault();

    setTasks([...tasks, { id: taskId, task: newTask }]);
    setTaskId(taskId + 1);
    setNewText("");
  }

  function handleDoneTask(done: boolean) {
    done ? setTaskStatus(taskStatus + 1) : setTaskStatus(taskStatus - 1);
  }

  function handleDeleteTask(id: number, done: boolean) {
    const tasksNoDeleted = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(tasksNoDeleted);

    if (done) {
      setTaskStatus(taskStatus - 1);
    }
  }

  return (
    <div className={styles.tasks}>
      <form onSubmit={handleNewTask}>
        <input
          value={newTask}
          onChange={handeTaskText}
          type="text"
          placeholder="Digite uma nova tarefa"
          required
        />
        <button type="submit">
          Criar <PlusCircle size={16} />
        </button>
      </form>

      <div className={styles.statusTasks}>
        <p className={styles.textBlue}>
          Tarefas criadas <span>{tasks.length}</span>
        </p>

        <p className={styles.textPurple}>
          Concluidas{" "}
          <span>
            {taskStatus} de {tasks.length}
          </span>
        </p>
      </div>

      {tasks.length === 0 && (
        <div className={styles.withoutTask}>
          <ClipboardText size={56} />
          <strong>Você ainda não tem tarefas</strong>
          <p>Cria tarefas e organize seus itens a fazer</p>
        </div>
      )}

      <div className={styles.taskList}>
        {tasks.map((task) => {
          if (tasks.length > 0) {
            return (
              <TaskList
                key={task.id}
                id={task.id}
                task={task.task}
                onChangeDoneTask={handleDoneTask}
                onDelete={handleDeleteTask}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
