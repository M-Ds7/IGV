import { useEffect, useState } from 'react'
import Alumn from '../images/FormAlum.jpeg'
import axios from 'axios'

function FormAlum() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('')
  const [matricula, setMatricula] = useState('')
  const [fechaNacimiento, setFechaNacimiento] = useState('')
  const [telefono, setTelefono] = useState('')
  const [direccion, setDireccion] = useState('')
  const [curp, setCurp] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const alumnoData = { nombre, apellido, email, matricula, fechaNacimiento, telefono, direccion, curp };

    axios.post(' http://localhost:3000/api/v1/alumno', alumnoData)
      .then(response => {
        console.log('Respuesta:', response);
      })
      .catch(error => {
        console.error('Error', error);
      });
  };

  useEffect(() => {
    const forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms).forEach((form) => {
      form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  }, [])


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex  align-items-center justify-content-center">
            <img src={Alumn} alt="Imagen de alumnos" className='img-fluid' />
          </div>
          <div className="col-md-6">
            <form action="" className="needs-validation" noValidate onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="inputName" className="form-label">Nombre del alumno</label>
                  <div className="has-validation">
                    <input type="text" id="inputName" className="form-control" placeholder="Nombre del alumno" required value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    <div className="invalid-feedback">
                      Por favor, introduce el nombre del alumno.
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputApellido" className="form-label">Apellidos</label>
                  <div className="has-validation">
                    <input type="text" id="inputApellido" className="form-control" placeholder="Apellidos del alumno" required value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    <div className="invalid-feedback">
                      Por favor, introduce los apellidos del alumno.
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="inputfechaNacimiento" className="form-label">Fecha de nacimiento</label>
                <div className="has-validation">
                  <input type="date" id="inputfechaNacimiento" className="form-control" placeholder="Fecha de nacimiento del alumno" required value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />
                  <div className="invalid-feedback">
                    Por favor, introduce el fecha de nacimeinto del alumno
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="inputMatricula" className="form-label">Matrícula</label>
                  <input type="number" id="inputMatricula" className="form-control" placeholder="Matrícula del alumno" value={matricula} onChange={(e) => setMatricula(e.target.value)} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPhoneNumber" className="form-label">Teléfono</label>
                  <div className="has-validation">
                    <input type="number" id="inputPhoneNumber" className="form-control" placeholder="teléfono del alumno" required value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    <div className="invalid-feedback">
                      Por favor, introduce el numero de telefono del alumno
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Email</label>
                <div className="has-validation">
                  <input type="email" id="inputEmail" className="form-control" placeholder="Email del alumno" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  <div className="invalid-feedback">
                    Por favor, introduce el email del alumno
                  </div>
                </div>
              </div>
              {/* <div className="row mb-3"> */}
                {/* <div className="col-md-6">
                  <label htmlFor="inputSchooling" className="form-label">Escolaridad</label>
                  <div className="has-validation">
                    <input type="text" id="inputSchooling" className="form-control" placeholder="Escolaridad del alumno" required value={}/>
                    <div className="invalid-feedback">
                      Por favor, introduce la escolaridad del alumno
                    </div>
                  </div>
                </div> */}
                <div className="mb-3">
                  <label htmlFor="inputCurp" className="form-label">Curp</label>
                  <div className="has-validation">
                    <input type="text" id="inputCurp" className="form-control" placeholder="curp deñ alumno" required value={curp} onChange={(e) => setCurp(e.target.value)}/>
                    <div className="invalid-feedback">
                      Por favor, introduce la curp del alumno
                    </div>
                  </div>
                </div>
             {/*  </div> */}
              <div className="mb-3">
                <label htmlFor="inputAddress" className="form-label">Domicilio</label>
                <div className="has-validation">
                  <input type="text" id="inputAddress" className="form-control" placeholder="Direccion del alumno" required value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                  <div className="invalid-feedback">
                    Por favor introduce el domicilio del alumno
                  </div>
                </div>
              </div>
              <button type='submit' className='btn btn-primary'>
                Dar de alta
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormAlum
