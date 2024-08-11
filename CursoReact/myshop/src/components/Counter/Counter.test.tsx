import "@testing-library/jest-dom"; // necessário importar para informar que estamos manipulando o DOM
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";



it("should render counter component correctly", () => {
  // Estrutura dos Testes:
  render(<Counter />); // 1° Renderização do Componente.
  const counterValue = screen.getByRole("heading", { level: 1 });
  // ***Heading pega elementos de h1 a h6 e ao passar um objeto com level iremos definir qual o nivel do heading***
  const increaseButton = screen.getByRole("button", { name: "Aumentar" });
  const decreaseButton = screen.getByRole("button", { name: "Diminuir" });
  // ***O Role de botões é button, e para especificar qual botao pegar passaos um objeto especificando o nome***
  expect(counterValue).toHaveTextContent("0");
  expect(increaseButton).toBeInTheDocument(); // 2° Resultado de como esperamos que se comporte o componente.
  expect(decreaseButton).toBeInTheDocument();
});

it("should increase counter value when increase button is clicked", () => {
  render(<Counter />);
  //Clicar no botão aumentar para aumentar o valor do contador.

  const increaseButton = screen.getByRole("button", { name: "Aumentar" });
  userEvent.click(increaseButton);
  const counterValueElement = screen.getByText("1", { exact: true });
  expect(counterValueElement).toHaveTextContent("1");
});

// it("should decrease counter value when increase button is clicked", () => {

//     const decreaseButton = screen.getByRole("button", { name: "Diminuir" });
//     userEvent.click(decreaseButton);
//     const counterValueElement = screen.getByText("-1", { exact: true });
//     expect(counterValueElement).toHaveTextContent("-1");
// });
