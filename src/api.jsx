 
const baseUrl = import.meta.env.VITE_APP_LOCAL_IP; 
const soporteUrl = `${baseUrl}/soporte`; 



const rifasUrl = `${baseUrl}/rifas`;
 
const apiUrls = {
      
    obtenerUsuarios: `${soporteUrl}/obtenerUsuarios`,
    login: `${soporteUrl}/login`,



    
    
   getBoletosPorEvento: (eventoID) => `${rifasUrl}/eventos/${eventoID}/boletos`,   
   getEventoPorID: (eventoID) => `${rifasUrl}/eventos/${eventoID}`,  
   cambiarEstadoBoleto: `${rifasUrl}/boletos/cambiar-estado`,  
 getEventosRifa: `${rifasUrl}/eventos`,   

 // Para agregar un evento
 agregarEventoRifa: `${rifasUrl}/agregarEvento`,  // URL para agregar un evento

 // Para eliminar un evento
 eliminarEventoRifa: (eventoID) => `${rifasUrl}/eventos/${eventoID}`,  // URL para eliminar un evento

 // Para reiniciar un evento
 reiniciarEventoRifa: (eventoID) => `${rifasUrl}/eventos/${eventoID}/reiniciar`,  // URL para reiniciar un evento

 // Para cancelar un evento
 cancelarEventoRifa: (eventoID) => `${rifasUrl}/eventos/${eventoID}/cancelar`,  // URL para cancelar un evento

 // Para restaurar un evento cancelado
 restaurarEventoRIfa: (eventoID) => `${rifasUrl}/eventos/${eventoID}/restaurar`  // URL para restaurar un evento cancelado
};

export default apiUrls;
