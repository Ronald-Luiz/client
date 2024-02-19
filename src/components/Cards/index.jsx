import React from 'react';
import styles from '../Cards/style.module.scss';
import { Link, useNavigate } from 'react-router-dom';


//Imagens
import Image1 from '../../assets/Card1.png';
import Image2 from '../../assets/Card2.png';
import Image3 from '../../assets/Card3.png';
import Image4 from '../../assets/Card4.png';
import Image5 from '../../assets/Card5.png';
import Image6 from '../../assets/Card6.png';
import Image7 from '../../assets/Card7.png';
import Image8 from '../../assets/Card8.png';
import Image9 from '../../assets/Card9.png';
import Image10 from '../../assets/Card10.png';
import Image11 from '../../assets/Card11.png';
import Image12 from '../../assets/Card12.png';
import Image13 from '../../assets/Card13.png';
import Image14 from '../../assets/Card14.png';
import Image15 from '../../assets/Card15.png';
import Image16 from '../../assets/Card16.png';
import Image17 from '../../assets/Card17.png';
import Image18 from '../../assets/Card18.png';
import Image19 from '../../assets/Card19.png';
import Image20 from '../../assets/Card20.png';
import Image21 from '../../assets/Card21.png';
import Image22 from '../../assets/Card22.png';
import Image23 from '../../assets/Card23.png';
import Image24 from '../../assets/Card24.png';
import Image25 from '../../assets/Card25.png';
import Image26 from '../../assets/Card26.png';
import Image27 from '../../assets/Card27.png';
import Image28 from '../../assets/Card28.png';
import Image29 from '../../assets/Card29.png';
import Image30 from '../../assets/Card30.png';
import Image31 from '../../assets/Card31.png';
import Image32 from '../../assets/Card32.png';
import Image33 from '../../assets/Card33.png';
import Image34 from '../../assets/Card34.png';
import Image35 from '../../assets/Card35.png';
import Image36 from '../../assets/Card36.png';
import Image37 from '../../assets/Card37.png';
import Image38 from '../../assets/Card38.png';
import Image39 from '../../assets/Card39.png';
import Image40 from '../../assets/Card40.png';
import Image41 from '../../assets/Card41.png';


//Array
export const Cards = [
    {
        id: 1,
        title: 'Curso de reciclagem para condutores infratores',
        imageSrc: Image1,
        button: 'saiba mais',
    },
    {
        id: 2,
        title: 'Curso para Taxista - Lei 12.468/11 e Resolução 456/13',
        imageSrc: Image2,
        button: 'saiba mais'
    },
    {
        id: 3,
        title: 'Curso para condutores de veículos de transporte de produtos perigosos',
        imageSrc: Image3,
        button: 'saiba mais'
    },
    {
        id: 4,
        title: 'Curso para condutores de veículo de transporte coletivo de passageiros',
        imageSrc: Image4,
        button: 'saiba mais'
    },
    {
        id: 5,
        title: 'Curso para condutores de veículos de emergência',
        imageSrc: Image5,
        button: 'saiba mais'
    },
    {
        id: 6,
        title: 'Curso para condutores de veículos de transporte escolar',
        imageSrc: Image6,
        button: 'saiba mais'
    },
    {
        id: 7,
        title: 'Curso de atualização para condutores de veículo de transporte de cargas de produtos perigosos',
        imageSrc: Image7,
        button: 'saiba mais'
    },
    {
        id: 8,
        title: 'Curso de atualização para condutores de veículo de transporte coletivo de passageiros',
        imageSrc: Image8,
        button: 'saiba mais'
    },
    {
        id: 9,
        title: 'Curso de atualização para condutores de veículo de transporte de emergência',
        imageSrc: Image9,
        button: 'saiba mais'
    },
    {
        id: 10,
        title: 'Curso de atualização para condutores de veículo de transporte de escolares',
        imageSrc: Image10,
        button: 'saiba mais'
    },
    {
        id: 11,
        title: 'Curso especializado de atualização obrigatório destinado aos profissionais em entrega de mercadorias (motofretista)',
        imageSrc: Image11,
        button: 'saiba mais'
    },
    {
        id: 12,
        title: 'Curso especializado de atualização obrigatório destinado aos profissionais em transporte de passageiros (mototaxista)',
        imageSrc: Image12,
        button: 'saiba mais'
    },
    {
        id: 13,
        title: 'Curso preventivo de reciclagem',
        imageSrc: Image13,
        button: 'saiba mais'
    },
    {
        id: 14,
        title: 'Curso de atualização para renovação da CNH',
        imageSrc: Image14,
        button: 'saiba mais'
    },
    {
        id: 15,
        title: 'Curso para Condutores de Veículos de Aplicativo',
        imageSrc: Image31,
        button: 'saiba mais'
    },
    {
        id: 16,
        title: 'Curso Online NR 06 - Equipamento de Proteção Individual - 16h',
        imageSrc: Image18,
        button: 'saiba mais'
    },
    {
        id: 17,
        title: 'Curso Online NR 10 - Segurança em Instalações e Serviços em Eletricidade - 40h',
        imageSrc: Image22,
        button: 'saiba mais'
    },
    {
        id: 18,
        title: 'Curso Online NR 11 - Transporte, Movimentação, Armazenagem e Manuseio de Materiais - 16h',
        imageSrc: Image23,
        button: 'saiba mais'
    },

    {
        id: 19,
        title: 'Curso Online NR 12 - Segurança no Trabalho em Máquinas e Equipamentos - 16',
        imageSrc: Image25,
        button: 'saiba mais'
    },
    {
        id: 20,
        title: 'Curso Online NR 16 - Atividades e Operações Perigosas - 16h',
        imageSrc: Image26,
        button: 'saiba mais'
    },
    {
        id: 21,
        title: 'Curso Online NR 20 (Básico) - Segurança com Inflamáveis e Combustíveis - 8h',
        imageSrc: Image27,
        button: 'saiba mais'
    },
    {
        id: 22,
        title: 'Curso Online NR 20 (Intermediário Classe I) - Segurança com Inflamáveis e Combustíveis - 16h',
        imageSrc: Image28,
        button: 'saiba mais'
    },
    {
        id: 23,
        title: 'Curso Online NR 20 (Intermediário Classe II e III) - Segurança com Inflamáveis e Combustíveis - 16h',
        imageSrc: Image30,
        button: 'saiba mais'
    },
    {
        id: 24,
        title: 'Curso Online NR 29 - Segurança e Saúde no Trabalho Portuário - 24h',
        imageSrc: Image32,
        button: 'saiba mais'
    },
    {
        id: 25,
        title: 'Curso Online NR 35 - Trabalho em Altura - 16h',
        imageSrc: Image33,
        button: 'saiba mais'
    },
    {
        id: 26,
        title: 'Curso Online NR 33 - Segurança e Saúde nos Trabalhos em Espaços Confinados (16h)',
        imageSrc: Image40,
        button: 'saiba mais'
    },
    {
        id: 27,
        title: 'Pós-Graduação em Gestão e Direito de Trânsito',
        imageSrc: Image19,
        button: 'saiba mais'
    },

    {
        id: 28,
        title: 'Pós-Graduação em Gestão e Educação para o Trânsito',
        imageSrc: Image24,
        button: 'saiba mais'
    },
    // {
    //     id: 15,
    //     title: 'Curso Operador de Empilhadeiras',
    //     imageSrc: Image15,
    //     button: 'saiba mais'
    // },
    
    {
        id: 16,
        title: 'Monitor de Transporte Escolar',
        imageSrc: Image16,
        button: 'saiba mais'
    },

    // {
    //     id: 16,
    //     title: 'Monitor de Transporte Escolar',
    //     imageSrc: Image16,
    //     button: 'saiba mais'
    // },
    {
        id: 17,
        title: 'Curso de noções básicas em Primeiros Socorros',
        imageSrc: Image17,
        button: 'saiba mais'
    },
    // {
    //     id: 17,
    //     title: 'Curso de noções básicas em Primeiros Socorros',
    //     imageSrc: Image17,
    //     button: 'saiba mais'
    // },
    // {
    //     id: 18,
    //     title: 'Curso Online NR 06 - Equipamento de Proteção Individual - 16h',
    //     imageSrc: Image18,
    //     button: 'saiba mais'
    // },
 

    // {
    //     id: 19,
    //     title: 'Pós-Graduação em Gestão e Direito de Trânsito',
    //     imageSrc: Image19,
    //     button: 'saiba mais'
    // },
    {
        id: 20,
        title: 'Curso de Prevenção e Combate a Incêndio',
        imageSrc: Image20,
        button: 'saiba mais'
    },
    // {
    //     id: 20,
    //     title: 'Curso de Prevenção e Combate a Incêndio',
    //     imageSrc: Image20,
    //     button: 'saiba mais'
    // },
    {
        id: 21,
        title: 'Curso de Atendimento ao Cliente',
        imageSrc: Image21,
        button: 'saiba mais'
    },
    // {
    //     id: 21,
    //     title: 'Curso de Atendimento ao Cliente',
    //     imageSrc: Image21,
    //     button: 'saiba mais'
    // },
    // {
    //     id: 22,
    //     title: 'Curso Online NR 10 - Segurança em Instalações e Serviços em Eletricidade - 40h',
    //     imageSrc: Image22,
    //     button: 'saiba mais'
    // },
    // {
    //     id: 23,
    //     title: 'Curso Online NR 11 - Transporte, Movimentação, Armazenagem e Manuseio de Materiais - 16h',
    //     imageSrc: Image23,
    //     button: 'saiba mais'
    // },
  
    // {
    //     id: 24,
    //     title: 'Pós-Graduação em Gestão e Educação para o Trânsito',
    //     imageSrc: Image24,
    //     button: 'saiba mais'
    // },
    
    // {
    //     id: 25,
    //     title: 'Curso Online NR 12 - Segurança no Trabalho em Máquinas e Equipamentos - 16',
    //     imageSrc: Image25,
    //     button: 'saiba mais'
    // },
    // {
    //     id: 26,
    //     title: 'Curso Online NR 16 - Atividades e Operações Perigosas - 16h',
    //     imageSrc: Image26,
    //     button: 'saiba mais'
    // },
    // {
    //     id: 27,
    //     title: 'Curso Online NR 20 (Básico) - Segurança com Inflamáveis e Combustíveis - 8h',
    //     imageSrc: Image27,
    //     button: 'saiba mais'
    // },
    // {
    //     id: 28,
    //     title: 'Curso Online NR 20 (Intermediário Classe I) - Segurança com Inflamáveis e Combustíveis - 16h',
    //     imageSrc: Image28,
    //     button: 'saiba mais'
    // },
    {
        id: 29,
        title: 'Curso de Direção Defensiva',
        imageSrc: Image29,
        button: 'saiba mais'
    },
    // {
    //     id: 29,
    //     title: 'Curso de Direção Defensiva',
    //     imageSrc: Image29,
    //     button: 'saiba mais'
    // },

    // {
    //     id: 30,
    //     title: 'Curso Online NR 20 (Intermediário Classe II e III) - Segurança com Inflamáveis e Combustíveis - 16h',
    //     imageSrc: Image30,
    //     button: 'saiba mais'
    // },
    // {
    //     id: 31,
    //     title: 'Curso para Condutores de Veículos de Aplicativo',
    //     imageSrc: Image31,
    //     button: 'saiba mais'
    // },
    // {
    //     id: 32,
    //     title: 'Curso Online NR 29 - Segurança e Saúde no Trabalho Portuário - 24h',
    //     imageSrc: Image32,
    //     button: 'saiba mais'
    // },
    // {
    //     id: 33,
    //     title: 'Curso Online NR 35 - Trabalho em Altura - 16h',
    //     imageSrc: Image33,
    //     button: 'saiba mais'
    // },
    // {
    //     id: 34,
    //     title: 'Curso para Condutores de Veículos de Aplicativo São Paulo - SP (ConduAPP)',
    //     imageSrc: Image34,
    //     button: 'saiba mais'
    // },
    // {
    //     id: 35,
    //     title: 'Curso de Formação para Condutores de Passageiros por Aplicativo Foz do Iguaçu - PR',
    //     imageSrc: Image35,
    //     button: 'saiba mais'
    // },
    {
        id: 36,
        title: 'Talonário Eletrônico',
        imageSrc: Image36,
        button: 'saiba mais'
    },
    // {
    //     id: 36,
    //     title: 'Talonário Eletrônico',
    //     imageSrc: Image36,
    //     button: 'saiba mais'
    // },
    {
        id: 37,
        title: 'Curso de Atualização para Agente de Trânsito - EAD - Portaria SENATRAN Nº 966/2022',
        imageSrc: Image37,
        button: 'saiba mais'
    },
    // {
    //     id: 37,
    //     title: 'Curso de Atualização para Agente de Trânsito - EAD - Portaria SENATRAN Nº 966/2022',
    //     imageSrc: Image37,
    //     button: 'saiba mais'
    // },
    {
        id: 38,
        title: 'Curso de Formação para Agente de Trânsito - EAD - Portaria SENATRAN Nº 966/2022',
        imageSrc: Image38,
        button: 'saiba mais'
    },
    // {
    //     id: 38,
    //     title: 'Curso de Formação para Agente de Trânsito - EAD - Portaria SENATRAN Nº 966/2022',
    //     imageSrc: Image38,
    //     button: 'saiba mais'
    // },
    {
        id: 39,
        title: 'Direção Defensiva para Instrutores: Foco em Intuições Físicas',
        imageSrc: Image39,
        button: 'saiba mais'
    },
    // {
    //     id: 39,
    //     title: 'Direção Defensiva para Instrutores: Foco em Intuições Físicas',
    //     imageSrc: Image39,
    //     button: 'saiba mais'
    // },

    // {
    //     id: 40,
    //     title: 'Curso Online NR 33 - Segurança e Saúde nos Trabalhos em Espaços Confinados (16h)',
    //     imageSrc: Image40,
    //     button: 'saiba mais'
    // },
    {
        id: 41,
        title: 'Curso para Condutor e Monitor de Veículos para Passageiros com Mobilidade Reduzida',
        imageSrc: Image41,
        button: 'saiba mais'
    },
    // {
    //     id: 41,
    //     title: 'Curso para Condutor e Monitor de Veículos para Passageiros com Mobilidade Reduzida',
    //     imageSrc: Image41,
    //     button: 'saiba mais'
    // },

];


export default function ArrayCards() {

    // const navigate = useNavigate();

    // const Alert = (index) => {
    //     alert('teste')
    // }

    return (
        <>
            <div className={styles.PaiCards}>

                {Cards.map((item, index) => (
                    <figure key={index}>

                        <section className={styles.Cards}>
                            <img src={item.imageSrc} alt={item.title} className={styles.Imagem} />


                            <section>
                                <figcaption>{item.title}</figcaption>



                                {/* <Link to={`/teste/${item.id}`} className={styles.Link}> */}


                                <button key={index} variant="warning" size="lg">


                                    {item.button}

                                </button>



                            </section>
                        </section>
                    </figure>
                ))}


            </div>


        </>


    );


}



