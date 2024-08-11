import { createContext, useEffect, useState } from "react";

export const TasksContext = createContext({} as TasksContextData);

interface Tasks {
  id: number;
  name: string;
  done: boolean;
}
interface TasksContextProvider {
  children: React.ReactNode;
}

interface TasksContextData {
  tasks: Tasks[];
  setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
  handleToggleTask: (taskID: number) => void;
}

export const TaskContextProvider: React.FC<TasksContextProvider> = ({
  children,
}) => {
  const [tasks, setTasks] = useState([] as Tasks[]);
  function handleToggleTask(taskID: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskID) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  }
  useEffect(() => {
    const tasksOnLocalStorage = localStorage.getItem("tasks");
    if (tasksOnLocalStorage) {
      setTasks(JSON.parse(tasksOnLocalStorage));
    }
  }, []);
  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        handleToggleTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
