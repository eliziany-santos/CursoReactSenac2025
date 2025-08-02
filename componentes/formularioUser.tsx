"use client";

import { useState } from "react";

export default function FormularioUser(){
    const [nome,setNome] = useState("")
    const [email,setEmail] = useState("")

    async function Salvar(){
       // console.log(nome,email)

        

    }

    return (
        <div>
             <h1 className="pb-5">Cadastro de Pessoas</h1>

            <label htmlFor="">Nome:</label>
            <input onChange ={(e) => setNome(e.target.value)}className="border-1"type="text" placeholder="Digite seu nome" />
            <label htmlFor="">Email:</label>
            <input onChange ={(e) => setEmail(e.target.value)} className="border-1" type="text" placeholder="Digite seu email" />

            <button onClick={Salvar} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Cadastrar Usuário</button>

           
        </div>
    )
}
