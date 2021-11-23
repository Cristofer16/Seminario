import React, { useState } from 'react'
import { Administrador } from '../../Administrador';
export const Crear = () => {
    const [datos, setDatos] = useState({
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
  
    const [materias, setMaterias] = useState([{}]);

    const enviarDatos = (event) => {
        event.preventDefault();
        const newMateria = [...materias, { nombre: datos.nombre, horas: datos.horas }];
        setMaterias(newMateria);
        console.log(materias);
    };
    return (
        <>
        < Administrador />
            <div className="row justify-content-center">
                <div className="col-7">
                    <h2 className="mb-3 mt-3 text-muted">Materias</h2>
                    <form onSubmit={enviarDatos}>
                        <div className="mb-3 mt-3">
                            <label for="materia" className="form-label">Nombre de la materia:</label>
                            <input type="text" name="nombre" className="form-control" placeholder="Ej. Claculo" onChange={valorInpunt}/>
                        </div>
                        <div className="mb-3">
                            <label for="hora" className="form-label">Cargas horarias en la semana:</label>
                            <input type="number" name="horas" className="form-control" placeholder="Ej. 6" onChange={valorInpunt}/>
                        </div>
                        <button type="submit" className="btn btn-primary mb-5 mt-3">Enviar</button>
                    </form>
                </div>
            </div>
        </>
    )
}
