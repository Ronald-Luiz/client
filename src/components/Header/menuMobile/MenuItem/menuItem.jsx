import * as React from "react";
import { motion } from "framer-motion";

import styles from '../MenuItem/style.module.scss';

import Button from 'react-bootstrap/Button';
import CustomIcon from "../../../CustomIcons";

import { Link } from "react-router-dom";


const variants = {
    open: {
        y: 0,
        opacity: 10,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

// const colors = ["black", "black", "black", "black", "black"];

export const MenuItem = ({ i }) => {

    // const style = { border: `1px solid ${colors[i]}` };

    return (


        <motion.ul className={styles.ulPai}
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <section>
                <li><CustomIcon icon='inicio' color='white' size={25} />
                    <Link to='/'>
                        INÍCIO
                    </Link>
                </li>
                <div className={styles.line} />
                <li><CustomIcon icon='curso' color='white' size={25} />
                    <Link to='/courses'>
                        CURSOS
                    </Link>
                </li>
                {/* <div className={styles.line} /> */}
                {/* <li><CustomIcon icon='pergunta' color='white' size={25} />
                    PERGUNTAS
                </li> */}
                <div className={styles.line} />
                <li><CustomIcon icon='contatos' color='white' size={25} />
                    <Link to='/contatos'>
                        CONTATO
                    </Link>
                </li>
            </section>



            {/* <section>
                <Button>Button</Button>
            </section> */}


            <section>
                <p><CustomIcon icon='contato' color='yellow' size={25} />(21) 97148-8620</p>
                <p><CustomIcon icon='email' color='yellow' size={25} /> rlmcursosdetransito@gmail.com</p>
            </section>

            <div className={styles.line2} />

            <section className={styles.social}>
                <CustomIcon icon='facebook' color='white' size={35} />
                <CustomIcon icon='instagram' color='white' size={35} />
                <CustomIcon icon='whatsapp' color='white' size={35} />
            </section>
        </motion.ul >




    );
};