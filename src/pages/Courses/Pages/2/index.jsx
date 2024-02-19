import React, { useEffect, useState } from 'react';


import NavPage from '../NavPages/index.jsx'

import Footer from '../../../../components/Footer/index.jsx';

import styles from './style.module.scss'

import ArrayCards, { Cards } from '../../../../components/Cards/index.jsx';

import CustomIcon from '../../../../components/CustomIcons/index.jsx';


//imagens
//Professor
import Image from '../../../../assets/Ronaldo.png';

//Valido em todo brasil
import Image2 from '../../../../assets/Valido.png';

//botao
import Image3 from '../../../../assets/button.png';






import { Button } from 'react-bootstrap';


export default function Pag1() {

    useEffect(() => {
        // Rola para o topo da página quando o componente é montado
        window.scrollTo(0, 0);
    }, []);


    useEffect(() => {
        // Atualiza o estado com o título do primeiro item quando Cards muda
        if (Cards.length > 0) {
            setCurso(Cards[1].title);
        }
    }, [Cards]);


    //estados
    // const [nome, setNome] = useState('');
    // const [CPF, setCPF] = useState('');
    // const [renach, setRenach] = useState('');
    // const [cnh, setCNH] = useState('');
    const [curso, setCurso] = useState('');


    //Funcao pra enviar o formulario e suas variaveis
    const Enviar = () => {
        const numeroTelefone = '5521971488620';
        const mensagemWhatsapp = `

        Olá! Estou interessado(a) no ${curso} e gostaria de obter mais informações.

        Aguardo seu retorno. Obrigado!`;

        const urlWhatsapp = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagemWhatsapp)}`;

        window.location.href = urlWhatsapp;
    };



    return (
        <div>

            <h2 className={styles.titulo}>Curso para Taxista</h2>
            <NavPage />

            <div className={styles.caixaPai}>


                <div className={styles.caixaFilho}>

                    <section className={styles.section1}>
                        <p className={styles.p1}>
                            Valor do Curso para o Estado do
                            <strong>Rio de janeiro</strong>
                        </p>
                    </section>

                    <section className={styles.section3}>
                        {/* <p>Estado</p>
                        <Form.Select className={styles.Form} size="sm" aria-label="Default select example">
                            <option>Selecione um estado</option>
                            <option value="1">Rio de Janeiro</option>
                            <option value="2">Sergipe</option>
                            <option value="3">Alagoas</option>
                            <option value="4">Maranhão</option>
                            <option value="5">Paraná</option>
                            <option value="6">Rio Grande do Sul</option>
                            <option value="7">Pernambuco</option>
                            <option value="8">Distrito Federal</option>
                            <option value="9">Santa Catarina</option>
                            <option value="10">Amazonas</option>
                            <option value="11">Espírito Santo</option>
                            <option value="12">Tocantins</option>
                        </Form.Select> */}

                        {Cards.map((item, index) => (
                            // Verifica se o índice é igual a 1 (item 1 no array)
                            index === 1 && (
                                <h3>

                                    {item.title}

                                </h3>

                            )
                        ))}



                        <h2>R$ 180,00 à vista</h2>
                        <p>Ou parcelado no cartão</p>


                        <Button variant="warning" size="lg" onClick={Enviar}>MATRICULE-SE</Button>

                        <p className={styles.p2}>
                            <strong>DÚVIDAS</strong>
                            <p><CustomIcon icon='whatsapp' color='#28a745' size={25} />  (21) 97148-8620</p>
                        </p>
                    </section>

                </div>


                <div className={styles.caixaFilho2}>


                    <div className={styles.div1}>
                        <h3>O Curso para Taxista está na modalidade online (EAD). Na LM Cursos de Trânsito você encontra um conteúdo online especializado para TAXISTA.</h3>

                        <p>A Lei 12.468/11 regulamenta a profissão de taxista e dá outras providências. Ela reconhece a profissão e estabelece algumas normas em seus artigos sobre o transporte privativo de passageiros.  </p>

                        <p>Com um conteúdo claro e objetivo, o aluno que optar por este curso terá o esclarecimento sobre essa profissão e acessará o conteúdo regulamentado na Lei 12.468/11 e Resolução 456/13.</p>

                    </div>
                    <Button onClick={Enviar}>Clique e tire suas duvidas</Button>

                    <div className={styles.div3}>


                        <section>
                            <figure>
                                <img alt="" src="https://i.imgur.com/C7Ol0uI.png" />
                                <figcaption>CARGA HORÁRIA E PRAZO</figcaption>
                            </figure>

                            <ul>
                                <li>Curso com 40 horas-aula para o município do Rio de Janeiro;</li>
                                <li>Curso com 28 horas-aula para outros municípios;</li>
                                <li>Prazo mínimo legal de conclusão: 4 dias para o município do Rio de Janeiro;</li>
                                <li>Prazo mínimo legal de conclusão: 3 dias para outros municípios.</li>
                            </ul>

                        </section>

                        <section>
                            <figure>
                                <img alt="" src="https://i.imgur.com/hZDqVad.png" />
                                <figcaption>FORMA DE PAGAMENTO</figcaption>
                            </figure>
                            <p>Pague à vista com boleto ou parcele em até 10 vezes SEM JUROS no cartão de crédito. Desconto especial para depósito bancário Entre em contato para saber mais informações.</p>

                        </section>

                        <section>
                            <figure>
                                <img alt="" src="https://i.imgur.com/Q32wDq1.png" />
                                <figcaption>QUEM PODE FAZER O CURSO?</figcaption>
                            </figure>

                            <ul>
                                <li>Motoristas (Titulares e Auxiliares) do Serviço de Transporte Individual de Passageiros em Veículos de Aluguel a Taxímetro;</li>
                                <li>Possuir a carteira nacional de habilitação nas categorias B, C, D ou E.</li>
                            </ul>

                        </section>

                        <section>
                            <figure>
                                <img alt="" src="https://i.imgur.com/PhtiwmB.png" />
                                <figcaption>FORMA DE REALIZAÇÃO</figcaption>
                            </figure>

                            <p>Inteiramente a distância (EAD). Com acesso à internet você poderá estudar usando um computador, tablet, notebook ou mesmo um smartphone.</p>
                        </section>

                        <section>
                            <figure>
                                <img alt="" src="https://i.imgur.com/YWkJYni.png" />
                                <figcaption>CERTIFICADO</figcaption>
                            </figure>

                            <p>Para ser aprovado e obter seu certificado é exigido no mínimo 50% de aprovação. O Curso para Taxista tem validade de 5 anos. </p>
                        </section>


                        <section>
                            <figure>
                                <img alt="" src="https://i.imgur.com/Q1pMB89.png" />
                                <figcaption>CONTEÚDO DO CURSO</figcaption>
                            </figure>

                            <p>Estude com conteúdos claros e dinâmicos, enriquecidos com vídeos e simulados disponíveis 24 horas por dia.</p>
                        </section>

                        <section>
                            <figure>
                                <img alt="" src="https://i.imgur.com/zXbkvCx.png" />
                                <figcaption>ACESSIBILIDADE</figcaption>
                            </figure>

                            <p>O curso conta com Língua Brasileira de Sinais - LIBRAS disponível para auxiliar os deficientes auditivos.</p>
                        </section>

                        {/* <section>
                            <figure>
                                <img alt="" src="https://i.imgur.com/frP52Qg.png" />
                                <figcaption>CIDADES CREDENCIADAS</figcaption>
                            </figure>
                        </section> */}


                    </div>


                    <div className={styles.div4}>



                    </div>

                </div>

            </div>

            <Footer />
        </div>
    )
}


