import './LoginPage.css'
import { useState } from 'react';
import Swal from 'sweetalert2';

function LoginPage() {

    const [username, setUsername] = useState('');

    function handleLoginClick(){
       if(username.trim() === ''){
        Swal.fire("Por favor ingrese un nombre valido");
       }
       else{
        Swal.fire(username)
       }
    }

    return (
        <div className="login-container">
            <h2>Ejercicio de prueba</h2>
            <input type="text"
                placeholder='Escriba un nombre de usuario'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleLoginClick}>Iniciar Sesion</button>
        </div>
    );
}

export default LoginPage;