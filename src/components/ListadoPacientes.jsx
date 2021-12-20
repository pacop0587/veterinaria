import Pacientes from "./Pacientes";

export const ListadoPacientes = () => {
    return (
        <div className="p-3 col-12 col-md-6">
            <h2 className="fw-bold fs-4 text-center">Listado Pacientes</h2>
            <p className="fs-5 mt-3 text-center">
                Administra tus <span className="text-info fw-bold ">Pacientes y citas</span>
            </p>
            <Pacientes />
            <Pacientes />
            <Pacientes />
            <Pacientes />
            <Pacientes />
            <Pacientes />
        </div>
    )
}

export default ListadoPacientes;
