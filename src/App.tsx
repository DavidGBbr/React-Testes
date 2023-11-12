import { useState } from "react";
import "./App.css";
import { Button } from "./Button";

const App = () => {
  const [message, setMessage] = useState("Bem vindo ao projeto!");
  return (
    <div>
      <h1 className="titulo" data-testid="header">
        React + Testes
      </h1>
      <p>{message}</p>

      <button onClick={() => setMessage("Estudando testes com reactjs")}>
        Alterar mensagem
      </button>
      <hr />
      <br />

      <Button onClick={() => alert("Clicou")} disabled={true}>
        Clique aqui
      </Button>
    </div>
  );
};

export default App;
