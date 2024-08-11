import { Header } from "./Components/Header/Header";
import { Tasklist } from "./Components/TaskList/Tasklist";
import { TaskContextProvider } from "./Contexts/TaskContext";
import "./styles/global.css";

function App() {
  return (
    <>
      <TaskContextProvider>
        <Header />
        <Tasklist />
      </TaskContextProvider>
    </>
  );
}

export default App;
