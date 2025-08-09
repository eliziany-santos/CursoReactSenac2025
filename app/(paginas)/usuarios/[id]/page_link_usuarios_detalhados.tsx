/*type userProps = {
    id: number;
    body: string;
    title: string;
    userId: number;
  };
  
  export default async function UsuarioDetalhes({ params }: { params: { id: string } }) {
    const { id } = params;
  
    const resposta = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const dados: userProps[] = await resposta.json();
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Postagens do Usuário {id}</h1>
  
        {dados.map((item) => (
          <div key={item.id} className="mb-4 p-4 border rounded bg-gray-50">
            <h2 className="text-blue-700 font-semibold">{item.title}</h2>
            <p className="text-gray-700">{item.body}</p>
          </div>
        ))}
      </div>
    );
  }
  
*/