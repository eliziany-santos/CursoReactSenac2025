import Link from "next/link";
import Page from "@/app/(paginas)/usuarios/[id]/page";



type userProps = {
  id: number,
  title: string,
  price: number,
  description: string,
  image: string


};

export default async function Posts({id}: {id: string}) {


  const resposta = await fetch(`https://fakestoreapi.com/products/${id}`);
  const dados: userProps = await resposta.json();
  console.log(dados)

  await new Promise((resolve) => setTimeout(resolve,4000));


  return (
    <div className="pt-10">
     

      {
        <>
        <div className="flex flex-col items-center justify-center">
        <p>{dados.title}</p>
        <div className="w-30 h-40 object-cover ">
        <img src={dados.image} />
        </div>
        <p className="pt-10 text-emerald-500 font-bold" > {dados.price}</p>
        <p className="pt-5 text-xs w-80" >{dados.description}</p>

        </div>

        </>
      }



     
    </div>
  );
}
