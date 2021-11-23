import React, { useState } from 'react'
export const CrearA = (props) => {
    const [datos, setDatos] = useState({
        id: '',
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

    const enviarDatos = (event) => {
        event.preventDefault();
        props.datos(datos.ambiente, datos.piso, datos.capacidad);
    };
    return (
        <>
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
                            <label className="form-label">Capacidad de estudiantes:</label>                                <input type="number" name="capacidad" className="form-control" placeholder="Ej. 30" onChange={valorInpunt}/>
                        </div>
                        <button type="submit" className="btn btn-primary mb-5 mt-3">Enviar</button>
                    </form>
                </div>
            </div>
        </>
    )
}
