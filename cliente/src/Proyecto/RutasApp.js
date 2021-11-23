import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { Administrador } from './Admin/Administrador';
import { Ambientes } from './Admin/ambientes/Ambientes';
import listaDocentes from './Admin/paginas/listaDocentes';
import programarMaterias from './Admin/paginas/programarMaterias';
import { Docentes } from './Docentes/Docentes';
import verHorarios from './Docentes/paginas/verHorarios';
import { Estudiantes } from './Estudiantes/Estudiantes';

import { home } from './home';

import virtual from './Admin/ambientes/virtual';
import regDocente from './Admin/paginas/regDocentes/regDocente';



export const RutasApp = () => {
    return (
        <Router>
            <h3>Sistema de Gestion de Horarios </h3>
            
              <div className="navbar-z">
                </div>
            <Switch>
               <Route exact path="/" component={home}/>
                <Route path="/Estudiantes" component={Estudiantes}/>
                <Route path="/Docentes" component={Docentes}/>
                <Route path="/Administrador" component={Administrador}/>
                <Route path="/verHorarios" component={verHorarios}/>
                <Route path="/Ambientes" component={Ambientes}/>
                <Route path="/programarMaterias" component={programarMaterias}/>
                <Route path="/listaDocentes" component={listaDocentes}/>
                <Route path="/virtual" component={virtual}/>
                <Route path="/regDocente" component={regDocente}/>
            </Switch>
        </Router>
    )
}
