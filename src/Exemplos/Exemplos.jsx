import TabButton from "../TabButton";
import { useState } from "react";

import { EXEMPLOS } from "../data";
import ConteudoTab from "./ConteudoTab";

function Exemplos(){

    const [topicoSel, setTopicoSel] = useState();

    function handleSelect(labelButao){
        setTopicoSel(labelButao)
    }

    function buscarObjetoExemplo(topico){
        return EXEMPLOS.find( (conceito) => conceito.titulo === topico )
    }


    return (
        <section id="examples">
            <h2>Exemplos</h2>
            <menu>
            <TabButton onSelect={() => handleSelect('componentes')} >Componentes</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')} >JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')} >Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')} >State</TabButton>
            </menu>

            <ConteudoTab objetoExemplo={buscarObjetoExemplo(topicoSel)} />

      </section>
    )

}

export default Exemplos