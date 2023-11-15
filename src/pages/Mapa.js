import '../css/mapa.css';

const Mapa = (props) => {

    return(
        <div className="mapa">
            <h2>Ubicación</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105063.55551471304!2d-58.60220470057338!3d-34.62347317790427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1699628443110!5m2!1ses-419!2sar" style={{ width:900, height:450, border:0 }}></iframe>
        </div>
    )
}

export default Mapa;