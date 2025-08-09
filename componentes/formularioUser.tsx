
// "use client";

// import { userProps } from "@/tipos";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function FormularioUser({id,name="",email=""}:userProps){
//     const [userid, setUserId] = useState<number | undefined>(id) //ou o id vem numero se já existe ou undefined se não existe
//     const [nome,setNome] = useState(name)
//     const [userEmail,setEmail] = useState(email)
//     const rota = useRouter()


//     async function Salvar(){
//        // console.log(nome,email)
//        const formulario = {
//         id: userid,
//         name: nome,
//         email: userEmail
//        }

//        const metodo = userid ? "PUT" : "POST" ;

       
//         //agora com o metodo Post
       
//         //esse  é o jeito certo, que deu errado no teste, daí substitui por http://localhost:3000
//        const resposta = await fetch (`${process.env.NEXT_PUBLIC_API_ROUTE}/api/users`,{
//         //const resposta = await fetch (`http://localhost:3000/api/users`,{
//         method: metodo,
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify(formulario)
//        }) 



//        alert("Cadastrado com Sucesso")
//        //isso aqui faz voltar para a tela anterior
//        const dados = await resposta.json() 
//       if(dados){
//         rota.push("/")}

//     }

//     return (
//         <div>
//              <h1 className="pb-5">Cadastro de Pessoas</h1>

//             <label htmlFor="">Nome:</label>
//             <input value={nome} onChange ={(e) => setNome(e.target.value)}className="border-1"type="text" placeholder="Digite seu nome" />
//             <label htmlFor="">Email:</label>
//             {/* if ternario se já existe aparece o botão editar, se não cadastrar */}
//             <input value={userEmail} onChange ={(e) => setEmail(e.target.value)} className="border-1" type="text" placeholder="Digite seu email" />
//                 {userid
//                 ? <button onClick={Salvar} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Editar</button>
//                 : <button onClick={Salvar} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Cadastrar</button>}
        
                
            
           
//         </div>
//     )
// }


//para testar http://localhost:3000/cadastro

"use client";



import { Salvar } from "@/app/(servicos)/usuario";
import { userProps } from "@/tipos";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Formulario({id,name="",email=""}: userProps){

    const [userid, setUserId] = useState<number | undefined>(id) //ou o id vem numero se já existe ou undefined se não existe
    const [nome,setNome] = useState("")
    const [userEmail,setEmail] = useState("")
    const rota = useRouter()
    
    async function Submit(evento:React.FormEvent<HTMLFormElement>){
        evento.preventDefault() //Fazemos isso para prevenir que o evento de resetar a tela fique acontecendo, que é um comportamento normal a tag form
        const form = {
            id: userid,
            nome: nome,
            email: userEmail
        }
        try{
            const metodo = userid ? "PUT" : "POST" ;
            await Salvar(form,metodo)
            rota.push("/")
     
            // const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/`,{
            //     method: metodo,
            //     headers: {"Content-Type": "application/json"
            //     },
            //    body: JSON.stringify(form)
            // })
            // const dados = await resposta.json()
            // if(dados){
            //     rota.push("/")
            // }
        }catch(error){

        }
        
    }
    async function Deletar(){
        await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/user`,{
            method: "DELETE",
            headers: {"Content-Type": "application/json"
            },
           body: JSON.stringify(id:userid))
        })
         
    }

    return(
        <div>
            <form onSubmit={Submit}>
                <input value="{nome}"onChange={(e) => setNome(e.target.value)} type="text" placeholder="Digite seu nome" name="nome"/>
                <input value="{email}" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Digite seu email" name="email"/>
                <button type="submit">Enviar</button>
                    
                {id && <button onClick={Deletar}>Excluir<button/>}
            </form>
        </div>
    )
}





// export default function FormularioUser({id,name="",email=""}:userProps){
//     const [userid, setUserId] = useState<number | undefined>(id) //ou o id vem numero se já existe ou undefined se não existe
//     const [nome,setNome] = useState(name)
//     const [userEmail,setEmail] = useState(email)
//     const rota = useRouter()


//     async function Salvar(){
//        // console.log(nome,email)
//        const formulario = {
//         id: userid,
//         name: nome,
//         email: userEmail
//        }

//        const metodo = userid ? "PUT" : "POST" ;

       
//         //agora com o metodo Post
       
//         //esse  é o jeito certo, que deu errado no teste, daí substitui por http://localhost:3000
//        const resposta = await fetch (`${process.env.NEXT_PUBLIC_API_ROUTE}/api/users`,{
//         //const resposta = await fetch (`http://localhost:3000/api/users`,{
//         method: metodo,
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify(formulario)
//        }) 



//        alert("Cadastrado com Sucesso")
//        //isso aqui faz voltar para a tela anterior
//        const dados = await resposta.json() 
//       if(dados){
//         rota.push("/")}

//     }

//     return (
//         <div>
//              <h1 className="pb-5">Cadastro de Pessoas</h1>

//             <label htmlFor="">Nome:</label>
//             <input value={nome} onChange ={(e) => setNome(e.target.value)}className="border-1"type="text" placeholder="Digite seu nome" />
//             <label htmlFor="">Email:</label>
//             {/* if ternario se já existe aparece o botão editar, se não cadastrar */}
//             <input value={userEmail} onChange ={(e) => setEmail(e.target.value)} className="border-1" type="text" placeholder="Digite seu email" />
//                 {userid
//                 ? <button onClick={Salvar} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Editar</button>
//                 : <button onClick={Salvar} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Cadastrar</button>}
        
                
            
           
//         </div>
//     )
// }

