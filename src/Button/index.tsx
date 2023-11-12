import { PropsWithChildren } from "react";

export const Button = ({
  onClick,
  disabled,
}: PropsWithChildren<{
  onClick: () => void;
  disabled: boolean;
}>) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: 8,
        color: "#fff",
        backgroundColor: disabled ? "#fafafa" : "#121212",
      }}
    >
      Clique aqui
    </button>
  );
};
