# Proyecto React - Curso de Enseñanza

Este es un proyecto base en **React** creado con **CRA => Create React App**, que incluye:

- [Bootstrap](https://getbootstrap.com/) para estilos rápidos y responsive.
- [SweetAlert2](https://sweetalert2.github.io/) para alertas y confirmaciones atractivas.

---

## Instalación y ejecución

1. **Crear el proyecto con Create React App**
    
    ```bash
    npx create-react-app nombre-del-proyecto
    ```

2. **Ingresar a la carpeta del proyecto**
    
    ```bash
    cd nombre-del-proyecto
    ```

3. **Ejecutar el proyecto en modo desarrollo**
    
    ```bash
    npm start
    ```

---

## Dependencias instaladas

**Bootstrap**
```bash
npm install bootstrap
```
**SweetAlert2**
```bash
npm install SweetAlert2
```
**React Router Dom**
```bash
npm install react-router-dom
```
**Firebase**
```bash
npm install firebase
npm install react-firebase-hooks
npm install -g firebase-tools
```
**React**
```bash
npm install react-bootstrap
npm install react-icons
```

---

## Tecnologías Utilizadas

| Tecnología              | Logo                                                                 | Descripción                                                                                   |
|------------------------|----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| **HTML5**              | ![HTML5](https://img.icons8.com/color/48/html-5--v1.png)              | Lenguaje de marcado usado para estructurar las páginas web.                                  |
| **CSS3**               | ![CSS3](https://img.icons8.com/color/48/css3.png)                     | Hojas de estilo para personalizar la apariencia de la web.                                   |
| **Bootstrap 5**        | ![Bootstrap](https://img.icons8.com/color/48/bootstrap.png)           | Framework CSS para facilitar el diseño responsive y atractivo.                               |
| **JavaScript**         | ![JS](https://img.icons8.com/color/48/javascript--v1.png)             | Lenguaje de programación para la lógica y la interactividad en la web.                       |
| **React**              | ![React](https://img.icons8.com/color/48/react-native.png)            | Biblioteca de JavaScript para construir interfaces de usuario basadas en componentes.        |
| **Create React App**   | ![CRA](https://img.icons8.com/?size=48&id=t9R7H4l3cOyb&format=png)     | Herramienta oficial para crear proyectos React con configuración inicial lista para usar.    |
| **SweetAlert2**        | ![SweetAlert2](https://img.icons8.com/external-flat-icons-inmotus-design/48/external-alert-user-interface-flat-icons-inmotus-design.png) | Librería JS para mostrar alertas modernas, elegantes y personalizadas. |

---

## Estructura del Proyecto

```plaintext
/
├── public/
│   ├── index.html                          # Plantilla HTML principal de la app
│   ├── favicon.ico                         # Ícono de la 
│   ├── logo192.png                         # Icono de React
│   ├── logo512.png                         # Icono de React
│   ├── manifest.json                       # Describe los metodos de mi aplicacion
│   ├── robots.txt                          # Indica los robots de busqueda
├── src/
│   ├── pages                               # Páginas completas (vistas o interfaces completas)
│   │       ├──LoginPage
│   │          ├── LoginPage.jsx            # Login de la pagina
│   │          ├── LoginPage.css            # Estilos del login de la pagina
│   │       ├──RegisterPage
│   │          ├── RegisterPage.jsx         # Pagina de registro
│   │          ├── RegisterPage.css         # Estilos de la pagina de registro
│   │       ├──ForgotPage
│   │          ├── ForgotPage.jsx           # Pagina de recuperacion de contraseña
│   │          ├── ForgotPage.css           # Estilos de la pagina de recuperacion de contraseña
│   │       ├──AuxiliaresPage
│   │          ├── AuxiliaresPage.jsx       # Pagina de auxiliares
│   │          ├── AuxiliaresPage.css       # Estilos de la pagina auxiliar
│   │       ├──DashboardPage
│   │          ├── DashboardPage.jsx        # Pagina principal
│   │          ├── DashboardPage.css        # Estilos de la pagina principal
│   │       ├──ResetPasswordPage
│   │          ├── ResetPasswordPage.jsx    # Pagina de reinicio de la contraseña
│   │          ├── ResetPasswordPage.css    # Estilos de la pagina reinicio de la contraseña
│   │       ├──components
│   │          ├── NotFoundPage.jsx         # Aviso de que la pagina no fue encontrada
│   │          ├── ProtectedRoute.jsx       # Proteccion para la ruta
│   │          ├── Spinner.jsx              # Tiempo de carga de la pagina
│   ├── playground/     
│   │   ├── useState.jsx                    # Practica del uso de useState
│   │   ├── LoginPage.css                   # Estilos globales de la pagina de login
│   │   ├── HooksGral.jsx                   # Ejercicio de practica de los hooks
│   │   └── LoginPage.jsx                   # Login de la pagina   
│   ├── index.js                            # Punto de entrada principal
│   ├── App.js                              # Componente raíz
│   ├── firebase.js                         # Conexion en la base de datos
│   ├── App.css                             # Estilos globales de la app
│   ├── index.css                           # Estilos globales del index
│   ├── App.test.js                         # Testeo para la app
│   ├── logo.svg                            # Contiene el logo de React en graficos vectoriales escalables
│   ├── reportWebVitals.js                  # Mide el rendimiento web de la pagina
│   ├── setupTests.js                       # Archivo de configuracion para pruebas del proyecto
├── .gitignore                              # Es para que ignore la carpeta "node_modules" al subir al repositorio de GIT
├── package.json                            # Configuración y dependencias del proyecto
├── package-lock.json                       # Bloqueo de versiones de dependencias
└── README.md                               # Documentación del proyecto

```
---

## Avance del Proyecto

| Nº  | Fecha       | Descripción / Entregable                               |
|-----|-------------|--------------------------------------------------------|
| 1   | 2025-08-15  | Creación del proyecto con CRA                          |
| 2   | 2025-08-15  | Instalación y configuración de Bootstrap y SweetAlert2 |

> **Nota:** Ir actualizando la tabla con cada cambio o entregable.

---