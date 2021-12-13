import React from 'react'

export const TablaD = (props) => {
    //console.log(props.materia);
    return (
        <>
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead className="table-primary">
                        <tr>
                            {/*<th>No</th>*/}
                            <th>Apellidos</th>
                            <th>Nombres</th>
                            <th>Designacion de Horas</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.registro.map((reg) => (
                            <tr key={reg.id}>
                                <td>{reg.apellidos}</td>
                                <td>{reg.nombres}</td>
                                <td>{reg.horas}</td>
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
