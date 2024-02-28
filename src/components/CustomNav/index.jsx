//importing Menu Mobile
import Mobile from '../Header/menuMobile/mobile.jsx';

//rotas
import { Link } from 'react-router-dom';

//style
import styles from '../CustomNav/style.module.scss';

//icons
import CustomIcon from '../CustomIcons';

//images
import Logo from '../../assets/logo.png';
import Capa2 from '../../assets/capa2.png';



export default function Nav() {
    return (
        <>
            <div className={styles.NavPai}>

                <nav>


                    <figure className={styles.divMobile}>
                        <Mobile className={styles.menuMobile} />
                        <img src={Logo} alt='' />
                        <figcaption>
                            <p>RLM CURSOS</p>
                            <p>DE TRÂNSITO</p>
                        </figcaption>
                        <span>EAD</span>
                    </figure>

                    <ul className={styles.menuDesktop}>
                        <section className={styles.section1}>
                            <section>
                                <section className={styles.contact}>
                                    <CustomIcon icon='contato' color='yellow' size={27} /><a href='#'><li>Whatsapp: (21) 97148-8620</li></a>
                                    <CustomIcon icon='email' color='yellow' size={27} /><a href='#'><li>rlmcursosdetransito@gmail.com</li></a>
                                </section>
                            </section>

                            <section className={styles.socialMedia}>
                                <a href='#'><CustomIcon icon='facebook' color='white' size={25} /></a>
                                <a href='#'><CustomIcon icon='instagram' color='white' size={25} /></a>
                                <a href='#'><CustomIcon icon='whatsapp' color='white' size={25} /></a>
                            </section>
                        </section>

                        <div className={styles.linha}></div>

                        <section className={styles.section2}>
                            <figure>
                                <img src={Logo} alt='' />
                                <figcaption>
                                    <p>RLM CURSOS</p>
                                    <p>DE TRÂNSITO</p>
                                </figcaption>
                                <span>EAD</span>
                            </figure>

                            <section className={styles.menu}>
                                <li>
                                    <Link to='/home'>
                                        INÍCIO
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/courses'>
                                        CURSOS
                                    </Link>
                                </li>


                                <li>
                                    <Link to='contatos'>CONTATO</Link>
                                </li>

                                {/* <section>
                <Button className={styles.Button1} variant="success" size='lg'>Button</Button>
                <Button className={styles.Button2} variant="warning" size='lg'>Button</Button>
            </section> */}

                            </section>
                        </section>
                    </ul>

                </nav>




            </div>
            <figure className={styles.capa2}>
                <img src={Capa2} alt='' />

                <figcaption>

                    <ul>
                        <li>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        /
                        <li>
                            <Link to='/courses'>
                                Cursos
                            </Link>
                        </li>
                    </ul>
                    <h2>

                        CURSOS
                    </h2>
                </figcaption>

            </figure>

        </>
    )
}