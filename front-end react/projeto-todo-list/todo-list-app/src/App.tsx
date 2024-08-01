import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";
import "./styles/global.css";

function App() {
  const [toggle, setToggle] = useState(false);
  
  return (
    <>
      <Header />
      <Tasks />
      <button onClick={() => setToggle(!toggle)}>toggle</button>
    </>
  );
}

export default App;

// o useEffect será disparado sempre que alguma variável do array de dependencias for alterada. Por padrão o useEffect será disparado após a montagem do componente.
// useEffect(() => {
//   console.log("executando a função UseEffect...");

//   // ComponentWillUnMount => Cleanup function
//   return () => {
//     console.log(
//       "Isso aqui vai ser executado quando o componente app for desmontado da tela."
//     );
//   };
// }, [toggle]);