import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from ".";

describe("Form component", () => {
  it("Should test form and input component", () => {
    render(<Form />);

    const nameInput = screen.getByPlaceholderText(
      "Digite seu nome"
    ) as HTMLInputElement;
    const emailInput = screen.getByPlaceholderText(
      "Digite seu email"
    ) as HTMLInputElement;
    const submitButton = screen.getByText("Cadastrar");

    fireEvent.change(nameInput, { target: { value: "David" } });
    fireEvent.change(emailInput, { target: { value: "david@teste.com" } });

    expect(nameInput.value).toBe("David");
    expect(emailInput.value).toBe("david@teste.com");

    const consoleLogSpy = jest.spyOn(console, "log");
    fireEvent.submit(submitButton);

    expect(consoleLogSpy).toHaveBeenCalledWith("Cadastrado com sucesso!");
    expect(nameInput.value).toBe("");
    expect(emailInput.value).toBe("");
  });
});

export default {};
