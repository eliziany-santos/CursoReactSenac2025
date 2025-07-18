

import { useState } from "react";

export default function Index() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <div>
        <button onClick={() => setContador(contador + 1)}>SOMA</button>
      </div>
      <div>
        <button onClick={() => setContador(contador - 1)}>SUBTRAI</button>
      </div>

      <div>Valor: {contador}</div>

      {contador >= 0 ? <p>Contador é maior ou igual a zero</p> : null}
    </div>
  );
}
