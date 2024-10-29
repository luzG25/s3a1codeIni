import ConceitoChave from "../ConceitoChave"
import { CONCEITOS_CHAVE } from "../data"

function Conceitos() {

    return (
        <section id="core-concepts">
            <h2>Conceitos Chave</h2>

            <ul>
                {
                    CONCEITOS_CHAVE.map( (conceito) => (
                    
                        <ConceitoChave key={conceito.titulo} {... conceito} />
                    
                     ) )
                }
            </ul>

        </section>
    )

}

export default Conceitos