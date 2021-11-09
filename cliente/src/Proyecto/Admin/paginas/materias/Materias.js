import React from "react";
import "./materias.css"
export const Materias = () => {
    return (
        <>
            <div>
                
            </div>
            <div className="container-fluid bg-light" id="cue">
                <div class="row justify-content-center">
                    <div className="col-7">
                        <h2 className="mb-3 mt-3 text-muted">Materias</h2>
                        <form action="">
                            <div class="mb-3 mt-3">
                                <label for="materia" class="form-label">Nombre de la materia:</label>
                                <input type="text" class="form-control" id="materia" placeholder="Ej. Claculo" name="materia"/>
                            </div>
                            <div class="mb-3">
                                <label for="hora" class="form-label">Cargas horarias en la semana:</label>
                                <input type="number" class="form-control" id="hora" placeholder="Ej. 6" name="hora"/>
                            </div>
                            <button type="submit" class="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}