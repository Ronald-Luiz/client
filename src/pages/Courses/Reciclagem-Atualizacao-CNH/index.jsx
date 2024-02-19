// import styles from '../styles/style.module.scss';
import styles from '../../../components/Cards/style.module.scss';

// Cards
import { Cards } from '../../../components/Cards';

import { Link } from 'react-router-dom';


export default function reciclagem() {

    const Filter = Cards.filter((item) =>
        (item.title === 'Curso de reciclagem para condutores infratores') ||
        (item.title === 'Curso preventivo de reciclagem') ||
        (item.title === 'Curso de atualização para renovação da CNH')
    )


    // console.log(Filter);


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