
//CRIAÇAO DE API
//se não especifica o metodo, é sempre GET

import { userProps } from "@/tipos"
import Link from 'next/link'

export default async function Index() {

  const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/users`)
<<<<<<< HEAD
  //abaixo, tirar o json para conseguirmos us
=======
>>>>>>> 8caa4f1503fbd4aee219a6130d1edc2c4259ede0
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
<<<<<<< HEAD

            {/* <button className="border-1">
            <Link href={`/editasUsuario/${item.id}`} >Deletar Usuário</Link>
            </button> */}
=======
>>>>>>> 8caa4f1503fbd4aee219a6130d1edc2c4259ede0
          </div>
        ))}

    </div>

  )
}
<<<<<<< HEAD

=======
>>>>>>> 8caa4f1503fbd4aee219a6130d1edc2c4259ede0
