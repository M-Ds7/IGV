import { useEffect, useState } from "react"
import Admin from "../images/FormAdmin.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/api/v1/auth/login', {
                email,
                password,
            })
            localStorage.setItem('authToken', response.data.token)
            navigate('/alums');
        } catch (error) {
            setError('Datos incorrectos')
        }
    }

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
                        <img src={Admin} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <form action="" className="needs-validation" noValidate onSubmit={handleSubmit}>
                            <h2 className="">!Bienvenido¡</h2>
                            {/* <div className="row mb-3"> */}
                                <div className="mb-3">
                                    <label htmlFor="inputEmail" className="form-label">Email</label>
                                    <div className="has-validation">
                                        <input type="email" className="form-control" id="inputEmail" placeholder="Email del administrador" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                        <div className="invalid-feedback">
                                            Por favor, introduzca el nombre
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-md-6">
                                    <label htmlFor="inputApellidos" className="form-label">Apellidos</label>
                                    <div className="has-validation">
                                        <input type="text" className="form-control" id="inputApellidos" placeholder="Apellidos del administrador" required value={apellidos} onChange={(e) => setApellido(e.target.value)}/>
                                        <div className="invalid-feedback">
                                            Por favor, introduzca el nombre
                                        </div>
                                    </div>
                                </div> */}
                            {/* </div> */}
                            {/* <div className="mb-3">
                                <label htmlFor="inputEmail" className="form-label">Email</label>
                                <div className="has-validation">
                                    <input type="email" className="form-control" id="inputEmail" placeholder="Email del administrador" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    <div className="invalid-feedback"> 
                                        Por favor, introduzca su email
                                    </div>
                                </div>
                            </div> */}
                            <div className="mb-3">
                                <label htmlFor="inputPassword" className="form-label">Contraseña</label>
                                <div className="has-validation">
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Contraseña del administrador" required value={password} onChange={(e) => setPassword(e.target.value)}/>
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
