import { useState, useEffect } from 'react';
import { useNavigate, BrowserRouter, Routes, Route, Outlet  } from 'react-router-dom'; 

import Layout from '../Layout';
import Login from './login/login';
import Signin from './login/signin';
import LockScreen from '../components/LockScreen'; 
import ClientesManage from '../routes/admin/clientesManage/clientesManage'; // Asegúrate de que este componente esté correctamente importado y estilizado
import CVU from '../components/cvu/CVU';

import LandingPage from '../components/landing/LandingPage';
import Survey from '../components/survey/survey';
import PhoneVerification from '../components/survey/PhoneVerification';
import UserRegistration from '../components/survey/UserRegistration';
 
import BoletosManage from '../routes/admin/boletosManage/rifas/BoletoApp';
import ConfirmacionBoletos from '../routes/admin/boletosManage/rifas/ConfirmacionBoletos';

const baseRouter = import.meta.env.VITE_BASENAME;

function useAuth() {
    const getToken = () => localStorage.getItem('userToken') ? true : false;
    const [isAuthenticated, setIsAuthenticated] = useState(getToken());

    useEffect(() => {
        // Esta función se llama cada vez que el evento 'storage' se dispara
        const onStorageChange = () => {
            setIsAuthenticated(getToken());
        };

        // Agrega un escuchador al evento 'storage'
        window.addEventListener('storage', onStorageChange);

        // Limpia el evento al desmontar el componente
        return () => {
            window.removeEventListener('storage', onStorageChange);
        };
    }, []);

    return { isAuthenticated };
}
function AppRouter() { 
    const { isAuthenticated } = useAuth();


    return (
         
          <BrowserRouter basename={baseRouter} >
             {/* <BrowserRouter basename="/estacion" > */}
            <Routes>
            <Route path="/lockscreen" element={<LockScreen />} /> {/* Ruta agregada para LockScreen */}
            <Route path="/cvu" element={ <CVU /> } />
            <Route path="/" element={ <CVU /> } />
            <Route path="/home" element={ <LandingPage /> } />
            <Route path="/encuesta" element={ <Survey /> } />
            <Route path="/veri" element={ <PhoneVerification /> } />
            <Route path="/registro" element={ <UserRegistration /> } />
            <Route path="/boletos" element={ <BoletosManage /> } />
            <Route path="/confirma" element={ <ConfirmacionBoletos /> } />

            
            
            
            
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