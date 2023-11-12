import React, { useState } from "react";

export const User = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Digite o nome"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button onClick={() => setUser(name)}>Cadastrar</button>

      <br />

      {user !== "" && <strong>Usuário online: {user}</strong>}
    </div>
  );
};
