import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import style from '../Contact/style.module.scss'
import Swal from 'sweetalert2'

export default function Contact() {



    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_0efdl0k', 'template_alejp3m', form.current, {
                publicKey: 'BNzy7iArWNAAjV2Iz',
            })
            .then(
                () => {
                    Swal.fire({
                        title: "Mensagem enviada!",
                        icon: "success"
                    });

                },
                (error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        footer: '<a href="#">Why do I have this issue?</a>'
                    });
                    console.log('FAILED...', error.text);
                },
            );
    };



    return (
        <div className={style.divPai}>
            <h2>Entre em contato conosco!</h2>
            <div className={style.divFilho}>

                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    )
}