import { useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Index from './Pages/Index'
import Alumn from './Pages/Alumn'
import Admin from './Pages/Admin'
import NotFound from './Pages/NotFound'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Index /> },
    { path: "/alumn", element: <Alumn /> },
    { path: "/admin", element: <Admin /> },
    { path: "/*", element: <NotFound /> }
  ])

  return routes
}

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
