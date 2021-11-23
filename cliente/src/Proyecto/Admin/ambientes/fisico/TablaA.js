import React from 'react'

export const TablaA = (props) => {
    return (
        <>
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead className="table-primary">
                        <tr>
                            {/*<th>No</th>*/}
                            <th>Ambiente</th>
                            <th>Piso</th>
                            <th>Capacidad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.ambiente.map((mat) => (
                            <tr key={mat.id}>
                                <td>{mat.ambiente}</td>
                                <td>{mat.piso}</td>
                                <td>{mat.capacidad}</td>
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
