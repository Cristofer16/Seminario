import React from 'react'
import { Estudiantes } from '../Estudiantes';
import "../NavBar.css";
const VerProgramacion = () => {
    return (
        <div>
            < Estudiantes />
        <div className="table-responsive">
            <h1 className="text-dark text-center text">MI PROGRAMACION DE MATERIAS</h1>
            <table className="table table-bordered table-hover PROGRA">
             <thead className="table-primary ">
                 <tr>
                     <th>SIGLA</th>
                     <th>MATERIA</th>
                     <th>GRUPO</th>
                     <th>1ER PARCIAL</th>
                     <th>2DO PARCIAL</th>
                     <th>3ER PARCIAL</th>
                     <th>PROM. PARCIAL</th>
                     <th>PROM. PRACTICAS</th>
                     <th>PROM. LABORATORIO</th>
                     <th>EX FINAL</th>
                     <th>PROM. FINAL</th>
                     <th>NOTA FINAL</th>
                     <th>2DO TURNO</th>
                 </tr>
             </thead>
             <tbody className='pro'>
                 <tr>
                     <td>SIS-719</td>
                     <td>SEMINARIO DE SISTEMAS</td>
                     <td>1</td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                 </tr>
             </tbody>
            </table>
             </div>
             </div>
    )
}

export default VerProgramacion;
