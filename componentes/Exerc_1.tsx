"use client";

import { useState } from "react";

export default function Exerc_1() {
  const [contador, setContador] = useState(0);

  function decrementar() {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }

  return (
    <div className="flex flex-col items-center p-6 space-y-4">
      <div className="flex gap-4 pt-8">
        <button
          onClick={() => setContador(contador + 1)}
          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          SOMA
        </button>
        <button
          onClick={decrementar}
          className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
        >
          SUBTRAI
        </button>
      </div>

      <div className="text-xl font-semibold">
        Valor: {contador}
      </div>

      {contador === 0 ? (
        <p className="text-red-500 mt-2">Não é permitido abaixo de zero</p>
      ) : null}

      {contador >= 0 ? (
        <p className="text-green-600 mt-2">Contador é maior ou igual a zero</p>
      ) : null}
    </div>
  );
}
