import React, { useState } from "react";
import { Crear } from "./Crear";
import "./materias.css"
import { Tabla } from "./Tabla";
export const Materias = () => {
    
    const [materias, setMaterias] = useState([{
        id: Date(),nombre: 'fisica', horas: 65
    }]);

    const nuevosDatos = (nombre, horas) => {
        const newMateria = [...materias, { id: Date(),nombre: nombre, horas: horas}];
        setMaterias(newMateria);
        //console.log(materias);
    };
    return (
        <>
            <div className="container-fluid bg-light" id="cue">
                <Crear datos={nuevosDatos} />
                <Tabla materia={materias}/>
            </div>
        </>
    )
}