import { useEffect } from "react"


const FormPagos = () => {
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
        <div className="col-md-12 aling-items-center justify-content-center">
            <h4>Realizar pago</h4>
            <div className="card">
                <div className="card-body">
                    <form action="" className="needs-validation" noValidate>
                        <div className="mb-3">
                            <label htmlFor="inputPago" className="form-label">Fecha de pago</label>
                            <div className="has-validation">
                                <input type="date" id="inputPago" className="form-control" required/>
                                <div className="invalid-feedback">
                                    Por favor, ingrese la fecha del pago
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPago" className="form-label">Fecha de pago</label>
                            <div className="has-validation">
                                <input type="date" id="inputPago" className="form-control" required/>
                                <div className="invalid-feedback">
                                    Por favor, ingrese la fecha del pago
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPago" className="form-label">Cantidad por pagar</label>
                            <div className="has-validation">
                                <input type="date" id="inputPago" className="form-control" required/>
                                <div className="invalid-feedback">
                                    Por favor, ingrese la fecha del pago
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPago" className="form-label">Fecha de pago</label>
                            <div className="has-validation">
                                <input type="date" id="inputPago" className="form-control" required/>
                                <div className="invalid-feedback">
                                    Por favor, ingrese la fecha del pago
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPago" className="form-label">Fecha de pago</label>
                            <div className="has-validation">
                                <input type="date" id="inputPago" className="form-control" required/>
                                <div className="invalid-feedback">
                                    Por favor, ingrese la fecha del pago
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPago" className="form-label">Fecha de pago</label>
                            <div className="has-validation">
                                <input type="date" id="inputPago" className="form-control" required/>
                                <div className="invalid-feedback">
                                    Por favor, ingrese la fecha del pago
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPago" className="form-label">Fecha de pago</label>
                            <div className="has-validation">
                                <input type="date" id="inputPago" className="form-control" required/>
                                <div className="invalid-feedback">
                                    Por favor, ingrese la fecha del pago
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPago" className="form-label">Fecha de pago</label>
                            <div className="has-validation">
                                <input type="date" id="inputPago" className="form-control" required/>
                                <div className="invalid-feedback">
                                    Por favor, ingrese la fecha del pago
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Pagar</button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default FormPagos
