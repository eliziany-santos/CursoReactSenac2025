"use client";

import Exerc_4 from "@/componentes/Exerc_4";

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4"> Exercício 4 - Lista de Tarefas Simples</h1>
      <p>Descrição: Crie um campo para digitar uma tarefa e um botão para adicioná-la a uma lista array.</p>
      <p>Dica: Use useState([]) e atualize com setTarefas ([...tarefas,nova Tarefa])</p>
      <Exerc_4 />
    </main>
  );
}
