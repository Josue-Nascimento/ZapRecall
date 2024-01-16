import styled from "styled-components";
import seta from "../img/seta_play.png";
import setaVirar from "../img/seta_virar.png";
import { useState } from "react";
import erro from "../img/icone_erro.png";
import quase from "../img/icone_quase.png";
import acerto from "../img/icone_certo.png";


export default function PerguntaEstados(props) {
  const [estados, setEstados] = useState(0);
 
  console.log(estados);
  if (estados === 0) {
    return (
      <PerguntaFechada>
        <p>Pergunta {props.index + 1}</p>
        <img onClick={() => setEstados(1)} src={seta} />
      </PerguntaFechada>
    );
  } else if (estados === 1) {
    return (
      <PerguntaAberta>
        {props.Q}
        <img onClick={() => setEstados(2)} src={setaVirar} />
      </PerguntaAberta>
    );
  } else if (estados === 2) {
    return(
      <>
        <PerguntaAberta>
          {props.R}
          <ContainerBotoes>
            <button onClick={() => {
              setEstados(3);
              props.setContador([...props.contador, "index"])
            }}>Nao lembrei</button>

            <button onClick={() =>{ setEstados(4); props.setContador([...props.contador, "index"])}}>Quase nao lembrei!</button>

            <button onClick={() =>{ setEstados(5); props.setContador([...props.contador, "index"])}}>Zap!</button>
          </ContainerBotoes>
        </PerguntaAberta>
      </>
    );
  } else if (estados === 3) {
    return (
      <PerguntaFechada Cores={"Green"}>
        <p>Pergunta {props.index + 1}</p>
        <img src={erro} />
      </PerguntaFechada>
    );
  } else if (estados === 4) {
    return (
      <>
        <PerguntaFechada>
          <p>Pergunta {props.index + 1}</p>
          <img src={quase} />
        </PerguntaFechada>
        ;
      </>
    );
  } else if (estados === 5) {
    return (
      <>
        <PerguntaFechada>
          <p>Pergunta {props.index + 1}</p>
          <img src={acerto} />
        </PerguntaFechada>
        ;
      </>
    );
  }
}

const PerguntaFechada = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`;

const PerguntaAberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

const FooterConcluidos = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`;
const ContainerBotoes = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;
  button {
    width: 90px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 3px;
    color: #ffffff;
    border-radius: 5px;
    border: 1px solid black;
    padding: 5px;
    &:nth-child(1) {
      background-color: red; /* Cor do primeiro botão */
    }

    &:nth-child(2) {
      background-color: #ff922e; /* Cor do segundo botão */
    }

    &:nth-child(3) {
      background-color: green; /* Cor do terceiro botão */
    }
  }
`;
