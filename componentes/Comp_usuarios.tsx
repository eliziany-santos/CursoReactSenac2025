import Link from "next/link";

type UserProps = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export default async function Posts() {
  const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
  const dados: UserProps[] = await resposta.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Lista de Usuários</h1>

      {dados.map((item) => (
        <div key={item.id} className="mb-4 p-4 border rounded bg-gray-100">
          <h2 className="font-semibold">{item.name}</h2>
          <p>Usuário: {item.username}</p>
          <p>Email: {item.email}</p>
          <Link href={`/usuarios/${item.id}`}>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Ver detalhes
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
