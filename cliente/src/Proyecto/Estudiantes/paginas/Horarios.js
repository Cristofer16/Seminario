import React from 'react'
import { Estudiantes } from '../Estudiantes';
const Horarios = () => {
    return (
        <div>
            < Estudiantes />
        <div className="table-responsive">
            <h1 className="text-dark text-center">Horario</h1>
            <table className="table table-bordered table-hover">
             <thead className="table-primary">
                 <tr>
                     <th>Hr</th>
                     <th>Lunes</th>
                     <th>Martes</th>
                     <th>Miercoles</th>
                     <th>Jueves</th>
                     <th>Viernes</th>
                 </tr>
             </thead>
             <tbody>
                 <tr>
                     <td>7:45 - 10:00</td>
                     <td>Programacion Amb2 PB</td>
                     <td></td>
                     <td>Metodologia Amb3 1er piso</td>
                     <td></td>
                     <td></td>
                 </tr>
                 <tr>
                     <td>10:00-12:15</td>
                     <td></td>
                     <td>Programacion Amb2 PB</td>
                     <td></td>
                     <td></td>
                     <td>Metodologia Amb3 1er piso</td>
                 </tr>
             </tbody>
            </table>
             <button type="submit" className="btn btn-primary" >imprimir</button>    
             </div>
             </div>
    )
}

export default Horarios;