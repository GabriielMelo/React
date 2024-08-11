import { createContext } from "vm";

interface Tasks {
    id: number;
    name: string;
    done: boolean;
  }

export const TasksContext = createContext({});
