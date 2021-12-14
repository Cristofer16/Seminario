import React, { useState } from "react";
import { Administrador } from "../../Administrador";
import { CrearA } from "./CrearA";
import "./asignar.css"
import { TablaA } from "./TablaA";
export const Asignar = () => {
    
    const [materias, setMaterias] = useState([{
        id: Date(),sigla: 'sis-747', materia: 'metodologia', grupo: 2
    }]);

    const nuevosDatos = (sigla,materia, grupo) => {
        const newMateria = [...materias, { id: Date(),sigla: sigla, materia:materia, grupo: grupo}];
        setMaterias(newMateria);
        //console.log(materias);
    };
    return (
        <>
        <Administrador />
            <div className="container-fluid bg-light" id="cue">
                <CrearA datos={nuevosDatos} />
                <TablaA materia={materias}/>
            </div>
        </>
    )
}