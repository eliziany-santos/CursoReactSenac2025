"use client";

import Exerc_3 from "@/componentes/Exerc_3"; 

export default function Page() {
  return (
    <main className="p-6">

      <h1 className="text-2xl font-bold mb-4">Campo de Nome</h1>

      <h1 className="text-2xl font-bold mb-4">Exercício 3 - Campo de nome com mensagem</h1>
      <p>Descrição: Crie um campo de nput. Conforme o usuário digita, exiba abaixo "Olá, [nome]!"</p>
      <p>Extra: Se o campo estiver vazio, exiba "Digite seu nome".</p>

      <Exerc_3 /> 
    </main>
  );
}
