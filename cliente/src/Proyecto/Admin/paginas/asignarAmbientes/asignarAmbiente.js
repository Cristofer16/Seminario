import React, { useState } from "react";
import { Administrador } from "../../Administrador";
import { CrearAmbiente } from "./CrearAmbiente";
import "./Asignar.css"
import { TablaAmbiente } from "./TablaAmbiente";
export const AmbienteASIG = () => {
    
    const [materias, setMaterias] = useState([{
        id: Date(),sigla: 'Sis-747', ambiente: 'virtual', dias: 'lunes', horas: '10:00 a 12:15'
    }]);

    const nuevosDatos = (sigla,ambientes,dias, horas) => {
        const newMateria = [...materias, { id: Date(),sigla: sigla, ambientes:ambientes,dias:dias, horas: horas}];
        setMaterias(newMateria);
        //console.log(materias);
    };
    return (
        <>
        <Administrador />
            <div className="container-fluid bg-light" id="cue">
                <CrearAmbiente datos={nuevosDatos} />
                <TablaAmbiente materia={materias}/>
            </div>
        </>
    )
}