

export default async function Index({params} : {params: Promise<{id: string}>}){
const{id} = await params
    const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/users/${id}`)
    
    const dados  =  await resposta.json();
    console.log(dados)


    return(
        <div>
            <h1>EDITAR</h1>
        </div>
    )
}