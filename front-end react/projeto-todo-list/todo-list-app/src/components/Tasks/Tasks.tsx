import { FormEvent, useState } from "react";
import styles from "./styles.module.scss";

interface Task {
  title: string;
  done: boolean;
  id: number;
}
export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState([] as Task[]);
  //Função disparada quando o usuario submete o formulario para adicionar uma nova tarefa
  function hendleSubmitAddTask(event: FormEvent) {
    event.preventDefault();
    console.log(taskTitle);
    if (taskTitle.length < 3) {
      alert("Tarefa Inválida");
      return;
    }
    setTasks([
      ...tasks, // Pega todas as tarefas que já existiam e coloca nesse novo valor do estado de tarefas
      {
        id: new Date().getTime(),
        title: taskTitle,
        done: false,
      },
    ]);
    setTaskTitle("");
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
            <li key={task.id}>
              <input type="checkbox" name="" id={`task-${task.id}`} />
              <label htmlFor="task">{task.title}</label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
