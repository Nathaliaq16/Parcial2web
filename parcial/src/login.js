import React from "react";
import './login.css';

export default function Login() {

    const [user, setUser] = React.useState();
    const [password, setPassword] = React.useState();

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
            .then(data => data.status === 'success' ? window.location.href = '/cafes' : alert('Usuario o contraseña incorrectos'))
    }

    // return a component for a login form
    return (
    <div className="container">

        <div className="row">
            <div className="col-sm">
                <h1 id="titulo">El aroma mágico</h1>
                <div><img id="imagenInicio" src='images/imagen1.png' alt='Granos de cafes'/></div>
                
                <form id="formCompleto">
                <p>Inicio de sesión</p>
                    <div id='formDentro'>
                    
                    <div className="form-group">
                        <p>Nombre de usuario </p>
                        <input className="inputLogin" type="text" id="login" onChange={data => setUser(data.target.value)} />
                    </div>
                    <div className="form-group">
                        <p>Contraseña </p>
                        <input className="inputLogin" type="password"  onChange={data => setPassword(data.target.value)} />
                    </div>
                    <button id="aceptar" className="boton" type="submit"onClick={handleSubmit}>Ingresar</button>
                    <button id="cancelar" className="boton" type="submit">Cancelar</button>
                </div>

                </form>
            </div>
        </div>
    </div>
    )
}