import HabitosEstudio from '../images/Habitos-de-Estudio.png'
import Layout from "../components/Layout"

const Index = () => {
  return (
    <>
      <Layout>
        <div className="container d-flex align-items-center justify-content-center" style={{minHeight: '70vh'}}>
          <div className="row w-100">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <h2 className="text-center top-50 start-0 d-flex align-items-center justify-content-center">
                La educación es la
                preparacion a la 
                vida completa
              </h2>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img src={ HabitosEstudio } alt="images sobre estudio" className='img-fluid'/>
            </div>
          </div>
        </div> 
      </Layout>
    </>
  )
}

export default Index
