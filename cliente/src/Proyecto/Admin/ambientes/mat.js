import React from 'react'
import { Link } from "react-router-dom"; 
import "./mat.css";
import { Administrador } from '../Administrador'
const mat = () => {
    return (
        <div className="table-responsive" align="center">
            <Administrador />
            <br/>
            <br/>  
            <br/>
            <br/>
            <table>
                <th>
                    <Link to="/Ambientes"  > 
                    <button className="btn btn-primary" class="boton">Clase Presencial</button>
                    </Link>
                </th>
                <th></th>  
                <td>
                    <Link to="/virtual"  > 
                    <button className="btn btn-primary" class="boton">Clase Virtual</button>
                    </Link>
                </td>
            </table>
        </div>
    )
}

export default mat
