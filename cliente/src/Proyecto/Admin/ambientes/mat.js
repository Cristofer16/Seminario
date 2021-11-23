import React from 'react'
import { Link } from "react-router-dom"; 
import { Administrador } from '../Administrador'
const mat = () => {
    return (
        <div>
            <Administrador />
            <Link to="/Ambientes"  > 
            <button className="btn btn-primary">Ambientes</button>
            </Link>
            <Link to="/virtual"  > 
            <button className="btn btn-primary">Virtual</button>
            </Link>
        </div>
    )
}

export default mat
