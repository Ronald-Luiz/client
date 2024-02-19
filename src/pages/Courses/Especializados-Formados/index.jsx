import React from 'react';
import { Cards } from '../../../components/Cards';
import styles from '../../../components/Cards/style.module.scss';
import { Link } from 'react-router-dom';

const Formados = () => {

    const Filter = Cards.filter(
        (item) =>
            (item.title === 'Curso para condutores de veículos de transporte de produtos perigosos') ||
            (item.title === 'Curso para condutores de veículo de transporte coletivo de passageiros') ||
            (item.title === 'Curso para condutores de veículos de emergência') ||
            (item.title === 'Curso para condutores de veículos de transporte escolar')
    );

    // console.log(Filter)

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
    );
};

export default Formados;
