import React, { useState } from "react";
import { Administrador } from "../../Administrador";
import { CrearM } from "./CrearM";
import "./materias.css"
import { TablaM } from "./TablaM";
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
        <Administrador />
            <div className="container-fluid bg-light" id="cue">
                <CrearM datos={nuevosDatos} />
                <TablaM materia={materias}/>
            </div>
        </>
    )
}