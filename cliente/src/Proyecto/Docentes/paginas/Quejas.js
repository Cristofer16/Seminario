import React from 'react'
import { Docentes } from '../Docentes'
const Quejas = () => {
    return (
        <div>
              < Docentes />
              <div className="row justify-content-center">
                <div className="col-7">
                    <h2 className="mb-3 mt-3 text-muted">Informe</h2>
                    <form >
                        <div className="mb-3 mt-3">
                            <label className="form-label">Asunto:</label>
                            <input type="text" name="asunto" className="form-control"  />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Descripcion:</label>
                            <input type="text" name="descripcion" className="form-control"/>
                        </div>
                        <button type="submit" className="btn btn-primary mb-5 mt-3">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Quejas;
