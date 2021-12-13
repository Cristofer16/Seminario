import React from 'react'
import "./App.css";
export const home = () =>{
    return (
        <div className="image ">
            <div className="navbar">
            </div>
            <div className="row justify-content-end mt-5  formu">
                <div className="col-3 bg-light rounded">
                    <h1 className="mb-3 mt-3 text-muted text-center">Inicio de Sesión</h1>
                    <form>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Usuario:</label>
                            <input type="text" name="usuario" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Contraseña:</label>
                            <input type="password" name="contraseña" className="form-control"/>
                        </div>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary mb-5 mt-3">Inicar Sesión</button>
                            {" "}
                            <a href="./registrar"><button type="button" className="btn btn-primary mb-5 mt-3">Registarse</button></a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}