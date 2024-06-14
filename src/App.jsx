import { useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Index from './Pages/Index'
import Alumn from './Pages/Alumn'
import NotFound from './Pages/NotFound'
import LogInAdmin from './Pages/LongInAdmin'
import ViewAlums from './Pages/ViewAlums'
import AcountAlumn from './components/AcountAlumn'
import FormPagos from './components/FormPagos'
import FormModificar from './components/FormModificar'
import Documentos from './components/Documentos'
import { SistemaPagoProvider } from './components/Context/context'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Index /> },
    { path: "/alumn", element: <Alumn /> },
    { path: "/login", element: <LogInAdmin /> },
    { path:"/alums", element: <ViewAlums/> },
    { path: "/*", element: <NotFound /> },
    { path:"/acount/:id", element: <AcountAlumn/>},
    { path:"/pago", element:<FormPagos/> },
    { path:"/modificarAlum/:id", element: <FormModificar/> },
    { path:"/documentos", element:<Documentos/> }
  ])

  return routes
}



function App() {
  return (
    <>
    <SistemaPagoProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </SistemaPagoProvider>
    </>
  )
}

export default App
