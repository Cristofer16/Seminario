import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { Administrador } from './Admin/Administrador';
import { Ambientes } from './Admin/ambientes/fisico/Ambientes';
import listaDocentes from './Admin/paginas/listaDocentes';
import { Docentes } from './Docentes/Docentes';
import verHorarios from './Docentes/paginas/verHorarios';
import { Estudiantes } from './Estudiantes/Estudiantes';
import { home } from './home';
import virtual from './Admin/ambientes/virtual';
import regDocente from './Admin/paginas/regDocentes/regDocente';
import { login } from './login';
import { registar } from './registar';
import asignarMaterias from './Admin/paginas/programarMaterias';
import programarMaterias from './Estudiantes/paginas/programarMaterias';
import Horarios from './Estudiantes/paginas/Horarios';
import { Materias } from './Admin/paginas/materias/Materias';
import mat from './Admin/ambientes/mat';



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
                <Route path="/asignarMaterias" component={asignarMaterias}/>
                <Route path="/listaDocentes" component={listaDocentes}/>
                <Route path="/virtual" component={virtual}/>
                <Route path="/regDocente" component={regDocente}/>
                <Route path="/Materias" component={Materias}/>
                <Route path="/login" component={login}/>
                <Route path="/registrar" component={registar}/>
                <Route path="/programarMaterias" component={programarMaterias}/>
                <Route path="/Horarios" component={Horarios}/>
                <Route path="/Materias" component={Materias}/>
                <Route path="/mat" component={mat}/>
            </Switch>
        </Router>
    )
}
