import React, { useState } from 'react'
export const CrearD = (props) => {
    const [datos, setDatos] = useState({
        id: '',
        apellidos: '',
        nombres: '',
        horas: ''
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
        props.datos(datos.apellidos, datos.nombres, datos.horas);
    };
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-7">
                    <h2 className="mb-3 mt-3 text-muted">Registar Docentes</h2>
                    <form onSubmit={enviarDatos}>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Apellidos:</label>
                            <input type="text" name="apellidos" className="form-control" placeholder="Ej. Quispe Mamani" onChange={valorInpunt}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Nombres:</label>
                            <input type="text" name="nombres" className="form-control" placeholder="Ej. Ariel" onChange={valorInpunt}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Designacion de horas:</label>
                            <input type="text" name="horas" className="form-control" placeholder="Ej. 48hrs" onChange={valorInpunt}/>
                        </div>
                        <button type="submit" className="btn btn-primary mb-5 mt-3">Enviar</button>
                    </form>
                </div>
            </div>
        </>
    )
}
