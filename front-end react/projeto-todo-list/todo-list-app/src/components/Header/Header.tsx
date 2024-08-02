import { StatsCard } from "../StatsCard/StatsCard";
import styles from "./headerStyles.module.scss";

// Ao criar componentes com arrow functions, podemos tipar ele para Funcional Components, assim será definido como componente react, sempre solicitando um return HTML
export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>My ToDo</h1>
          <span>Bem vindo, Gabriel!</span>
        </div>
        <div>
          <StatsCard title="Total de Tarefas" value={5} />
          <StatsCard title="Tarefas Pendentes" value={4} />
          <StatsCard title="Tarefas Concluídas" value={1} />
        </div>
      </div>
    </header>
  );
};
