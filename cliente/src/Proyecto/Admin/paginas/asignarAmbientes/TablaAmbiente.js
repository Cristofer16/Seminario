import React from 'react'

export const TablaAmbiente = (props) => {
    //console.log(props.materia);
    return (
        <>
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead className="table-primary">
                        <tr>
                            {/*<th>No</th>*/}
                            <th>Sigla</th>
                            <th>Ambiente</th>
                            <th>Dia</th>
                            <th>Horas Academicas</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.materia.map((mat) => (
                            <tr key={mat.id}>
                                <td>{mat.sigla}</td>
                                <td>{mat.ambiente}</td>
                                <td>{mat.dias}</td>
                                <td>{mat.horas}</td>
                                <td> 
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
