/*
function ConceitoChave(props){
    return (
        <li>
            <img src= {props.imagem} alt="imagem" />
            <h3>{props.titulo}</h3>
            <p>{props.descri}</p>
        </li>
    )
}
*/

function ConceitoChave({titulo, descri, imagem}){
    return (
        <li>
            <img src= {imagem} alt="imagem" />
            <h3>{titulo}</h3>
            <p>{descri}</p>
        </li>
    )
}

export default ConceitoChave