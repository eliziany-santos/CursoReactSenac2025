"use client";

import { useState } from "react";

export default function Exerc_5() {
  const [contagemVermelho, setContagemVermelho] = useState(0);
  const [contagemAzul, setContagemAzul] = useState(0);
  const [contagemVerde, setContagemVerde] = useState(0);

  function incrementarContador(cor: string) {
    if (cor === "vermelho") {
      setContagemVermelho(contagemVermelho + 1);
    } else if (cor === "azul") {
      setContagemAzul(contagemAzul + 1);
    } else if (cor === "verde") {
      setContagemVerde(contagemVerde + 1);
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <button
          onClick={() => incrementarContador("vermelho")}
          className="w-32 p-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
        >
          Vermelho: {contagemVermelho}
        </button>

        <button
          onClick={() => incrementarContador("azul")}
          className="w-32 p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Azul: {contagemAzul}
        </button>

        <button
          onClick={() => incrementarContador("verde")}
          className="w-32 p-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          Verde: {contagemVerde}
        </button>
      </div>

      <div className="mt-4">
        <p className="text-lg font-semibold">Contadores:</p>
        <ul className="list-disc pl-6">
          <li>Vermelho: {contagemVermelho}</li>
          <li>Azul: {contagemAzul}</li>
          <li>Verde: {contagemVerde}</li>
        </ul>
      </div>
    </div>
  );
}
