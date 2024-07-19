import { ChangeEvent, useState } from "react";

import { Trash } from "@phosphor-icons/react";
import styles from "./styles.module.scss";

type TaskListPros = {
  id: number;
  task: string;
  onChangeDoneTask: (status: boolean) => void;
  onDelete: (id: number, doneTask: boolean) => void;
};

export function TaskList({
  id,
  task,
  onChangeDoneTask,
  onDelete,
}: TaskListPros) {
  const [statusTask, setStatusTask] = useState(false);

  function doneTask(event: ChangeEvent<HTMLInputElement>) {
    setStatusTask(event.target.checked);
    onChangeDoneTask(event.target.checked);
  }

  function deleteTask() {
    onDelete(id, statusTask);
  }

  return (
    <div className={styles.taskListing}>
      <div className={styles.checkboxAndText}>
        <input onChange={doneTask} id={String(id)} type="checkbox" />
        <label htmlFor={String(id)}></label>

        <p className={statusTask === true ? styles.done : ""}>{task}</p>
      </div>

      <button onClick={deleteTask} className={styles.delete}>
        <Trash size={20} />
      </button>
    </div>
  );
}
