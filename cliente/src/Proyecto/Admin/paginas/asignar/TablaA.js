import React from 'react'

export const TablaA = (props) => {
    //console.log(props.materia);
    return (
        <>
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead className="table-primary">
                        <tr>
                            {/*<th>No</th>*/}
                            <th>Sigla</th>
                            <th>Materia</th>
                            <th>Grupo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.materia.map((mat) => (
                            <tr key={mat.id}>
                                <td>{mat.sigla}</td>
                                <td>{mat.materia}</td>
                                <td>{mat.grupo}</td>
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
