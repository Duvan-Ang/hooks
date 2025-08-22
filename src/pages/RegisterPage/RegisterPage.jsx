import { Link } from "react-router-dom";
import './RegisterPage.css'

function Register() {
    return(
    <div>
        <h1>REGISTRO</h1>
        <Link to="/">
            <button>VOLVER AL LOGIN</button>
        </Link>
        <div class="form-card">
        <h3 class="text-center mb-4">Registro de Usuario</h3>
        <form>
            <div class="mb-3">
                <label class="form-label">Nombre y apellido</label>
                <input type="text" class="form-control"/>
            </div>
            <div class="mb-3">
                <label class="form-label">Usuario</label>
                <input type="text" class="form-control"/>
            </div>
            <div class="mb-3">
                <label class="form-label">Fecha de nacimiento</label>
                <input type="date" class="form-control"/>
            </div>
            <div class="mb-3">
                <label class="form-label">Escriba una contraseña</label>
                <input type="password" class="form-control"/>
            </div>
            <div class="mb-3">
                <label class="form-label">Repita la contraseña</label>
                <input type="password" class="form-control"/>
            </div>
            <div class="mb-3">
                <label class="form-label">Correo</label>
                <input type="email" class="form-control"/>
            </div>
            <div class="mb-3">
                <label class="form-label">Teléfono</label>
                <input type="tel" class="form-control"/>
            </div>
            <div class="mb-4">
                <label class="form-label">Pais</label>
                <input type="text" class="form-control"/>
            </div>
            <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary">Registrarse</button>
                <a href="../index.html" class="btn btn-outline-secondary">Volver</a>
            </div>
        </form>
    </div>
    </div>
    );
}

export default Register;