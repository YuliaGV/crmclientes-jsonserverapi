import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FormClient from '../components/FormClient'

const NewClient = () => {

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
        {cliente?.nombre && (
            <div className="bg-white mt-10">
                <h1 className="text-orange-600 font-bold">Editar Cliente</h1>
                <p className="mt-3 ">Utiliza este formulario para editar un cliente</p>
                <FormClient 
                    cliente={cliente}
                    loading={loading}
                />
            </div>
        )}
        {!cliente?.nombre && (
            <div className="bg-white mt-10">
                <h1 className="text-orange-600 font-bold">El cliente no existe</h1>
            </div>
        )}


        </>
    );
       
}

export default NewClient;
