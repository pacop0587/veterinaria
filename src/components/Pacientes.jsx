
const Pacientes = ({paciente}) => {
    const { nombre, propietario, email, fecha, sintomas } = paciente;
    return (
        <div className="bg-light shadow px-5 py-5 my-3 rounded">
            <p className="fw-bold">Nombre: <span className="fw-normal">{nombre}</span></p>
            <p className="fw-bold">Propietario: <span className="fw-normal">{propietario}</span></p>
            <p className="fw-bold">E-mail: <span className="fw-normal">{email}</span></p>
            <p className="fw-bold">Fecha Alta: <span className="fw-normal">{fecha}</span></p>
            <p className="fw-bold">Sintomas: <span className="fw-normal">{sintomas}</span></p>
        </div>
    )
}

export default Pacientes
