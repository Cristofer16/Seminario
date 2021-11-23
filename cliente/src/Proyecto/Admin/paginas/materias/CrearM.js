import React, { useState } from 'react'
export const CrearM = (props) => {
    const [datos, setDatos] = useState({
        id: '',
        nombre: '',
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
        props.datos(datos.nombre, datos.horas);
    };
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-7">
                    <h2 className="mb-3 mt-3 text-muted">Registar Materias</h2>
                    <form onSubmit={enviarDatos}>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Nombre de la materia:</label>
                            <input type="text" name="nombre" className="form-control" placeholder="Ej. Claculo" onChange={valorInpunt}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Cargas horarias en la semana:</label>
                            <input type="number" name="horas" className="form-control" placeholder="Ej. 6" onChange={valorInpunt}/>
                        </div>
                        <button type="submit" className="btn btn-primary mb-5 mt-3">Enviar</button>
                    </form>
                </div>
            </div>
        </>
    )
}
