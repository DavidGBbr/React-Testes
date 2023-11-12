import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

function sum(n1: number, n2: number) {
  return n1 + n2;
}

function average(n1: number, n2: number) {
  const result = (n1 + n2) / 2;

  if (result >= 7) {
    return "Aprovado";
  } else {
    return "Recuperação";
  }
}

//Criar um bloco que agrupa vários testes relacionados
describe("First test app component", () => {
  it("should adds 5 + 2 to equal 7", () => {
    expect(sum(5, 2)).toBe(7);
  });

  it("Should calculate the average and return recuperação", () => {
    expect(average(5, 6)).toBe("Recuperação");
    expect(average(7, 8)).toBe("Aprovado");
  });
});

describe("App component", () => {
  it("Should render app component", () => {
    render(<App />);

    const headerTitle = screen.getByTestId("header");
    expect(headerTitle).toHaveTextContent("React + Testes");
  });

  it("Should heading h1 have correct text", () => {
    render(<App />);

    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).toHaveTextContent("React + Testes");
    expect(headingElement).toHaveClass("titulo");
  });

  it("Should change message on button click", () => {
    render(<App />);

    const buttonElement = screen.getByText("Alterar mensagem");
    fireEvent.click(buttonElement);

    screen.getByText("Estudando testes com reactjs");

    const oldMessage = screen.queryByText("Bem vindo ao projeto!");
    expect(oldMessage).not.toBeInTheDocument();
  });
});

export default {};
