import { StatusCard } from "../StatusCard/StatusCard";
import s from "./headerStyle.module.scss";
export const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div>
          <h1>ToDo App</h1>
          <span>Welcome Gabriel Melo</span>
        </div>
        <div>
          <StatusCard title="Total of Tasks" quantity={0} />
          <StatusCard title="Incomplete Tasks" quantity={0} />
          <StatusCard title="Tasks Done" quantity={0} />
        </div>
      </div>
    </header>
  );
};
