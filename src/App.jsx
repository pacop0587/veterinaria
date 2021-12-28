import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
import styles from "./index.css"
//import bootstrapJS from "bootstrap/dist/js/bootstrap.min.js"


function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = (id) =>{
        const pacientesActualizados = pacientes.filter( paciente => 
       paciente.id !== id
     )
     setPacientes(pacientesActualizados);
  }
  
  //useEffect que detecta si hay algo en localstorage y evita que se borre
  useEffect( () =>{
      const obtenerLS = () =>{
          const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
          setPacientes(pacientesLS)
      }
      obtenerLS();
  },[])

  //Guardando los datos en localstorage
  useEffect( () =>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])

  return (
    <div className="container back-01">
      <Header />
      <div className="mt-5 d-flex justify-content-around row">
        <Formulario
            pacientes = {pacientes}
            setPacientes = {setPacientes}
            paciente = {paciente}
            setPaciente = {setPaciente}
        />
        <ListadoPacientes
            pacientes = {pacientes}
            setPaciente = {setPaciente}
            eliminarPaciente = {eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
