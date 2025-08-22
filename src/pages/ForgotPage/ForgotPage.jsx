import { Link } from "react-router-dom";
import './ForgotPage.css'

function Forgot() {
    return(
    <div>
        <h1>OLVIDE LA CONTRASEÑA</h1>
        <Link to="/">
            <button>VOLVER AL LOGIN</button>
        </Link>
        <div class="form-card">
        <h3 class="text-center mb-4">Recuperar Contraseña</h3>
        <form id="recuperarForm">
            <div class="mb-3">
                <label for="name" class="form-label">Tu nombre de usuario</label>
                <input type="text" class="form-control" id="name" name="name" placeholder="Nombre de usuario"
                    required />
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Correo</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="correo@ejemplo.com"
                    required />
            </div>


            <input type="hidden" id="token" name="token" />

            <div class="d-grid">
                <button type="submit" class="btn btn-primary">Enviar al correo</button>
                <a href="../index.html" class="btn btn-outline-secondary mt-2">Volver al login</a>
            </div>
        </form>
    </div>
    </div>

    );
}

export default Forgot;