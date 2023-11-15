import '../css/api.css';
import { useEffect, useState } from 'react'; // Hooks de reacts para manipular

const Api = props => {

    const [cargando, setCargando] = useState(false);
    const [personajes, setPersonajes] =useState();

    useEffect(() => {
        const cargarDatos = async() =>{
            setCargando(true);
            const res = (await fetch('https://rickandmortyapi.com/api/character')).json();
            setPersonajes(res.results);
            setCargando(false);
        }
        cargarDatos();
    },[])
//fetch > para traer los datos nativos de JS. También se puede utilizar axios (instalar dependencia)

    return (
        <>
            <h2>Página API</h2>
            {cargando ? <p>Cargando datos...</p> : (
                <div className="personajes">
                    {/** inicio map */}
                    <div className="personaje">
                        <h4>Nombre del personaje</h4>
                        <div className="ficha">
                            <div className="foto">
                                <img src="https://fakeimg.pl/150x150/cccccc/909090" alt="" />
                            </div>
                            <div className="datos">
                                <h6>Especie: Humano o no</h6>
                                <h6>Vivo: Sí o no</h6>
                            </div>
                        </div>
                    </div>
                    {/** fin map */}
                </div>
            )}
        </>
    )
}

export default Api;