import React, { useState } from 'react'
export const CrearV = (props) => {
    const [datos, setDatos] = useState({
        id: '',
        salVirtual: '',
        fechClass: '',
        hora: ''
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
        props.datos(datos.salVirtual, datos.fechClass, datos.hora);
    };
    return (
        <>            
            <div className="row justify-content-center">
                <div className="col-md-7">
                    <h2 className="mb-3 mt-3 text-muted">Programación Clase Virtual</h2>
                    <form onSubmit={enviarDatos}>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Codigo de Sala Virtual:</label>
                            <input type="text" name="salVirtual" className="form-control" placeholder="Ej. https://meet.google.com/jqc-vgra-hio" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Fecha de la Clase:</label>
                            <input type="date" className="form-control" id="fechClass"  name="fechClass"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Hora:</label>
                            <input type="time" className="form-control" placeholder="Ej. Calculo" name="hora"/>
                        </div>                            
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </div>
              
        </>   
    )
}    