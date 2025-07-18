"use client";

import { useState } from "react";

export default function Index() {
  const [contador, setContador] = useState(0);

  function decrementar() {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }

  return (
    <div>
      <div>
        <button onClick={() => setContador(contador + 1)}>SOMA</button>
      </div>
      <div>
        <button onClick={decrementar}>SUBTRAI</button>
      </div>

      <div>Valor: {contador}</div>

      {/* Ternário para mostrar a mensagem */}
      {contador === 0 ? (
        <p style={{ color: "red" }}>Não é permitido abaixo de zero</p>
      ) : null}
    </div>
  );
}
