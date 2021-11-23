import React, { useState }from 'react'
import "./ambientes.css";
import { Administrador } from '../../Administrador';
import { CrearA } from './CrearA';
import { TablaA } from './TablaA';
export const Ambientes = () => {
  
    const [ambientes, setAmbientes] = useState([{
        id: Date(), ambiente: 'Amb.4', piso: 2, capacidad: 30,
    }]);

    const nuevosDatos = (ambiente, piso, capacidad) => {
        const newAmbiente = [...ambientes, { id: Date(), ambiente: ambiente, piso: piso, capacidad: capacidad }];
        setAmbientes(newAmbiente);
        //console.log(ambientes);
    };
    return (
        <>
        <Administrador />
            <div className="container-fluid bg-light" id="cue">
                <CrearA datos={nuevosDatos} />
                <TablaA ambiente={ambientes} />
            </div>
        </>
    )
}
