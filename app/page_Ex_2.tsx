"use client";

import Exerc_2 from "@/componentes/Exerc_2"; 

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mostrar/Esconder Texto</h1>
      <h1 className="text-2xl font-bold mb-4">Exercício 2 - Mostrar/Esconder Texto</h1>
      <p>Descrição: Crie um botão que ao ser clicado alterna entre mostrará e esconder um parágrafo de texto.</p>
      <p>Dica: Use boolean no UseState</p>
      <Exerc_2 /> 
    </main>
  );
}
