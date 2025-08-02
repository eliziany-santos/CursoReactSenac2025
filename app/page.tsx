
//CRIAÇAO DE API
//se não especifica o metodo, é sempre GET

import { userProps } from "@/tipos"

export default async function Index() {

  const resposta = await fetch(`${process.env.API_ROUTE}/api/users`)
  const dados : userProps [] =  await resposta.json() //retirando o , lembrar de colocar [] se for lista
  console.log(dados)
  return (
    <div>
        {dados.map((item) => (
          <div key = {item.id}>
            <h1>Nome: {item.name} email: {item.email}</h1>
          </div>
        ))}

    </div>

  )
}