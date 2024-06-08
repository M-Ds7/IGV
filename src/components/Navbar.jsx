import { NavLink } from 'react-router-dom';
import Log from '../images/Logo.png'
import { useState } from 'react';


const Navbar = () => {
    const [isAdmin, setIsAdmin] = useState(true)

    return (
        <>
            <nav className="navbar bg-body-tertiary ">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src={Log} alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />
                        IGV
                    </NavLink>
                    <ul className="nav justify-content-end">
                        {!isAdmin ? (
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link active text-black" aria-current="page" to="/alumn">
                                        Alumno
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-black" to="/admin">
                                        Administrador
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                            <li className="nav-item">
                                    <NavLink className="nav-link text-black" to="/secondary">
                                        Secundaria
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-black" to="/highschool">
                                        Preparatoria
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-black" to="/computing">
                                        Computación
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-black" to="/logout">
                                        <button className='btn btn-primary'>
                                        Cerrar Sesión
                                        </button>
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
