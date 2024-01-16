import { useState } from "react";
import PerguntaEstados from "./componentes/perguntaEstados";
import Final from "./final";
import Perguntas from "./perguntas";


export default function Corpo() {
  const [contador, setContador] = useState([])
  return (
    <>
    {Perguntas.map((p, index) => (
      <PerguntaEstados Q={p.Q} R={p.R} index={index} p={p} setContador={setContador} contador={contador}/>
  ))}
  <Final contador={contador}  />
    </>
  );
}

