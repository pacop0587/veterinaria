
const Pacientes = ({paciente, setPaciente}) => {
    const { nombre, propietario, email, fecha, sintomas } = paciente;
    return (
        <div className="bg-light shadow px-5 py-5 my-3 rounded">
            <p className="fw-bold">Nombre: <span className="fw-normal">{nombre}</span></p>
            <p className="fw-bold">Propietario: <span className="fw-normal">{propietario}</span></p>
            <p className="fw-bold">E-mail: <span className="fw-normal">{email}</span></p>
            <p className="fw-bold">Fecha Alta: <span className="fw-normal">{fecha}</span></p>
            <p className="fw-bold">Sintomas: <span className="fw-normal">{sintomas}</span></p>
            <div className="d-flex justify-content-between my-2">
                <button type="button" className="btn btn-primary rounded" onClick={ () => setPaciente(paciente)}>
                    EDITAR
                </button>
                <button type="button" className="btn btn-danger rounded">
                    ELIMNINAR
                </button>
            </div>
        </div>
    )
}

export default Pacientes
