import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { NavBar } from './Admin/componentes/NavBar';
import { Ambientes } from './Admin/paginas/ambientes/Ambientes';
import { Materias } from './Admin/paginas/materias/Materias';
import Docentes from './Docente/paginas/Docentes';
import verHorarios from './Docente/paginas/horarios/verHorarios';
import Estudiantes from './Estudiante/paginas/Estudiantes';
import { home } from './home';


export const RutasApp = () => {
    return (
        <Router>
            <NavBar/>
            <Switch>
               <Route exact path="/" component={home}/>
                <Route path="/materias" component={Materias}/>
                <Route path="/Estudiantes" component={Estudiantes}/>
                <Route path="/Docentes" component={Docentes}/>
                <Route path="/verHorarios" component={verHorarios}/>
                <Route path="/ambientes" component={Ambientes}/>
            </Switch>
        </Router>
    )
}
