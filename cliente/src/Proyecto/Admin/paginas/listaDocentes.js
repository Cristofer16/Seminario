import React from 'react';
import { Link } from "react-router-dom"; 
import { Administrador } from '../Administrador';
const listaDocentes = () => {
    return (
        <div>
            < Administrador /> 
        <div className="col">
            <h1 className="text-dark text-center">Lista de Docentes</h1>
            <table className="table table-bordered table-hover tableFixHead">
             <thead className="table-primary">
                 <tr>
                     <th>N°</th>
                     <th>Nombres</th>
                     <th>Accion</th>
                 </tr>
             </thead>
             <tbody>
                 <tr>
                     <td>1</td>
                     <td>Ing. Jesus Lopez</td>
                     <td><Link to="/programarMaterias"  > 
                     <button className="btn btn-primary">Programar</button>
                     </Link></td>
                 </tr>
             </tbody>
            </table>    
             </div>
             </div>
    )
}

export default listaDocentes
