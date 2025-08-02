import { useState } from "react";

export default function Exerc_4() {
  const [tarefa, setTarefa] = useState("");
  const [lista, setLista] = useState<string[]>([]);

  function adicionarTarefa() {
    if (tarefa.trim() === "") return; 
    setLista([...lista, tarefa.trim()]); 
    setTarefa(""); 
  }


  return (
    <div className="max-w-md">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Digite uma tarefa"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={adicionarTarefa}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Adicionar
        </button>
      </div>

      <ul className="list-disc pl-5 space-y-2">
        {lista.map((item, index) => (
          <li key={index} className="text-gray-800">
           {index} - {item}
          </li>
        ))}
      </ul>
    </div>
  );
}



    /*function adicionarTarefa() {
    if (tarefa === "") return;
    setLista([...lista, tarefa]);
    setTarefa("");
    } 

    function adicionarTarefa() {
    if(tarefa != ""){
      setLista([...lista, tarefa])
      setTarefa("");
    }
    }
*/