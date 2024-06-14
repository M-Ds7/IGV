import { useContext, useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { SistemPagoCardContext } from './Context/context';

const CardAlumn = () => {
    const { token } = useContext(SistemPagoCardContext)
    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        const fechData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/v1/alumno',{
                    headers:{
                        'Authorization': `Bearer ${token}`
                    }
                })
                setAlumnos(response.data)
            } catch (error) {
                console.error('Error al obtener alumno', error);
            }
        }
        if (token) {
            fechData()
        }
    }, [token])
    return (
        <>
            <div className="container">
                <div className="row">
                    {alumnos.map(alumno => (
                        <div className="col-md-4" key={alumno._id}>
                            <div className="card" style={{ width: '18rem' }}>
                                <div className="card-body">
                                    <p className="card-title"> {alumno.nombre} {alumno.apellido} </p>
                                    <p className="card-text"> {alumno.matricula} </p>
                                    <Link to={`/acount/${alumno._id}`} className="btn btn-primary">Ver Alumno</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CardAlumn
