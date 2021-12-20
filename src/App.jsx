import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"



function App() {

  return (
    <div className="container">
      <Header />
      <div className="mt-5 d-flex justify-content-around row">
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  )
}

export default App
