import FormularioUser from "@/componentes/formularioUser";


export default async function Index({params} : {params: Promise<{id: string}>}){
const{id} = await params
    const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/users/${id}`)
    
    const dados  =  await resposta.json();
    console.log(dados)


    return(
        <div>
            <FormularioUser id = {dados.id} name = {dados.name} email = {dados.email}/>
            <h1>EDITAR</h1>
        </div>
    )
}