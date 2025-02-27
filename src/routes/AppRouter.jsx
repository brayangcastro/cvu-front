import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Layout from '../Layout';
import Login from './login/login';
import Signin from './login/signin';
import LockScreen from '../components/LockScreen';
import ClientesManage from '../routes/admin/clientesManage/clientesManage';

// Importa ambos componentes de CVU
import CVUPaulina from '../components/cvu/CVU_paulina';
import CVUDefault from '../components/cvu/CVU';

import LandingPage from '../components/landing/LandingPage';
import Survey from '../components/survey/survey';
import PhoneVerification from '../components/survey/PhoneVerification';
import UserRegistration from '../components/survey/UserRegistration';

import BoletosManage from '../routes/admin/boletosManage/rifas/BoletoApp';
import ConfirmacionBoletos from '../routes/admin/boletosManage/rifas/ConfirmacionBoletos';

const baseRouter = import.meta.env.VITE_BASENAME;

// Determina cuál componente usar en función de la variable de entorno
const CVUComponent = import.meta.env.VITE_CVU === "pau" ? CVUPaulina : CVUDefault;

function useAuth() {
  const getToken = () => (localStorage.getItem('userToken') ? true : false);
  const [isAuthenticated, setIsAuthenticated] = useState(getToken());

  useEffect(() => {
    const onStorageChange = () => {
      setIsAuthenticated(getToken());
    };

    window.addEventListener('storage', onStorageChange);
    return () => {
      window.removeEventListener('storage', onStorageChange);
    };
  }, []);

  return { isAuthenticated };
}

function AppRouter() {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter basename={baseRouter}>
      <Routes>
        <Route path="/lockscreen" element={<LockScreen />} />
        {/* Usa el componente condicional para CVU */}
        <Route path="/cvu" element={<CVUComponent />} />
        <Route path="/" element={<CVUComponent />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/encuesta" element={<Survey />} />
        <Route path="/veri" element={<PhoneVerification />} />
        <Route path="/registro" element={<UserRegistration />} />
        <Route path="/boletos" element={<BoletosManage />} />
        <Route path="/confirma" element={<ConfirmacionBoletos />} />

        {isAuthenticated ? (
          <Route element={<Outlet />}>
            <Route path="/" element={<Layout><ClientesManage /></Layout>} />
          </Route>
        ) : (
          <Route element={<Outlet />}>
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Signin />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
