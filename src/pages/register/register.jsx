import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import './register.css'
import { useForm } from 'react-hook-form'
import { registerWithEmail } from '../../firebase/authServices';


export function Register() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        await registerWithEmail(data)
        // console.log(data)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
                <div className='mask gradient-custom-3'></div>
                <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                    <MDBCardBody className='px-5'>
                        <h2 className="text-uppercase text-center mb-5">Crea una Cuenta</h2>
                        <MDBInput wrapperClass='mb-4' name='name' label='Tu nombre' size='lg' id='name' type='text' {...register('name', { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i  })}/>
                        <MDBInput wrapperClass='mb-4' name='email' label='Tu email' size='lg' id='email' type='email' {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i })}/>
                        <MDBInput wrapperClass='mb-4' name='password' label='Password' size='lg' id='password' type='password' {...register("password")} />
                        <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' type='submit'>Register</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </form>
    );
}

