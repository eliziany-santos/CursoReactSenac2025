
"use client";

import { useState } from "react";

export default function Exerc_3() {
  const [nome, setNome] = useState(""); 
  const [novoNome, setNovoNome] = useState(""); 

 
  return (
 <div className="flex flex-col items-center mt-6 space-y-4">
    
      <input className="px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      type="text" placeholder="Digite seu nome" value={novoNome} onChange={(e) => setNovoNome(e.target.value)} />
   
         
    <p className="mt-4 text-xl">
      {nome.trim() === "" ? (<span className="text-gray-600">Digite seu nome</span>) : (<span className="text-green-600">
        Olá, {novoNome}!</span>)}
    </p>
  </div>
);
}


/*
Funciona com botão


>>>>>>> e4f0df3 (Primeiro commit)

import { useState } from "react";

export default function Exerc_3() {
  const [nome, setNome] = useState(""); 
  const [novoNome, setNovoNome] = useState(""); 

  
  function atualizarNome() {
    setNome(novoNome);
    setNovoNome(""); 
  }

  return (
<<<<<<< HEAD
    <div className="flex flex-col items-center mt-6 space-y-4">
    
      <input
        type="text"
        placeholder="Digite seu nome"
        value={novoNome}
        onChange={(e) => setNovoNome(e.target.value)} 
        className="px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />

     
      <button
        onClick={atualizarNome}
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Confirmar Nome
      </button>


      <p className="mt-4 text-xl">
        {nome.trim() === "" ? (
          <span className="text-gray-600">Digite seu nome</span>
        ) : (
          <span className="text-green-600">Olá, {nome}!</span>
        )}
      </p>
    </div>
  );
}
=======
 <div className="flex flex-col items-center mt-6 space-y-4">
    
      <input className="px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      type="text" placeholder="Digite seu nome" value={novoNome} onChange={(e) => setNovoNome(e.target.value)} />
   
       

      
      <button className="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 transition"
      onClick={atualizarNome}
      >
      Inserir Nome
    </button>


    <p className="mt-4 text-xl">
      {nome.trim() === "" ? (<span className="text-gray-600">Digite seu nome</span>) : (<span className="text-green-600">
        Olá, {nome}!</span>)}
    </p>
  </div>


);
}
*/

