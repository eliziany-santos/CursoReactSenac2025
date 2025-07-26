"use client";

import { useState } from "react";
import Exerc_1 from "@/componentes/Exerc_1";

export default function Index() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Exercício 1 - Contador com incremento e decremento</h1>
      <p>Descrição: Crie dois botões: um para somar e outro para subtrair.</p>
      <p>Extra: Adicione uma verificação para que o número nunca fique abaixo de zero;</p>
      <Exerc_1 /> 
    </main>
  );
}
