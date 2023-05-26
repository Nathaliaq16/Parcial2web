import './login.css';
import React, { useState } from 'react';


export default function Login() {

    const [user, setUser] = React.useState();
    const [password, setPassword] = React.useState();
    const [errorIngreso, setError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        const datos = {
            "login": user,
            "password": password
        };

        fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        })
    
            .then(response => response.json())
            .then(data => data.status === 'success' ? window.location.href = '/cafes' : setError("Error de autenticación. Revise sus credenciales"))
    }

    // return a component for a login form
    return (
    <div className="container">

        <div className="row">
            <div className="col-sm">
                <h1 id="titulo">El aroma mágico</h1>
                <hr class='linea'></hr>
                <div><img id="imagenInicio" src='images/imagen1.png' alt='Granos de cafes'/></div>
                <hr class='linea'></hr>
                <form id="formCompleto">
                <p>Inicio de sesión</p>
                    <div id='formDentro'>
                    
                    <div className="form-group">
                        <p id="nombre">Nombre de usuario </p>
                        <input className="inputLogin" type="text" id="login" onChange={data => setUser(data.target.value)} />
                    </div>
                    <div className="form-group">
                        <p id="contraseña">Contraseña </p>
                        <input className="inputLogin" type="password"  onChange={data => setPassword(data.target.value)} />
                    </div>
                    <button id="aceptar" className="boton" type="submit"onClick={handleSubmit}>Ingresar</button>
                    <button id="cancelar" className="boton" type="button">Cancelar</button>
                    <p id='error'>{errorIngreso}</p>
                </div>

                </form>
            </div>
        </div>
        <div className="divAbajo"><p className="abajo">Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico</p></div>
        
    </div>
    )
}