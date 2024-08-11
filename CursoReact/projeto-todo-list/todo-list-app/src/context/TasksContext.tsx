import { createContext, useEffect, useState } from "react";

export const TasksContext = createContext({} as TasksContextData);

interface Task {
  title: string;
  done: boolean;
  id: number;
}

interface TasksProviderProps {
  children: React.ReactNode;
} 

interface TasksContextData {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  handleToggleTaskStatus: (taskiD: number) => void;
}

export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState([] as Task[]);
  useEffect(() => {
    const tasksOnLocalStorage = localStorage.getItem("tasks");
    if (tasksOnLocalStorage) {
      setTasks(JSON.parse(tasksOnLocalStorage));
    }
  }, []);

  function handleToggleTaskStatus(taskId: number) {
    const newTasks = tasks.map((task) => {
      if (taskId === task.id) {
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

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        handleToggleTaskStatus,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
