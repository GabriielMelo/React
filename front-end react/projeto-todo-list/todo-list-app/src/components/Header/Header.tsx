import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext";
import { StatsCard } from "../StatsCard/StatsCard";
import styles from "./headerStyles.module.scss";

// Ao criar componentes com arrow functions, podemos tipar ele para Funcional Components, assim será definido como componente react, sempre solicitando um return HTML
export const Header: React.FC = () => {
  const { tasks } = useContext(TasksContext);
  const totalTasks = tasks.length;
  const totalPending = tasks.reduce((total, task) => {
    if (!task.done) return total + 1;
    return total;
  }, 0);
  const totalDone = totalTasks - totalPending;
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>My ToDo</h1>
          <span>Bem vindo, Gabriel!</span>
        </div>
        <div>
          <StatsCard title="Total de Tarefas" value={totalTasks} />
          <StatsCard title="Tarefas Pendentes" value={totalPending} />
          <StatsCard title="Tarefas Concluídas" value={totalDone} />
        </div>
      </div>
    </header>
  );
};
