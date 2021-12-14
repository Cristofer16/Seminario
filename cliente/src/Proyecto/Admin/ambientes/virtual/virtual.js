import React, { useState } from "react";
import { Administrador } from "../../Administrador";
import { CrearV } from "./CrearV";
import "./virtual.css"
import { TablaV } from "./TablaV";
export const Virtual = () => {

    const [virtual, setVirtual] = useState([{
        id: Date(),salVirtual: 'Ej. https://meet.google.com/jqc-vgra-hio', fechClass:'', hora: '8:45'
    }]);

    const nuevosDatos = (salVirtual,fechClass, hora) => {
        const newVirtual = [...virtual, { id: Date(),salVirtual: salVirtual, fechClass: fechClass, hora: hora}];
        setVirtual(newVirtual);
        //console.log(materias);
    };
    return (
        <>
        <Administrador />
            <div className="container-fluid bg-light" id="cue">
                <CrearV datos={nuevosDatos} />
                <TablaV registro={virtual}/>
            </div>
        </>
    )    
}
