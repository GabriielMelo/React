  import { FormEvent, useContext, useState } from "react";
import { TasksContext } from "../../context/TasksContext";
import styles from "./tasksStyles.module.scss";

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");

  const { tasks, setTasks, handleToggleTaskStatus } = useContext(TasksContext);

  function hendleSubmitAddTask(event: FormEvent) {
    event.preventDefault();
    console.log(taskTitle);
    if (taskTitle.length < 3) {
      alert("Tarefa Inválida");
      return;
    }
    const newTasks = [
      ...tasks,
      {
        id: new Date().getTime(),
        title: taskTitle,
        done: false,
      },
    ];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTaskTitle("");
  }

  function handleRemoveTasks(taskID: number) {
    const answer = window.confirm("Deseja remover a tarefa?");
    if (!answer) {
      return;
    }
    const newTasks = tasks.filter((task) => task.id !== taskID);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  }

  return (
    <section className={styles.container}>
      <form onSubmit={hendleSubmitAddTask}>
        <div>
          <label htmlFor="task-title">Adicionar Tarefa</label>
          <input
            value={taskTitle}
            onChange={(event) => {
              setTaskTitle(event.target.value);
            }}
            type="text"
            id="task-title"
            placeholder="Titulo da Tarefa..."
          />
        </div>
        <button type="submit">Adicionar Tarefa</button>
      </form>

      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id} className={task.done ? styles.tasks : ""}>
              <input
                type="checkbox"
                name=""
                id={`task-${task.id}`}
                onChange={() => {
                  handleToggleTaskStatus(task.id);
                }}
              />
              <label className={task.done ? styles.done : ""} htmlFor="task">
                {task.title}
              </label>
              <button
                onClick={() => {
                  handleRemoveTasks(task.id);
                }}
              >
                Remover Tarefa
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
