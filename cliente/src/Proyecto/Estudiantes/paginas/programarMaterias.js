import React from 'react'
import { Estudiantes } from '../Estudiantes'
const programarMaterias = () => {
    return (
        <>
        < Estudiantes />
           <div className="container-fluid bg-light" id="cue">
                <div className="row justify-content-center">
                    <div className="col-7">
                        <h2 className="mb-3 mt-3 text-muted">Programar Materias</h2>
                        <form >
                            <div class="mb-3 mt-3">
                                <label for="ambiente" className="form-label">Materia:</label>
                                <input type="text" name="materia" className="form-control" placeholder="Ej. metodologia de investigacion" />
                            </div>
                            <div class="mb-3">
                                <label for="piso" className="form-label">Sigla:</label>
                                <input type="text" name="sigla" className="form-control" placeholder="Ej. SIS-737" />
                            </div>
                            <div class="mb-3">
                                <label for="capacidad" className="form-label">Grupo:</label>
                                <input type="number" name="grupo" className="form-control" placeholder="Ej. 1"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Programar</button>
                        </form>
                    </div>
                </div>
            </div> 
        </>
            )
        }
        
        export default programarMaterias;