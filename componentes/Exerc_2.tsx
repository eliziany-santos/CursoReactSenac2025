"use client";

import { useState } from "react";

export default function Exerc_2() {
  const [mostrarTexto, setMostrarTexto] = useState(false);

  return (
    <div className="flex flex-col items-center p-6 space-y-4">
      <button
        onClick={() => setMostrarTexto(!mostrarTexto)}
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        {mostrarTexto ? "Esconder" : "Mostrar"} Texto
      </button>

      {mostrarTexto && (
        <p className="mt-4 text-gray-700">
          Este é o texto que pode ser mostrado ou escondido.
        </p>
      )}
    </div>
  );
}
