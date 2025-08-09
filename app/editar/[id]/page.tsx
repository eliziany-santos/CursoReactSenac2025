import FormularioUser from "@/componentes/formularioUser";
import { userProps } from "@/tipos"


export default async function Editar({params} : {params: Promise<{id: string}>}){
const{id} = await params
    const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/users/${id}`)
    
    const dados  =  await resposta.json();
    console.log(dados)


    return(
        <div>
            <FormularioUser id = {dados.id} nome = {dados.nome} email = {dados.email}/>
            <h1>EDITAR</h1>
        </div>
    )
}

//PARA TESTAR http://localhost:3000/editar/1