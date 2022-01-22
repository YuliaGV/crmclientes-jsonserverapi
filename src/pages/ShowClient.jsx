import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const ShowClient = () => {

    const { id } = useParams();

    const [cliente, setCliente] = useState({});
    const [loading, setLoading] = useState(true);

   useEffect(() => {
        const getClientAPI = async () => {
            try {
                const url = `${import.meta.env.VITE_API_URL}/${id}`;
                const response = await fetch(url);
                const data = await response.json();
                setCliente(data);
            } catch (error) {
                console.log(error);
            }
            setLoading(!loading);
        }
        getClientAPI();
    }, []);




    return (
        <>
        { loading ? <Spinner /> : 

        Object.keys(cliente).length === 0 ? (
            <h1>No hay resultados...</h1>
        ) : (
                
        <div>
            <h1 className="text-orange-600 font-bold">Detalles del cliente</h1>
            {cliente.nombre && (
                <p><span className="font-bold">Nombre: </span>{cliente.nombre}</p>
            )}
            {cliente.empresa && (
                <p><span className="font-bold">Empresa: </span>{cliente.empresa}</p>
            )}
            {cliente.email && (
                <p><span className="font-bold">Correo: </span>{cliente.email}</p>
            )}
            {cliente.telefono && (
                <p><span className="font-bold">Tel: </span>{cliente.telefono}</p>
            )}
            {cliente.direccion && (
                <p><span className="font-bold">Domicilio: </span>{cliente.direccion}</p>
            )}
            {cliente.comentario && (
                <p><span className="font-bold">Comentario: </span>{cliente.comentario}</p>
            )}

        </div>
        
        )}
        </>

    )


            
            
           
    


};

export default ShowClient;
