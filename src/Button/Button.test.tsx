import { render, screen, fireEvent } from "@testing-library/react";
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
});
