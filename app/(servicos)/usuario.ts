import { userProps } from "@/tipos";

export async function Salvar(form: userProps, metodo: string){
    const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/users`,{
        method: metodo,
        headers: {"Content-Type": "application/json"
        },
       body: JSON.stringify(form)
    })
}