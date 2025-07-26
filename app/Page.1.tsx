/*import { userProps } from "./page";

export default async function Page() {

  const resposta = await fetch("https://fakestoreapi.com/products");
  const dados: userProps[] = await resposta.json();
  console.log(dados);
  return (
    <>

      <div className="bg-sky-500 h-screen w-55 absolute">
        <h1>Menu</h1>
        <h2>Inicio</h2>
        <h2>Inicio</h2>
        <h2>Inicio</h2>
      </div>


      <div className="ml-60 flex flex-wrap">
        {dados.map((item, index) => <div key={item.id}>
          <div>
            <div className=" flex-col border-4 flex flex-wrap gap-4 p-4 bg-gray-100  items-center w-100 h-150 object-cover">
              <div className="w-50 h-50 object-cover ">
                <img src={item.image} />
              </div>
              <p className="pt-20 font-bold text-left"> Titulo: {item.title}</p>
              <p className="text-emerald-500 font-bold"> Valor:{item.price}</p>
              <h1>Descrição:{item.description}</h1>

            </div>

          </div>
        </div>
        )}
      </div></>) /* <div id="container" className="flex">

      <div id="esquerda" className="bg-blue-500 m-20" >
        <p>Esquerda</p>
      </div>


      <div id="direita" className="bg-emerald-300 flex justify-between w-full" >


        <div>

          {dados.map((item, index) =>
            <div key={item.id}>
              <div >
                <div className=" flex-col border-4 flex flex-wrap gap-4 p-4 bg-gray-100  items-center w-100 h-150 object-cover">

                  <p> Titulo: {item.title}</p>
                  <p> Valor:{item.price}</p>
                  <h1>Descrição:{item.description}</h1>
                  <div className="w-50 h-50 object-cover">
                    <img src={item.image} />
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      </div>
        </div> */

  /* <div id="container" className="flex">

      <div id="esquerda" className="bg-blue-500 m-20" >
        <p>Esquerda</p>
      </div>


      <div id="direita" className="bg-emerald-300 flex justify-between w-full" >


        <div>

          {dados.map((item, index) =>
            <div key={item.id}>
              <div >
                <div className=" flex-col border-4 flex flex-wrap gap-4 p-4 bg-gray-100  items-center w-100 h-150 object-cover">

                  <p> Titulo: {item.title}</p>
                  <p> Valor:{item.price}</p>
                  <h1>Descrição:{item.description}</h1>
                  <div className="w-50 h-50 object-cover">
                    <img src={item.image} />
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      </div>
    </div> 
  }




     >
   

}*/