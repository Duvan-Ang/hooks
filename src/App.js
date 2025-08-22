import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import ForgotPage from "./pages/ForgotPage/ForgotPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

//Import para Hooks

import HooksGral from "./playground/HooksGral"
import UseStateHook from "./playground/useState"

//import StateContador from "./playground/useState/useState";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/forgot" element={<ForgotPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>

        {/* RUTAS PARA HOOKS */}
        <Route path="/hooks" element={<HooksGral/>}/>
        <Route path="/usestate" element={<UseStateHook/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;