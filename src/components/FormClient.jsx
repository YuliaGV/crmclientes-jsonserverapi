import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Spinner from '../components/Spinner';

const FormClient = ({cliente, loading}) => {

    const navigate = useNavigate();

    const clienteSchema = Yup.object().shape({
        nombre: Yup.string()
            .min(2, 'El nombre debe tener al menos 2 caracteres')
            .max(50, 'El nombre debe tener como máximo 50 caracteres')
            .required('El nombre es requerido'),
        empresa: Yup.string()
            .min(2, 'La empresa debe tener al menos 2 caracteres')
            .max(50, 'La empresa debe tener como máximo 50 caracteres')
            .required('La empresa es requerida'),
        email: Yup.string()
            .email('El email no es válido')
            .required('El email es requerido'),
        telefono: Yup.number().typeError('El teléfono debe ser un número')
            .integer('Número no válido')
            .positive('Número no válido'),
        direccion: Yup.string()
    });


    const initialValues = {
        nombre: cliente?.nombre ?? '',
        empresa: cliente?.empresa ?? '',
        email: cliente?.email ?? '',
        telefono: cliente?.telefono ?? '',
        direccion: cliente?.direccion ?? '',
        comentario: cliente?.comentario ?? ''
    }

    const handleSubmit = async (values) => {

        try {

            if(cliente.id) {

              // editar cliente

              const url = `http://localhost:4000/clientes/${cliente.id}`;
              const response = await fetch(url, {
                method: 'PUT',
                body: JSON.stringify(values),
                headers: {
                  'Content-Type': 'application/json'
                }
              });
              const data = await response.json();
              navigate('/clientes');

              
            }else{

              //Nuevo registro

              const url = 'http://localhost:4000/clientes';
              const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                  'Content-Type': 'application/json'
                }
              });
              const data = await response.json();
              navigate('/clientes');

            }

        } catch (error) {

            console.log(error);

        }
      
    }

  return (
    loading ? <Spinner /> :
    (
    <div className="bg-orange-200 mb-10 mt-10 px-5 py-10 rounded-lg md:w-3/4 lg:w-1/2 mx-auto">

        
        <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            onSubmit={ async (values, {resetForm}) => {
                await handleSubmit(values);
                resetForm();
            }}
            validationSchema={clienteSchema}
        >
            {() => (

              <Form className="mt-3 text-left">

                  <div className="mt-3">
                    <label htmlFor="nombre" className="text-gray-800">Nombre</label>
                    <Field type="text" name="nombre" className="border border-gray-300 w-full" />
                    <ErrorMessage name="nombre" component="div" className="text-red-500" />
                  </div>

                  <div className="mt-3">
                    <label htmlFor="empresa" className="text-gray-800">Empresa</label>
                    <Field type="text" name="empresa" className="border border-gray-300 w-full" />
                    <ErrorMessage name="empresa" component="div" className="text-red-500" />
                  </div>

                  <div className="mt-3">
                    <label htmlFor="email" className="text-gray-800">Email</label>
                    <Field type="email" name="email" className="border border-gray-300 w-full" />
                    <ErrorMessage name="email" component="div" className="text-red-500" />
                  </div>

                  <div className="mt-3">
                    <label htmlFor="telefono" className="text-gray-800">Teléfono</label>
                    <Field type="tel" name="telefono" className="border border-gray-300 w-full" />
                    <ErrorMessage name="telefono" component="div" className="text-red-500" />
                  </div>

                  <div className="mt-3">
                    <label htmlFor="direccion" className="text-gray-800">Dirección</label>
                    <Field type="text" name="direccion" className="border border-gray-300 w-full" />
                    <ErrorMessage name="direccion" component="div" className="text-red-500" />
                  </div>

                  <div className="mt-3">
                    <label htmlFor="comentario" className=" text-gray-800">Comentarios</label>
                    <Field as="textarea" type="text" name="comentario" className="border border-gray-300 w-full" />
                  </div>

                  <div className="mt-6">
                    <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-lg w-full">
                      Registrar
                    </button>
                  </div>
              </Form>

            )}

      </Formik>



    </div>
    )
  );

};

FormClient.defaultProps = {
    cliente: {},
    loading: false
    
}

export default FormClient;

