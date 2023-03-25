import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import './login.css'
import { useForm } from 'react-hook-form'
import { signInWithEmail } from '../../firebase/authServices';


export function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        await signInWithEmail(data)
    }

    return (
        <MDBContainer fluid>

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>

                    <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                                <p className="text-white-50 mb-3">Please enter your login and password!</p>


                                <MDBInput wrapperClass='mb-4 w-100' name='email' label='Email address' id='formControlLg' type='email' size="lg" {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i })}/>
                                <MDBInput wrapperClass='mb-4 w-100' name='password' label='Password' id='formControlLg' type='password' size="lg" {...register("password")} />



                                <MDBBtn type='submit' size='lg'>
                                    Login
                                </MDBBtn>

                                <hr className="my-4" />

                            </MDBCardBody>
                        </form>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}

