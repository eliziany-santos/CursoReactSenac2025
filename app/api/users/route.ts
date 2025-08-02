//GET Só consulta, POST Consulta e retorna//
//http://localhost:3000/api/users

//Retorna dado estático
/*
export async function GET(request: Request){
    const users = [
        {id:1, name: "rafael"},
        {id:2, name: "Eliziany"}
    ]

    return new Response(JSON.stringify(users),{
        status: 200,
        headers: {'Content-Type': 'application/json'}
    })
}
*/
//http://localhost:3000/api/users

import db from '@/app/api/database';

export async function GET(request: Request){

   try{

    const[rows] = await db.query("SELECT* FROM users") //receber a lista de linhas do banco

    return new Response(JSON.stringify(rows),{ //estou pegando as informações que estão em rows e convertendo em json
        status: 200,
        headers: {'Content-Type': 'application/json'}
    })

   }catch(error){
    return new Response(JSON.stringify({erro: error}),{
        status: 500
    })
   }
    
}

//post

export async function POST(request: Request){
    //desestruturação de objetos
    const {name, email} = await request.json();
  //  const query = "INSERT INTO users(name,email) VALUES (${name},${email})" outra opção
    const[result] = await db.query("INSERT INTO users(name,email) VALUES (?,?)",[name,email])
   
    return new Response(JSON.stringify(result),{ //estou pegando as informações que estão em rows e convertendo em json
        status: 201,
        headers: {'Content-Type': 'application/json'}
    })
        } 




        
//PARA EDITAR
export async function PUT(request: Request){


    const{id, name, email}= await request.json()

    await db.query("UPDATE users SET name=?, email=? where id=?",[name,email,id])
    return new Response(JSON.stringify({valor: true}))
        
   
}
