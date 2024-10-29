import {useState } from "react";

import ConceitoChave from "./ConceitoChave";
import { CONCEITOS_CHAVE } from "./data"

import Exemplos from "./Exemplos/Exemplos";
import Conceitos from "./Conceitos/Conceitos";

function App() {
  
  const [conteudo, setConteudo] = useState('Escolha a opção')


  return (
    <>
      <Header/>
      <main>
        <Conceitos/>
        <Exemplos/>
      </main>
    </>
  );
}

function Header() {
  return (
  <header>
    <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
    <h1>Fundamentos de React</h1>
    <p>
      Conceitos {Trocar()} do React que você precisará para quase qualquer
      aplicativo que você for construir!
    </p>
  </header>)
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Trocar()
{
  let array = ["Fundamentais", "Essencias", "Fredy"]

  return array[getRandomInt(0,2)]
}



export default App;
