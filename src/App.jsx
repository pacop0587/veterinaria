import { useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"



function App() {

  const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container">
      <Header />
      <div className="mt-5 d-flex justify-content-around row">
        <Formulario
            pacientes = {pacientes}
            setPacientes = {setPacientes}
        />
        <ListadoPacientes
            pacientes = {pacientes}
        />
      </div>
    </div>
  )
}

export default App
