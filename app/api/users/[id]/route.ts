//rota par ao Editar

import db from '@/app/api/database';

export async function GET(request: Request, {params} : {params : {id : string}}) {

    const {id} = params;
    const[rows] = await db.query("SELECT* FROM users where id = ?", [id])


    return new Response(JSON.stringify(rows),{
        status: 200,
        headers: {'Content-Type': 'application/json'}

    });





    //http://localhost:3000/api/users/1 para testar

}