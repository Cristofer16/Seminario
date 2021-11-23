import React, { useState }from 'react'
import "./ambientes.css";
import { Administrador } from '../Administrador';
export const Ambientes = () => {
    const [datos, setDatos] = useState({
        ambiente: '',
        piso: '',
        capacidad: '',
    });

    const valorInpunt = (event) => {
        //console.log(event.target.value);
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        });
    };
  
    const [ambientes, setAmbientes] = useState([{}]);

    const enviarDatos = (event) => {
        event.preventDefault();
        const newAmbiente = [...ambientes, { ambiente: datos.ambiente, piso: datos.piso, capacidad: datos.capacidad }];
        setAmbientes(newAmbiente);
        console.log(ambientes);
    };
    return (
        <>
        <Administrador />
            <div className="container-fluid bg-light" id="cue">
                <div className="row justify-content-center">
                    <div className="col-md-7">
                        <h2 className="mb-3 mt-3 text-muted">Registrar Ambientes</h2>
                        <form onSubmit={enviarDatos}>
                            <div className="mb-3 mt-3">
                                <label className="form-label">Ambiente:</label>
                                <input type="text" name="ambiente" className="form-control" placeholder="Ej. Amb. 2 ó Lab. 2" onChange={valorInpunt}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Numero de piso:</label>
                                <input type="number" name="piso" className="form-control" placeholder="Ej. 3" onChange={valorInpunt}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Capacidad de estudiantes:</label>
                                <input type="number" name="capacidad" className="form-control" placeholder="Ej. 30" onChange={valorInpunt}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
