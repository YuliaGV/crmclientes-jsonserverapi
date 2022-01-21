import React, { useState, useEffect} from 'react';
import Client from '../components/Client';
import swal from 'sweetalert';

const Home = () => {

    const[clientes, setClientes] = useState([]);

    useEffect(() => {
        const getClientsAPI = async () => {
           
            try {
                const url = 'http://localhost:4000/clientes';
                const response = await fetch(url);
                const data = await response.json();
                setClientes(data);
                
            } catch (error) {
                console.log(error);
                
            }
        }
        getClientsAPI();
    }, []);

    const handleDelete = async (id) => {
        const confirm = await swal({
            title: '¿Estas seguro?',
            text: "Una vez eliminado, no podras recuperar este cliente",
            icon: 'warning',
            buttons: true,
            dangerMode: true,
            })
        if(confirm) {

            try {
                const url = `http://localhost:4000/clientes/${id}`;
                const response = await fetch(url, {
                    method: 'DELETE'
                });
                await response.json();
                setClientes(clientes.filter(cliente => cliente.id !== id));
                swal('Cliente eliminado', 'El cliente ha sido eliminado correctamente', 'success');

            } catch (error) {
                console.log(error);
            }
        }
    }



    return (
        <div>
            <h1 className="text-orange-600 font-bold">Listado de clientes</h1>

            <table className="w-full table-auto shadow-md mt-10 md:table-fixed">
                <thead className="bg-orange-600 text-white">
                    <tr>
                        <th>Nombre</th>
                        <th>Empresa</th>
                        <th>Contacto</th>
                        <th>Acciones</th>

                    </tr>
                </thead>
                <tbody>
                    {clientes.map(cliente => (
                        <Client 
                            key={cliente.id}
                            cliente={cliente}
                            handleDelete={handleDelete}
                        />
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default Home
