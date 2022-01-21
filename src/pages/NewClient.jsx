import React from 'react'
import FormClient from '../components/FormClient'

const NewClient = () => {
    return (
        <div className="bg-white mt-10">
            <h1 className="text-orange-600 font-bold">Nuevo Cliente</h1>
            <p className="mt-3 ">Llena los siguientes campos para registrar un nuevo cliente</p>
            <FormClient />
        </div>
    )
}

export default NewClient;
