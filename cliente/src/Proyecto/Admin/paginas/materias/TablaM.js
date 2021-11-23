import React from 'react'

export const TablaM = (props) => {
    //console.log(props.materia);
    return (
        <>
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead className="table-primary">
                        <tr>
                            {/*<th>No</th>*/}
                            <th>Materia</th>
                            <th>Horas</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.materia.map((mat) => (
                            <tr key={mat.id}>
                                <td>{mat.nombre}</td>
                                <td>{mat.horas}</td>
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
