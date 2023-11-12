import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from ".";

describe("Button component", () => {
  it("Should call onclick prop on click", () => {
    const onClick = jest.fn();

    render(
      <Button onClick={onClick} disabled={true}>
        Clique aqui
      </Button>
    );

    const button = screen.getByText("Clique aqui");
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it("Should render with gray background if disabled", () => {
    render(
      <Button onClick={() => {}} disabled={true}>
        Meu botão
      </Button>
    );

    const button = screen.getByRole("button", { name: "Meu botão" });
    expect(button).toHaveStyle({ backgroundColor: "#fafafa" });
  });
});
