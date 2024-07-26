import React from "react";
// No React devemos importar a imagem antes de utilizar no src da tag

import Navbar from "./components/navbar/Navbar";
import "./styles/App.css";

class App extends React.Component {
  // Para renderizar o conteudo HTML utilizamos o Método RENDER();

  // um componente em classe é uma classe que herda a classe Component do React e retorna um HTML dentro do método Render

  render() {
    return <Navbar />;
  }
}

export default App;
