import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Materias } from './Admin/paginas/materias/Materias';


export const RutasApp = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/materias" component={Materias}/>
            </Switch>
        </Router>
    )
}
