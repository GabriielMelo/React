import React from "react";

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
    console.log("Construindo a classe Counter... ");
  }

  UNSAFE_componentWillMount() {
    console.log("O nosso Componente Counter será montado... ");
  }

  componentDidMount() {
    console.log("O Componente Counter foi montado!");

    document.addEventListener("scroll", this.consoleScroll());
  }
  // método é chamado sempre que uma props ou estado é atualizado.
  shouldComponentUpdate() {
    // if (this.state.counter === 2) return false;
    return true;
  }

  UNSAFE_componentWillUpdate() {
    console.log("O componente será atualizado");
  }
  componentDidUpdate() {
    console.log("O componente Counter Atualizou!");
  }

  componentWillUnmount() {
    console.log("O componente será desmontado...");

    document.removeEventListener("scroll", this.consoleScroll());
  }
  consoleScroll() {
    console.log("Rolando a página");
  }
  render() {
    console.log("Renderizando o componente Counter...");
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter - 1 });
          }}
        >
          Diminuir
        </button>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Aumentar
        </button>
      </div>
    );
  }
}
