import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { Administrador } from './Admin/Administrador';
import { Ambientes } from './Admin/ambientes/fisico/Ambientes';
import { Docentes } from './Docentes/Docentes';
import verHorarios from './Docentes/paginas/verHorarios';
import { Estudiantes } from './Estudiantes/Estudiantes';
import { home } from './home';
import { Virtual } from './Admin/ambientes/virtual/virtual';
import { registar } from './registar';
import Horarios from './Estudiantes/paginas/Horarios';
import { Materias } from './Admin/paginas/materias/Materias';
import mat from './Admin/ambientes/mat';
import { Materia } from './Estudiantes/paginas/programar/programarMaterias';
import VerProgramacion from './Estudiantes/paginas/VerProgramacion';
import Quejas from './Docentes/paginas/Quejas';
import { Registro } from './Admin/paginas/regDocentes/registroDocente';
import AsignarPrograma from './Admin/paginas/asignar/listaDocentes';
import { Asignar } from './Admin/paginas/asignar/asignarMaterias';
import { AmbienteASIG } from './Admin/paginas/asignarAmbientes/asignarAmbiente';


export const RutasApp = () => {
    return (
        <Router>
            <h3 >Sistema de Gestion de Horarios </h3>
            
              <div className="navbar-z">
                </div>
            <Switch>
               <Route exact path="/" component={home}/>
                <Route path="/Estudiantes" component={Estudiantes}/>
                <Route path="/Docentes" component={Docentes}/>
                <Route path="/Administrador" component={Administrador}/>
                <Route path="/verHorarios" component={verHorarios}/>
                <Route path="/Ambientes" component={Ambientes}/>
                <Route path="/listaDocentes" component={AsignarPrograma}/>
                <Route path="/virtual" component={Virtual}/>
                <Route path="/regDocente" component={Registro}/>
                <Route path="/Materias" component={Materias}/>
                <Route path="/registrar" component={registar}/>
                <Route path="/programarMaterias" component={Materia}/>
                <Route path="/Horarios" component={Horarios}/>
                <Route path="/Materias" component={Materias}/>
                <Route path="/mat" component={mat}/>
                <Route path="/verProgramacion" component={VerProgramacion}/>
                <Route path="/Quejas" component={Quejas}/>
                <Route path="/asignarMaterias" component={Asignar}/>
                <Route path="/asignarAmbientes" component={AmbienteASIG}/>
            </Switch>
        </Router>
    )
}
