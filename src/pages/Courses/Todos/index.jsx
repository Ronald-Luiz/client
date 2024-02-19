import React, { useState } from 'react';
import styles from '../../../components/Cards/style.module.scss';
import { Cards } from '../../../components/Cards';
import { Link } from 'react-router-dom';

const Todos = () => {
    const initialVisibleItems = 12;
    const [visibleItems, setVisibleItems] = useState(initialVisibleItems);

    const loadMore = () => {
        // Aumenta o número de itens visíveis quando o botão "Mostrar mais" é clicado
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
    };


    return (
        <>
            <main>
                <div className={styles.PaiCards}>

                    {Cards.slice(0, visibleItems).map((item, index) => (
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

                    {/* Mostra o botão "Mostrar mais" apenas se houver mais itens para mostrar */}

                </div>

                <section>
                    {visibleItems < Cards.length && (
                        <button className={styles.Loadingbtn} onClick={loadMore}>Carregar mais</button>
                    )}
                </section>


            </main>
        </>
    );
};

export default Todos;
