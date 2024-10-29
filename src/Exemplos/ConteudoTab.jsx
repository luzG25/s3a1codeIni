

function ConteudoTab( {objetoExemplo} ) {

    return (
        <div id= "tab-content">
            {
                typeof objetoExemplo === 'undefined' ? (
                    <h3>Seleciona um Tópico</h3>

                ): (
                    <div>
                        <h3>
                            {objetoExemplo.titulo}
                            </h3>
                            <p>
                                {objetoExemplo.descri}
                            </p>
                            <pre>
                                <code> {objetoExemplo.code} </code>
                            </pre>
                    </div>
                )
            }
        </div>
    );

}

export default ConteudoTab