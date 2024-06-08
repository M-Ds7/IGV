

const AcountAlumn = () => {
  return (
    <>
      <div className="card w-100 mb-3">
        <div className="card-body">
          <h2 className="card-title">López Cárdenas Daniel</h2>
          <div className="row p-4">
            <div className="col-md-4">
              <p>Curp:</p>
              <h5 className="border border-black rounded">Curp</h5>
            </div>
            <div className="col-md-4">
              <p>Matricula</p>
              <h5 className="border border-black rounded">223221</h5>
            </div>
            <div className="col-md-4">
              <p>Email</p>
              <h5 className="border border-black rounded">223221@uptapachula.edu.mx</h5>
            </div>
            <div className="col-md-4">
              <p>Direccion</p>
              <h4 className="border border-black rounded">Villa la rosa, tapachula</h4>
            </div>
            <div className="col-md-4">
              <p>Telefono</p>
              <h4 className="border border-black rounded">9612703005</h4>
            </div>
            <div className="col-md-4">
              <p>Escolaridad</p>
              <h4 className="border border-black rounded">secundaria</h4>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4 d-flex justify-content-center mb-3">
                <button className="btn btn-primary ">Modificar dotos</button>
              </div>
              <div className="col-md-4 d-flex justify-content-center mb-3">
                <button className="btn btn-primary">realizar pago</button>
              </div>
              <div className="col-md-4 d-flex justify-content-center mb-3">
                <button className="btn btn-primary">Descargar comprobantes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="overflow-auto">

              <table className="table table-stripep">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Fecha de pago</th>
                    <th scope="col">estado</th>
                    <th scope="col">Descargar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>08/04/2024</td>
                    <td>Pagado</td>
                    <td><button type="button" className="btn btn-success">Descargar</button></td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>08/04/2024</td>
                    <td>Pagado</td>
                    <td><button type="button" className="btn btn-success">Descargar</button></td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>08/04/2024</td>
                    <td>Pagado</td>
                    <td><button type="button" className="btn btn-success">Descargar</button></td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>08/04/2024</td>
                    <td>Pagado</td>
                    <td><button type="button" className="btn btn-success">Descargar</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-6">
            <table className="table table-scrol">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Fecha de pago</th>
                  <th scope="col">estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>08/04/2024</td>
                  <td>deber</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>08/04/2024</td>
                  <td>deber</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>08/04/2024</td>
                  <td>deber</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>08/04/2024</td>
                  <td>deber</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default AcountAlumn
