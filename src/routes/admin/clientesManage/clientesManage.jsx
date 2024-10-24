import React from 'react';
import { useState, useEffect } from 'react';
import UserManageView from "./clientesManage-View";
import axios from 'axios';
import apiUrls from '../../../api'; 

const ClientesManage = () => {
     
    const [data, setData] = useState([]);
    const [user, setUser] = useState({
        Nombre: '',
        Apellido: '',
        Email: '',
        Celular: '',
        publicMetadata: {},
    });

    const [editingUser, setEditingUser] = useState({
        Nombre: '',
        Apellido: '',
        Email: '',
        Celular: '',
        publicMetadata: {},
    });

    const [userDetail, setUserDetail] = useState({});
    const [dataUserDelete, setDataUserDelete] = useState({});
    const [clave, setClave] = useState('');

    
 

    useEffect(() => {
        axios.post(apiUrls.obtenerUsuarios)
            .then(response => {
                const usuarios = response.data;
                setData(usuarios);
            
            })
            .catch(error => {
                console.error('Error al obtener datos de la API:', error);
            });
    }, []);

    

    return (
        <>
            <UserManageView
                users={data} 
                
                setUser={setUser}
                user={user} 
                clave={clave}
               
                userDetail={userDetail} 
                dataUserDelete={dataUserDelete}
                setDataUserDelete={setDataUserDelete}
                
                editingUser={editingUser}
                setEditingUser={setEditingUser}
            />
        </>
    );
};

export default ClientesManage;
