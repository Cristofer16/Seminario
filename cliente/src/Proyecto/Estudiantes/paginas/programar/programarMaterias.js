import React, { useState } from "react";
import { Estudiantes } from "../../Estudiantes";
import { CrearM } from "./CrearM";
import "./materias.css"
import { TablaE } from "./TablaE";
export const Materia = () => {
    
    const [materias, setMaterias] = useState([{
        id: Date(),sigla:'fis-202',materia:'fisica', grupo: 1
    }]);

    const nuevosDatos = (sigla,materia, grupo) => {
        const newMateria = [...materias, { id: Date(),sigla: sigla, materia: materia, grupo: grupo}];
        setMaterias(newMateria);
        //console.log(materias);
    };
    return (
        <>
        <Estudiantes />
            <div className="container-fluid bg-light" id="cue">
                <CrearM datos={nuevosDatos} />
                <TablaE materia={materias}/>
            </div>
        </>
    )
}