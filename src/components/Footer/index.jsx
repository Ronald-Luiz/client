import styles from '../Footer/style.module.scss';

//images
import Logo from '../../assets/logo.png';

//icons
import CustomIcon from '../CustomIcons';

export default function footer() {
    return (
        <footer>

            <div className={styles.footerFilho}>
                <ul>

                    <figure>
                        <img src={Logo} alt='' />
                        <figcaption>
                            <p>RLM CURSOS</p>
                            <p>DE TRÂNSITO</p>
                        </figcaption>
                    </figure>

                    <div className={styles.VerticalLine}></div>

                    <section className={styles.Text}>
                        <h2>CONTATO</h2>
                        <li><CustomIcon icon='contato' color='white' size={27} />Whatsapp:(21) 97148-8620</li>
                        <li><CustomIcon icon='email' color='white' size={27} />email: rlmcursosdetransito@gmail.com</li>
                    </section>

                    <div className={styles.VerticalLine}></div>

                    <section className={styles.Text2}>
                        <h2>HORARIO DE ATENDIMENTO</h2>
                        <p>Seg. à Sab. 08h às 19h</p>
                        <p>(Horário de Brasília)</p>


                    </section>

                </ul>
            </div>

            <div>
                <ul className={styles.uL2}>
                    <li className={styles.Li1}>
                        © RLM Cursos de Trânsito - Todos os direitos reservados 
                    </li>

                    <li className={styles.Li2}>
                        nossosite.com.br
                    </li>

                </ul>
            </div>

        </footer>
    )
}