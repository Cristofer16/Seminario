import React from "react";

import { Administrador } from "../Administrador";
const virtual = () => {
    return (
        <div className="table-responsive">
            <Administrador />
            <form id="docReg" action="" method="get" onsubmit="return valida(this)">
            
            <div className="container-fluid bg-light" id="cue">
                <div class="row justify-content-center">
                    <div className="col-7">
                        <h2 className="mb-3 mt-3 text-muted">Programación Clase Virtual</h2>
                        <form action="">
                            <div class="mb-3 mt-3">
                                <label for="materia" class="form-label">Codigo de Sala Virtual:</label>
                                <input type="text" class="form-control" id="salVirtual" placeholder="Ej. https://meet.google.com/jqc-vgra-hio" name="salVirtual"/>
                            </div>
                            <div class="mb-3">
                                <label for="hora" class="form-label">Fecha de la Clase:</label>
                                <input type="date" class="form-control" id="fechClass"  name="fechClass"/>
                            </div>
                            <div class="mb-3 mt-3">
                                <label for="materia" class="form-label">Hora:</label>
                                <input type="time" class="form-control" id="hora" placeholder="Ej. Calculo" name="hora"/>
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

export default virtual;