import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./asignar.css";
import axios from "axios"; 
import { Administrador } from '../../Administrador';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function AsignarPrograma(){
    const [ usuarios, setUsuarios]= useState([]);
    const [ tablausuarios, setTablausuarios]= useState([]);
    const [busqueda, setBusqueda]= useState("");

    const peticion = async()=>{
        await axios.get("http://localhost:3000/regDocente")
        .then(response=>{
            setUsuarios(response.data);
            setTablausuarios(response.data);
        }).catch(error=>{
            console.error();
        })    
   }
   const handleChange=e=>{
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }
  const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=tablausuarios.filter((elemento)=>{
      if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || elemento.company.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return elemento;
      }
    });
    setUsuarios(resultadosBusqueda);
  } 
useEffect(() => {
   peticion();
},[])
    return (
        <div>
            < Administrador /> 
            <div className="asig">
        <div className="containerInput">
        <input 
         className="form-control inputBuscar"
         value={busqueda}
         placeholder="busqueda por nombre"
         onChange={handleChange}
        />
        <button className="btn btn-succcess">
        <FontAwesomeIcon icon={faSearch}/>
        </button>
        </div>
       <div className="table-responsive">
         <table className="table table-sm table-bordered">
          <thead className="table-primary">
           <tr>
             <th>Apellidos</th> 
             <th>Nombres</th>
             <th>Horas</th>
             <th>Accion</th>
            </tr> 
          </thead>
          <tbody>
                <tr>
                    <td>Lopes Quentasi</td> 
                    <td>Jesus</td>
                    <td>24hrs</td>
                    <td>
                       <Link to="/asignarMaterias">
                        <button className="btn btn-primary">Asignar</button>
                        </Link>
                    </td>
                </tr> 
          </tbody>
          <tbody>
              {usuarios &&
              usuarios.map((usuario)=>(
                <tr key={usuario.nombres}>
                    <td>{usuario.apellidos}</td> 
                    <td>{usuario.nombres}</td>
                    <td>{usuario.horas}</td>
                    <td>
                       <Link to="/asignarMaterias">
                        <button className="btn btn-primary">Asignar</button>
                        </Link>
                    </td>
                </tr> 
              ))}
          </tbody>
              
         </table> 
           
        </div> 
    </div>
             </div>
    )
}

export default AsignarPrograma;
