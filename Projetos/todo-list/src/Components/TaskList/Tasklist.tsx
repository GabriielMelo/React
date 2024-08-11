import { FormEvent, useContext, useState } from "react";
import { TasksContext } from "../../Contexts/TaskContext";
import s from "./TaskListStyles.module.scss";

export const Tasklist: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const { tasks, setTasks, handleToggleTask } = useContext(TasksContext);
  function handleAddTasks(event: FormEvent) {
    event.preventDefault();
    if (taskTitle.length < 3) {
      window.alert("Inválid Task");
      return;
    }
    const newTasks = [
      ...tasks,
      {
        id: new Date().getTime(),
        name: taskTitle,
        done: false,
      },
    ];
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
    setTaskTitle("");
  }
  function handleRemoveTask(taskID: number, taskDone: boolean) {
    const taskRemoving = document.getElementById(`Task-${taskID}`);

    if (!taskDone) {
      const answer = window.confirm("Delete incomplete task?");
      if (!answer) return;
    }
    taskRemoving?.classList.add(s.removing);
    setTimeout(() => {
      const newTasks = tasks.filter((task) => taskID !== task.id);
      setTasks(newTasks);
      localStorage.setItem("tasks", JSON.stringify(newTasks));
    }, 300);
  }
  return (
    <main className={s.container}>
      <div className={s.content}>
        <form className={s.form}>
          <label htmlFor="TaskTitle">Task Title: </label>
          <input
            type="text"
            value={taskTitle}
            placeholder="Learn React ... "
            onChange={(event) => {
              setTaskTitle(event.target.value);
            }}
          />
          <button onClick={handleAddTasks}>+</button>
        </form>
        <ul className={s.tasklist}>
          {tasks.map((task) => {
            return (
              <li
                key={task.id}
                id={`Task-${task.id}`}
                style={{ backgroundColor: task.done ? "#00ee77" : "" }}
              >
                <input
                  type="checkbox"
                  id=""
                  checked={task.done}
                  onChange={() => handleToggleTask(task.id)}
                />
                <span className={task.done ? s.done : ""}>{task.name}</span>
                <button onClick={() => handleRemoveTask(task.id, task.done)}>
                  x
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};
