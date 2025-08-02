"use client";

import { useState } from "react";

export default function Exerc_6() {
  const [curtido, setCurtido] = useState(false); 
  const [curtidas, setCurtidas] = useState(0); 

  function alternarCurtir() {
    if (curtido) {
      setCurtido(false);
      setCurtidas(curtidas - 1); 
    } else {
      setCurtido(true);
      setCurtidas(curtidas + 1); 
    }
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <button
        onClick={alternarCurtir}
        className={`px-6 py-2 rounded-md text-white ${
          curtido ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-600 hover:bg-gray-700"
        } transition`}
      >
        {curtido ? "Descurtir" : "Curtir"}
      </button>

      <p className="text-lg font-semibold">
        Total de curtidas: {curtidas}
      </p>
    </div>
  );
}
