import { EjemploProps1, EjemploProps2, EjemploProps3, EjemploProps4, EjemploProps5 } from "../components/Props";
const nombre2 = 'Javier';
const frutas =['manzana','banana','palta','sandia']
const verduras =['acelga','espinaca','zanahoria','tomate']

const mostrarValor = valor =>{
    console.log(valor)
}


const Ejemplo01 = (props) => {

    return(
        <div>
            <h2>Ejemplos de Props</h2>
            {/* Propiedad simple y reutilizable */}
            <EjemploProps1 nombre='Leo' /> 
            <EjemploProps1 nombre={nombre2} /> 
            <EjemploProps1 /> {/* sólo se muestra HOLA */}

            {/* Listado de productos - pag 11 pdf */}
            <EjemploProps2 elementos={frutas} /> {/*  */}
            <EjemploProps2 elementos={verduras} /> {/*  */}

            {/* Múltiples propiedades y destructing */}
            <EjemploProps3 titulo="Fútbol Messi" subtitulo="8vo balón de oro" cuerpo="Lo hizo nuevamente, sas ffe fd sas a ds df sd s d sd" />

            {/* Si o sí necesita pasarle un manejador (mostrarvalor - línea 6), sino daría errores */}
            <EjemploProps4 cambiarValor={mostrarValor} />

            <EjemploProps5 eventoClick={mostrarValor} />

        </div>
    )
}

export default Ejemplo01;