import React from 'react';

import axios from "axios";
import planos from '../../../planos.json';
import styles from '../Payments/style.module.scss';

//button bootstrap
import Button from 'react-bootstrap/Button';


export default function payment() {

    const Comprar = async (produto) => {
        try {
            const response = await axios.post(
                "https://backcnh.ronaldxpdevelop.repl.co/Mercado_Pago/",
                produto,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            window.location.href = response.data;
        } catch (error) {
            console.error("Erro ao fazer a solicitação:", error);
        }
    };


    return (
        <section className={styles.SectionPayment}>

            <h1> Welcome to our page of the payments, make sure you do the right thing !</h1>

            <p>
                API do mercado pago
            </p>

            {/* <br />
            <br />
            <br /> */}

            <div className={styles.cursos}>

                {planos.map((e) => (
                    <div>
                        {/* <img src={e.imagem} /> */}
                        <p>{e.nome}</p>
                        <p>{e.preco}</p>
                        <p>{e.quantidade}</p>

                        <Button onClick={() => Comprar(e)}>Comprar</Button>
                    </div>
                ))}


            </div>


        </section>
    )
}