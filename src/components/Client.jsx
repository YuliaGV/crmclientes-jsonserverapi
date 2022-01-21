import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { FaEye} from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";



const Client = ({ cliente, handleDelete}) => {


        const navigate = useNavigate();

        const { nombre, empresa, email, telefono, direccion, id } = cliente;
    
        return (
                <tr className="hover:bg-gray-100 border-b border-gray-200">
                    <td className="border px-3">{nombre}</td>
                    <td className="border px-3">{empresa}</td>
                    <td className="border px-3">
                        <p>Correo: {email}</p>
                        <p>Tel: {telefono}</p>
                        <p>Domicilio: {direccion}</p>
                    </td>
                    <td className="border px-3">
                        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold mx-1 my-1 py-2 px-4 rounded"
                            onClick={() => navigate(`/clientes/${id}`)}
                        >
                            <FaEye />
                        </button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold mx-1 my-1 py-2 px-4 rounded"
                            onClick={() => navigate(`/clientes/edit/${id}`)}
                        >
                            <FaEdit />
                        </button>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold mx-1 my-1 py-2 px-4 rounded"
                            onClick={() => handleDelete(id)}
                        >
                            <FaTrashAlt />
                        </button>
                    </td>

                    
                </tr>
        )
  
};

export default Client;



