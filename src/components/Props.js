const EjemploProps1 = props =>{
    return(
        <h3>Hola {props.nombre}</h3>
    )
}

const EjemploProps2 = props =>{

    const {elementos} = props;
    return(
            <ul>
                {elementos.map(elemento => <li key={elemento}>{elemento}</li>)}
            </ul>
        )
}

const EjemploProps3 = ({titulo, subtitulo, cuerpo}) => {
    return(
        <div className="nota">
            <h4>{titulo}</h4>
            <h5>{subtitulo}</h5>
            <p>{cuerpo}</p>
        </div>
    )
}

const EjemploProps4 = props => {
    // Cuando se ejecute el evento onChange en el input ejecuto la función anónima que llama a la función que enviamos en la props cambiar valor
    return(
        <label>Ver en consola: <input type="text" onChange={(e) =>
        props.cambiarValor(e.target.value)} /></label>
        )
}

const EjemploProps5 = props => {
// Defino la función que va a manejar el evento click
    const handleClick = e => {
        // Valido que pase la props que necesito, si se da la condición o la pasaron va a mostrar el msje
        if(props.eventoClick){
            props.eventoClick('Me cliqueaste')
        }
    }
    return (
        <p><button onClick={handleClick}>Cliqueame!</button></p>
    )

}

export {
    EjemploProps1,
    EjemploProps2,
    EjemploProps3,
    EjemploProps4,
    EjemploProps5
}