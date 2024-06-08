import { useEffect } from 'react'
import Alumn from '../images/FormAlum.jpeg'

function FormAlum() {

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
            <form action="" className="needs-validation" noValidate>
              <div className="mb-3">
                <label htmlFor="inputName" className="form-label">Nombre del alumno</label>
                <div className="has-validation">
                  <input type="text" id="inputName" className="form-control" placeholder="Nombre del alumno" required />
                  <div className="invalid-feedback">
                    Por favor, introduce el nombre del alumno.
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="inputMatricula" className="form-label">Matrícula</label>
                  <input type="number" id="inputMatricula" className="form-control" placeholder="Matrícula del alumno" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPhoneNumber" className="form-label">Teléfono</label>
                  <div className="has-validation">
                    <input type="number" id="inputPhoneNumber" className="form-control" placeholder="teléfono del alumno" required />
                    <div className="invalid-feedback">
                      Por favor, introduce el numero de telefono del alumno
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Email</label>
                <div className="has-validation">
                  <input type="email" id="inputEmail" className="form-control" placeholder="Email del alumno" required/>
                  <div className="invalid-feedback">
                    Por favor, introduce el email del alumno
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="inputSchooling" className="form-label">Escolaridad</label>
                  <div className="has-validation">
                  <input type="text" id="inputSchooling" className="form-control" placeholder="Escolaridad del alumno" required/>
                  <div className="invalid-feedback">
                    Por favor, introduce la escolaridad del alumno
                  </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCurp" className="form-label">Curp</label>
                  <div className="has-validation">
                  <input type="text" id="inputCurp" className="form-control" placeholder="curp deñ alumno" required/>
                  <div className="invalid-feedback">
                    Por favor, introduce la curp del alumno
                  </div>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="inputAddress" className="form-label">Domicilio</label>
                <div className="has-validation">
                  <input type="text" id="inputAddress" className="form-control" placeholder="Direccion del alumno" required/>
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
