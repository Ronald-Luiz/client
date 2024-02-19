// import styles from '../styles/style.module.scss';
import { Cards } from '../../../components/Cards';
import styles from '../../../components/Cards/style.module.scss';
import { Link } from 'react-router-dom';

export default function atualizados() {

    const Filter = Cards.filter(
        (item) =>
            (item.title === 'Curso de atualização para condutores de veículo de transporte de cargas de produtos perigosos') ||
            (item.title === 'Curso de atualização para condutores de veículo de transporte coletivo de passageiros') ||
            (item.title === 'Curso de atualização para condutores de veículo de transporte de emergência') ||
            (item.title === 'Curso de atualização para condutores de veículo de transporte de escolares') ||
            (item.title === 'Curso especializado de atualização obrigatório destinado aos profissionais em entrega de mercadorias (motofretista)') ||
            (item.title === 'Curso especializado de atualização obrigatório destinado aos profissionais em transporte de passageiros (mototaxista)')
    )

    console.log(Filter);

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