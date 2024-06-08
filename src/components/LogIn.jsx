import { useEffect } from "react"
import Admin from "../images/FormAdmin.png";


const LogIn = () => {
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
    <div className="container p-5">
        <div className="row">
            <div className="col-md-6 d-flex align-items-center justfy-content-center">
                <img src={Admin} alt="" className="img-fluid"/>
            </div>
            <div className="col-md-6">
                <form action="" className="needs-validation" noValidate>
                    <h2 className="">!Bienvenido¡</h2>
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">Nombre</label>
                        <div className="has-validation">
                            <input type="text" className="form-control" id="inputName" placeholder="Nombre del administrador" required/>
                            <div className="invalid-feedback">
                                Por favor, introduzca el nombre
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">Contraseña</label>
                        <div className="has-validation">
                            <input type="password" className="form-control" id="inputPassword" placeholder="Contraseña del administrador" required/>
                            <div className="invalid-feedback">
                                Por favor, introduzca la contraseña
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Ingresar</button>
                </form>
            </div>
        </div>
    </div>  
    </>
  )
}

export default LogIn
