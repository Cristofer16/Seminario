import React, { useState } from 'react'
export const CrearM = (props) => {
    const [datos, setDatos] = useState({
        id: '',
        sigla: '',
        materia: '',
        grupo: ''
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
        props.datos(datos.sigla, datos.materia, datos.grupo);
    };
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-7">
                    <h2 className="mb-3 mt-3 text-muted">Programar Materias</h2>
                    <form onSubmit={enviarDatos}>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Sigla:</label>
                            <input type="text" name="sigla" className="form-control" placeholder="Ej. sis-747" onChange={valorInpunt}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Materia:</label>
                            <input type="text" name="materia" className="form-control" placeholder="Ej. Metodologia" onChange={valorInpunt}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Grupo:</label>
                            <input type="number" name="grupo" className="form-control" placeholder="Ej. 1" onChange={valorInpunt}/>
                        </div>
                        <button type="submit" className="btn btn-primary mb-5 mt-3">Programar</button>
                    </form>
                </div>
            </div>
        </>
    )
}
