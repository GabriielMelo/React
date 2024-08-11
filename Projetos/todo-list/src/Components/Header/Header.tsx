import { useContext } from "react";
import { TasksContext } from "../../Contexts/TaskContext";
import { StatusCard } from "../StatusCard/StatusCard";
import s from "./headerStyle.module.scss";
export const Header: React.FC = () => {
  const { tasks } = useContext(TasksContext);

  const totalTasks = tasks.length;
  const pendingTasks = tasks.reduce((total, task) => {
    if (!task.done) return total + 1;
    return total;
  }, 0);
  const tasksDone = totalTasks - pendingTasks;
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div>
          <h1>ToDo App</h1>
          <span>Welcome Gabriel Melo</span>
        </div>
        <div>
          <StatusCard title="Total Tasks" quantity={totalTasks} />
          <StatusCard title="Pending Tasks" quantity={pendingTasks} />
          <StatusCard title="Tasks Done" quantity={tasksDone} />
        </div>
      </div>
    </header>
  );
};
