import React, { useState } from 'react'
export const CrearAmbiente = (props) => {
    const [datos, setDatos] = useState({
        id: '',
        sigla: '',
        ambiente: '',
        dias: '',
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
        props.datos(datos.sigla, datos.ambiente, datos.dias, datos.horas);
    };
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-7">
                    <h2 className="mb-3 mt-3 text-muted">Asignar Ambiente</h2>
                    <form onSubmit={enviarDatos} >
                        <div className="mb-3 mt-3">
                            <label className="form-label">Sigla:</label>
                            <input type="text" name="sigla" className="form-control" placeholder="Ej. Sis-747" onChange={valorInpunt}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Ambiente:</label>
                            <input type="text" name="ambiente" className="form-control"  onChange={valorInpunt}/>
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Dia:</label>

                            <input type="button" name="dias" value="vamos" className="form-control" placeholder="Ej. lunes" onChange={valorInpunt} /> 
                             
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Horas Academincas:</label>
                            <input type="text" name="horas" className="form-control" placeholder="Ej. 10:00 a 12:15" onChange={valorInpunt}/>
                        </div>
                        <button type="submit" className="btn btn-primary mb-5 mt-3">Enviar</button>
                    </form>
                </div>
            </div>
        </>
    )
}
