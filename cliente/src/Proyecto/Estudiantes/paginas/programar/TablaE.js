import React from 'react'

export const TablaE = (props) => {
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
                        </tr>
                    </thead>
                    <tbody>
                        {props.materia.map((mat) => (
                            <tr key={mat.id}>
                                <td>{mat.sigla}</td>
                                <td>{mat.materia}</td>
                                <td>{mat.grupo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
