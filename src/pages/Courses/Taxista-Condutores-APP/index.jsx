// import styles from '../styles/style.module.scss';
import styles from '../../../components/Cards/style.module.scss';

import { Cards } from "../../../components/Cards";
import { Link } from 'react-router-dom';


export default function condutoresApp() {

    const Filter = Cards.filter((item) =>
        (item.title === 'Curso para Taxista - Lei 12.468/11 e Resolução 456/13') ||
        (item.title === 'Curso para Condutores de Veículos de Aplicativo') ||
        (item.title === 'Curso para Condutores de Veículos de Aplicativo São Paulo - SP (ConduAPP)') ||
        (item.title === 'Curso de Formação para Condutores de Passageiros por Aplicativo Foz do Iguaçu - PR')
    )

    return (
        <main>
            <div className={styles.PaiCards}>
                {Filter.map((item, index) => (
                    <figure key={index}>

                        <section className={styles.Cards}>
                            <img src={item.imageSrc} alt={item.title} className={styles.Imagem} />
                            <section>
                                <figcaption>{item.title}</figcaption>


                                <Link to={`/page/${item.id}`}>
                                    <button variant="warning" size="lg">
                                        {item.button}
                                    </button>
                                </Link>


                            </section>
                        </section>

                    </figure>
                ))}
            </div>
        </main>
    )
}