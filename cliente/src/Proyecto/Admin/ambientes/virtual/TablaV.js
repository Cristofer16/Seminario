import React from "react";

export const TablaV = (props) => {
    //console.log(props.);
    return (
        <>
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead className="table-primary">
                        <tr>
                            {/*<th>No</th>*/}
                            <th>Codigo Sala Virtual</th>
                            <th>Fecha de Clase</th>
                            <th>Hora</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.registro.map((reg) => (
                            <tr key={reg.id}>
                                <td>{reg.salVirtual}</td>
                                <td>{reg.fechClass}</td>
                                <td>{reg.hora}</td>
                                <td> 
                                    <button className="btn btn-primary">Actualizar</button>
                                    {" "}
                                    <button className="btn btn-primary">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>    
    )
}