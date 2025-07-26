/*type userProps = {
    id: number,
    title: string,
    price: number,
    description: string,
    image: string
  
  
  }
  
  export default async function produtosDetalhes({ params }: { params: { id: string } }) {
    const { id } = params;
  
    const resposta = await fetch(`https://fakestoreapi.com/products=${id}`);
    const dados: userProps[] = await resposta.json();
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Detalhes do Produto {id}</h1>
  
        {dados.map((item) => (
          <div key={item.id} className="mb-4 p-4 border rounded bg-gray-50">
            <h2 className="text-blue-700 font-semibold">{item.title}</h2>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    );
  }
  */