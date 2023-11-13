import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { User } from ".";

describe("User component", () => {
  it("Should check if the name is not displayed when component is mounted", () => {
    render(<User />);

    const message = screen.queryByText("Usuário online: David");

    expect(message).not.toBeInTheDocument();
  });

  it("Should test if the value typed in the input is correct", () => {
    render(<User />);

    const inputElement = screen.getByPlaceholderText("Digite o nome");
    fireEvent.change(inputElement, { target: { value: "David" } });

    expect(inputElement).toHaveValue("David");
  });

  it("Should display the name after typing in the input and click on the button", () => {
    render(<User />);

    const input = screen.getByPlaceholderText("Digite o nome");
    const button = screen.getByRole("button", { name: "Cadastrar" });

    fireEvent.change(input, { target: { value: "David" } });
    fireEvent.click(button);

    const message = screen.getByText("Usuário online: David");
    expect(message).toBeInTheDocument();
  });
});

export default {};
