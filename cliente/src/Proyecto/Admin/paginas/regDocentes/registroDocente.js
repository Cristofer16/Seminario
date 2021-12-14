import React, { useState } from "react";
import { Administrador } from "../../Administrador";
import { CrearD } from "./CrearD";
import "./registro.css"
import { TablaD } from "./TablaD";
export const Registro = () => {
    
    const [registro, setRegistro] = useState([{
        id: Date(),apellidos: 'Lopez Quentasi', nombres: 'Jesus', horas: '24hrs'
    }]);

    const nuevosDatos = (apellidos,nombres,horas) => {
        const newRegistro = [...registro, { id: Date(),apellidos: apellidos, nombres: nombres, horas: horas}];
        setRegistro(newRegistro);
        //console.log(materias);
    };
    return (
        <>
        <Administrador />
            <div className="container-fluid bg-light" id="cue">
                <CrearD datos={nuevosDatos} />
                <TablaD registro={registro}/>
            </div>
        </>
    )
}