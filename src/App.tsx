import { useState } from "react";
import "./App.css";

const App = () => {
  const [message, setMessage] = useState("Bem vindo ao projeto!");
  return (
    <div>
      <h1 className="titulo">React + Testes</h1>
      <p>{message}</p>

      <button onClick={() => setMessage("Estudando testes com reactjs")}>
        Alterar mensagem
      </button>
    </div>
  );
};

export default App;
