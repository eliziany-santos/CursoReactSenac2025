import Comp_api from "@/componentes/Comp_api";

type userProps = {
  id: number,
  name: string,
  username: string,
  email:string

}
export default async function Page() {

  const resposta = await fetch("https://jsonplaceholder.typicode.com/users")
  const dados : userProps[] = await resposta.json()
  console.log(dados)
  return (
    <div>
{/*<Comp_api/>*/}
      
{dados.map((item,index )=> 
<div key={item.id}>
  <ul >
  <li className="pt-6 ">
    <h1 className="bg-amber-200">{index} - {item.name}</h1>
    <h1>{item.username}</h1>
    <h1>{item.email}</h1>


  </li>
  </ul>
</div>)}

    </div>
  );

}