import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import ForgotPage from "./pages/ForgotPage/ForgotPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import NotFoundPage from  './pages/components/NotFoundPage';

//Import para Hooks

import HooksGral from "./playground/HooksGral"
import UseStateHook from "./playground/useState"

//import StateContador from "./playground/useState/useState";

import ProtectedRoute from './pages/components/ProtectedRoute';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage';
import AuxiliaresPage from './pages/AuxiliaresPage/AuxiliaresPage';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/forgot" element={<ForgotPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        {/* RUTAS PARA HOOKS */}
        <Route path="/hooks" element={<HooksGral/>}/>
        <Route path="/usestate" element={<UseStateHook/>}/>

        <Route path="/dashboard" element={<ProtectedRoute> <DashboardPage /> </ProtectedRoute> } />
        <Route path="/auxiliares" element={<ProtectedRoute> <AuxiliaresPage /> </ProtectedRoute> } />
        <Route path="*" element={<NotFoundPage />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;