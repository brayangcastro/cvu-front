 
const baseUrl = import.meta.env.VITE_APP_LOCAL_IP; 
const soporteUrl = `${baseUrl}/soporte`; 

 
const apiUrls = {
      
    obtenerUsuarios: `${soporteUrl}/obtenerUsuarios`,
    login: `${soporteUrl}/login`,
};

export default apiUrls;
