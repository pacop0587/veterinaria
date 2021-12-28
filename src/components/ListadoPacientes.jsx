import Pacientes from "./Pacientes";

export const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
    return (
        <div className="p-3 col-12 col-md-6">
            {pacientes && pacientes.length ? (             
                <>
                    <h2 className="fw-bold fs-4 text-center">Listado Pacientes</h2>
                    <p className="fs-5 mt-3 text-center">
                        Administra tus <span className="text-info fw-bold ">Pacientes y citas</span>
                    </p>
                    {
                        pacientes.map((paciente) =>{
                            return (
                                <Pacientes
                                    key = {paciente.id}
                                    paciente = {paciente}
                                    setPaciente = {setPaciente}
                                    eliminarPaciente = {eliminarPaciente}
                                />
                            )
                        })
                    } 
                </>
            ) : (
                <>
                    <h2 className="fw-bold fs-4 text-center">Listado Pacientes</h2>
                    <p className="fs-5 mt-3 text-center">
                        No hay pacientes <span className="text-info fw-bold ">Agregalos Aqui</span>
                    </p>
                </>
            )}
        </div>
    )
}

export default ListadoPacientes;
