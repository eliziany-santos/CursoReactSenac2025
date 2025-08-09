

import db from '@/app/api/database';

export async function GET(request: Request, {params} : {params:{id: string}}){
    const{id} = params

    const[row] = await db.query<any>("SELECT* FROM users where id = ?",{id}) //receber a lista de linhas do banco
    return new Response(JSON.stringify(row[0]))


    
}

//para teste http://localhost:3000/api/user/1