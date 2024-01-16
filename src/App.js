import styled from "styled-components";
import Topo from "./topo";
import Corpo from "./corpo";
import Final from "./final";
import { useState } from "react";

export default function App() {
 
  return (
    <Screen>
      <Topo />
      <Corpo  />
    </Screen>
  );
}
const Screen = styled.div`
  background-color: #fb6b6b;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;



