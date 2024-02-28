import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import style from '../Contact/style.module.scss'
import Swal from 'sweetalert2'
import { MDBInput, MDBTextArea, MDBBtn } from 'mdb-react-ui-kit';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer'
import { Button } from 'react-bootstrap';

export default function Contact() {



    const form = useRef();

    const alert = () => {
        Swal.fire({
            // position: "top-end",
            icon: "success",
            title: "Formulario enviado!",
            showConfirmButton: false,
            timer: 1500
        });
    }


    const sendEmail = (e) => {
        e.preventDefault();

        // Verifique se todos os campos estão preenchidos
        const formFields = form.current.elements;
        let isFormValid = true;

        for (let i = 0; i < formFields.length; i++) {
            if (formFields[i].type !== 'submit' && formFields[i].value.trim() === '') {
                isFormValid = false;
                break;
            }
        }

        if (!isFormValid) {
            Swal.fire({
                icon: "error",
                title: "Campos obrigatórios",
                text: "Por favor, preencha todos os campos.",
            });
            return;
        }

        // Se todos os campos estiverem preenchidos, envie o email
        emailjs
            .sendForm('service_0efdl0k', 'template_alejp3m', form.current, {
                publicKey: 'BNzy7iArWNAAjV2Iz',
            })
            .then(
                () => {
                    console.log('SUCCESS')
                },
                (error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Algo deu errado!",
                        footer: '<a href="#">Por que estou tendo esse problema?</a>'
                    });
                },
            );
    };

    // ...

    return (
        <>
            <Header />
            <div className={style.divPai}>
                <h2>Entre em contato conosco!</h2>
                <div className={style.divFilho}>
                    <form ref={form} onSubmit={sendEmail}>
                        <MDBInput name='name' label='Nome' v-model='name' wrapperClass='mb-3' />
                        <MDBInput type='email' label='Email' v-model='email' wrapperClass='mb-3' />
                        <MDBTextArea name='message' wrapperClass='mb-3' label='Mensagem' />
                        <Button onClick={alert} type='submit' value='Send' color='primary' >
                            Enviar
                        </Button>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    );

}