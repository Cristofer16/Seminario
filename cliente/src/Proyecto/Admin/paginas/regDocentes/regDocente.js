import React from "react";
import { Administrador } from "../../Administrador";
const regDocente = () => {
    return (
        <div className="table-responsive"  align="center" >          
          < Administrador />
            <form onsubmit="return valida(this)">
           
                <div className="container-fluid bg-light" id="cue">
                <div class="row justify-content-center">
                    <div className="col-7">
                        <h2 className="mb-3 mt-3 text-muted">Registro Cargas Horarias Docente</h2>
                        <form action="">
                            <div class="mb-3 mt-3">
                                <label for="materia" class="form-label">Apellidos:</label>
                                <input type="text" class="form-control" id="apellido" placeholder="Ej. Buitrago" name="apeliido"/>
                            </div>
                            <div class="mb-3">
                                <label for="hora" class="form-label">Nombre(s):</label>
                                <input type="text" class="form-control" id="nombre" placeholder="Ej. Byron" name="nombre"/>
                            </div>
                            <div class="mb-3 mt-3">
                                <label for="materia" class="form-label">Materia a Registrar:</label>
                                <input type="text" class="form-control" id="materia" placeholder="Ej. Calculo" name="materia"/>
                            </div>
                            <div class="mb-3 mt-3">
                                <label for="materia" class="form-label">Designacion Horas por Materia:</label>
                                <input type="time" class="form-control" id="designacion" placeholder="Ej. Claculo" name="designacion"/>
                            </div>
                            <button type="submit" class="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>             
            </form>                         
        </div>
    )
}

export default regDocente;