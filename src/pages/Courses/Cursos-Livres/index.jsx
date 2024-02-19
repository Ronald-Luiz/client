import styles from '../../../components/Cards/style.module.scss';
import { Cards } from '../../../components/Cards';
import { Link } from 'react-router-dom';

export default function Livres() {
    const Filter = Cards.filter((item) =>
        (item.title === 'Monitor de Transporte Escolar') ||
        (item.title === 'Curso de noções básicas em Primeiros Socorros') ||
        (item.title === 'Curso de Prevenção e Combate a Incêndio') ||
        (item.title === 'Curso de Atendimento ao Cliente') ||
        (item.title === 'Curso de Direção Defensiva') ||
        (item.title === 'Talonário Eletrônico') ||
        (item.title === 'Curso de Atualização para Agente de Trânsito - EAD - Portaria SENATRAN Nº 966/2022') ||
        (item.title === 'Curso de Formação para Agente de Trânsito - EAD - Portaria SENATRAN Nº 966/2022') ||
        (item.title === 'Direção Defensiva para Instrutores: Foco em Intuições Físicas') ||
        (item.title === 'Curso para Condutor e Monitor de Veículos para Passageiros com Mobilidade Reduzida')
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