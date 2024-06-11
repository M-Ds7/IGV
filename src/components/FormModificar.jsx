import { useState } from "react"
import Layout from "./Layout"
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const FormModificar = () => {
  const { id } = useParams();
  const [dataAlumn, setDataAlumn] = useState({
    nombre:" ",
    apellido:" ",
    email: " ",
    matricula: " ",
    fechaNacimientos: null,
    telefono: " ",
    direccion: " "
  });

  useEffect(() => {
    const obtenerDatosAlumno = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/alumno/${id}`);
        setDataAlumn(response.data);
      } catch (error) {
        console.error('Error al obtener datos del alumno', error);
      }
    };

    obtenerDatosAlumno();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setDataAlumn(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/api/v1/alumno/${dataAlumn.id}`, dataAlumn)
      .then(response => {
        console.log('Datos modificados correctamente', response.data);

      })
      .catch(error => {
        console.error('Error al modificar datos del alumno', error);
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
      <Layout>
        <div className="card">
          <div className="card-body">
            <div className="card-title"></div>
            <form className="needs-validation" noValidate onSubmit={handleSubmit} >
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="inputName" className="form-label">Nombre del alumno</label>
                  <div className="has-validation">
                    <input type="text" id="inputName" className="form-control" placeholder="Nombre del alumno" required value={dataAlumn.nombre} onChange={handleChange}/>
                    <div className="invalid-feedback">
                      Por favor, introduce el nombre del alumno.
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputApellido" className="form-label">Apellidos</label>
                  <div className="has-validation">
                    <input type="text" id="inputApellido" className="form-control" placeholder="Apellidos del alumno" required value={dataAlumn.apellido} onChange={handleChange}/>
                    <div className="invalid-feedback">
                      Por favor, introduce los apellidos del alumno.
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="inputfechaNacimiento" className="form-label">Fecha de nacimiento</label>
                <div className="has-validation">
                  <input type="date" id="inputfechaNacimiento" className="form-control" placeholder="Fecha de nacimiento del alumno" required value={dataAlumn.fechaNacimientos} onChange={handleChange} />
                  <div className="invalid-feedback">
                    Por favor, introduce el fecha de nacimeinto del alumno
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="inputMatricula" className="form-label">Matrícula</label>
                  <input type="number" id="inputMatricula" className="form-control" placeholder="Matrícula del alumno"  value={dataAlumn.matricula} onChange={handleChange}/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPhoneNumber" className="form-label">Teléfono</label>
                  <div className="has-validation">
                    <input type="number" id="inputPhoneNumber" className="form-control" placeholder="teléfono del alumno" required value={dataAlumn.telefono} onChange={handleChange}/>
                    <div className="invalid-feedback">
                      Por favor, introduce el numero de telefono del alumno
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Email</label>
                <div className="has-validation">
                  <input type="email" id="inputEmail" className="form-control" placeholder="Email del alumno" required value={dataAlumn.email} onChange={handleChange}/>
                  <div className="invalid-feedback">
                    Por favor, introduce el email del alumno
                  </div>
                </div>
              </div>
              {/* <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="inputSchooling" className="form-label">Escolaridad</label>
                  <div className="has-validation">
                    <input type="text" id="inputSchooling" className="form-control" placeholder="Escolaridad del alumno" required value={}/>
                    <div className="invalid-feedback">
                      Por favor, introduce la escolaridad del alumno
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCurp" className="form-label">Curp</label>
                  <div className="has-validation">
                    <input type="text" id="inputCurp" className="form-control" placeholder="curp deñ alumno" required />
                    <div className="invalid-feedback">
                      Por favor, introduce la curp del alumno
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="mb-3">
                <label htmlFor="inputAddress" className="form-label">Domicilio</label>
                <div className="has-validation">
                  <input type="text" id="inputAddress" className="form-control" placeholder="Direccion del alumno" required value={dataAlumn.direccion} onChange={handleChange}/>
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
      </Layout>
    </>
  )
}

export default FormModificar
