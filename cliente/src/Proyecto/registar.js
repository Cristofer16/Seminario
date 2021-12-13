import React from 'react'
import { Link } from "react-router-dom";
import "./App.css";
export const registar = () => {
    return (
        <div className="navbar"> 
            <div className=" row justify-content-center mt-4 line">
                <div className="col-3 bg-light rounded">
                    <h1 className="mb-3 mt-3 text-muted text-center">Inicio de Sesión</h1>
                    <form>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Nombre:</label>
                            <input type="text" name="usuario" className="form-control"/>
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Apellidos:</label>
                            <input type="text" name="usuario" className="form-control"/>
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Usuario:</label>
                            <input type="text" name="usuario" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Contraseña:</label>
                            <input type="password" name="contraseña" className="form-control"/>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary mb-5 mt-3">Registar</button>
                            {" "}
                            <a href=""><Link to="/login"  ><button type="button" className="btn btn-primary mb-5 mt-3">Cancelar</button></Link></a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
