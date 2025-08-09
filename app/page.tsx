
//CRIAÇAO DE API
//se não especifica o metodo, é sempre GET

import { userProps } from "@/tipos"
import Link from 'next/link'

export default async function Index() {

  const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/users`)
  //abaixo, tirar o json para conseguirmos us
  const dados : userProps [] =  await resposta.json() //retirando o , lembrar de colocar [] se for lista
  console.log(dados)
  return (
    <div>
      <button className="border-1">
      <Link href="/cadastro" >Cadastrar Usuário</Link>
      </button>
        {dados.map((item) => (
          <div key = {item.id}>
            <h1 className="pb-3">Nome: {item.name} email: {item.email}</h1>

            <button className="border-1">
            <Link href={`/editasUsuario/${item.id}`} >Editar Usuário</Link>
            </button>

            {/* <button className="border-1">
            <Link href={`/editasUsuario/${item.id}`} >Deletar Usuário</Link>
            </button> */}
          </div>
        ))}

    </div>

  )
}

