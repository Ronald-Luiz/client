import styles from '../../../components/Cards/style.module.scss';
import { Cards } from '../../../components/Cards';

export default function posGraduacao() {
    const Filter = Cards.filter((item) =>
        (item.title === 'Pós-Graduação em Gestão e Direito de Trânsito') ||
        (item.title === 'Pós-Graduação em Gestão e Educação para o Trânsito')
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
                                <button variant="warning" size="lg">
                                    {item.button}
                                </button>
                            </section>
                        </section>
                    </figure>
                ))}
            </div>

        </main>
    )
}