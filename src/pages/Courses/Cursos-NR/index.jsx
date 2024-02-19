// import styles from '../styles/style.module.scss';
import styles from '../../../components/Cards/style.module.scss';

import { Cards } from '../../../components/Cards';

import { Link } from 'react-router-dom';

export default function NR() {

    const Filter = Cards.filter((item) =>
        (item.title === 'Curso Operador de Empilhadeiras') ||
        (item.title === 'Curso Online NR 06 - Equipamento de Proteção Individual - 16h') ||
        (item.title === 'Curso Online NR 10 - Segurança em Instalações e Serviços em Eletricidade - 40h') ||
        (item.title === 'Curso Online NR 11 - Transporte, Movimentação, Armazenagem e Manuseio de Materiais - 16h') ||
        (item.title === 'Curso Online NR 12 - Segurança no Trabalho em Máquinas e Equipamentos - 16') ||
        (item.title === 'Curso Online NR 16 - Atividades e Operações Perigosas - 16h') ||
        (item.title === 'Curso Online NR 20 (Básico) - Segurança com Inflamáveis e Combustíveis - 8h') ||
        (item.title === 'Curso Online NR 20 (Intermediário Classe I) - Segurança com Inflamáveis e Combustíveis - 16h') ||
        (item.title === 'Curso Online NR 20 (Intermediário Classe II e III) - Segurança com Inflamáveis e Combustíveis - 16h') ||
        (item.title === 'Curso Online NR 29 - Segurança e Saúde no Trabalho Portuário - 24h') ||
        (item.title === 'Curso Online NR 35 - Trabalho em Altura - 16h') ||
        (item.title === 'Curso Online NR 33 - Segurança e Saúde nos Trabalhos em Espaços Confinados (16h)')
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