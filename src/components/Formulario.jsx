import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({pacientes, setPacientes}) => {
    //Hooks States
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false)

    //Validar datos de fomulario y guardarlos
    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            console.log('Hay al menos un campo vacio')
            setError(true)
            return;
        }
        
        //Crear objeto paciente para guardar los datos
        const objectPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }

        setPacientes([...pacientes, objectPaciente]);

        setError(false);
        
        //Restableciendo los valores para vaciar el formulario
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');

    }

    return (
        <div className="p-3 col-12 col-md-6">
            <h2 className="fw-bold fs-4 text-center">Seguimiento Pacientes</h2>
            <p className="fs-5 mt-3 text-center">Añade Pacientes y <span className="text-info fw-bold ">Administralos</span></p>
            <form action="" className="bg-light mt-3 rounded p-3 shadow" onSubmit = {handleSubmit}>
                {
                    error && 
                    <Error 
                        mensaje='Todos los campos son obligatorios' 
                    />
                }
                <div className="mb-4">
                    <label htmlFor="mascota" className="form-label">Nombre Mascota</label>
                    <input type="text" class="form-control mt-1" id="mascota" placeholder="Nombre de la mascota" value={nombre} onChange={ (e) => setNombre(e.target.value) } />
                </div>
                <div className="mb-4">
                    <label htmlFor="propietario" className="form-label">Nombre Propietario</label>
                    <input type="text" class="form-control mt-1" id="propietario" placeholder="Nombre del propietario" value={propietario} onChange={ (e) => setPropietario(e.target.value) } />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input type="email" class="form-control mt-1" id="email" placeholder="Email Contacto Propietario" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div className="mb-4">
                    <label htmlFor="alta" className="form-label">Alta</label>
                    <input type="date" class="form-control mt-1" id="alta" value={fecha} onChange={ (e) => setFecha(e.target.value) } />
                </div>
                <div className="mb-4">
                    <label htmlFor="sintomas" className="form-label">Sintomas</label>
                    <textarea className="form-control" name="" id="sintomas" placeholder="Describe los sintomas" value={sintomas} onChange={ (e) => setSintomas(e.target.value) } />
                </div>
                <input type="submit" className="btn  btn-info p-3 fw-bold text-light" value="Agregar Paciente"/>
            </form>
        </div>
    )
}

export default Formulario


