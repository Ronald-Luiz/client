import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'

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
            setCurso(Cards[2].title);
        }
    }, [Cards]);


    //estados
    const [nome, setNome] = useState('');
    const [CPF, setCPF] = useState('');
    const [renach, setRenach] = useState('');
    const [cnh, setCNH] = useState('');
    const [curso, setCurso] = useState('');

    //Funcao pra enviar o formulario e suas variaveis
    const Enviar = () => {
        const nome2 = document.getElementById('nome').value;
        const cpf2 = document.getElementById('cpf').value;
        const cnh2 = document.getElementById('cnh').value;
        const numeroTelefone = '5521971488620';
        const mensagemWhatsapp = `${curso}
        
        Olá! Estou interessado(a) no ${curso} e gostaria de obter mais informações.
      
        Nome: ${nome}
        CPF: ${CPF}
        Renach: ${renach}
        CNH: ${cnh}
      
        Aguardo seu retorno. Obrigado!`;

        if (nome2 == '' || cpf2 == '' || cnh2 == '') {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Por favor, preencha todos os campos!",
            });
        } else {
            const urlWhatsapp = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagemWhatsapp)}`;
            Swal.fire({
                title: "Redirecionando",
                text: "aguarde...",
                icon: "success"
            });
            window.location.href = urlWhatsapp;
        };
    }



    console.log(curso)



    return (
        <div>
            <h2 className={styles.titulo}>Curso para condutores de veículos de transporte de produtos perigosos</h2>
            <NavPage />

            <div className={styles.caixaPai}>


                <div className={styles.caixaFilho}>

                    <section className={styles.section1}>
                        <p className={styles.p1}>
                            Valor do Curso para o Estado do
                            <strong>Rio de janeiro</strong>
                        </p>
                    </section>

                    <section className={styles.section2}>
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
                            index === 2 && (
                                <h3>

                                    {item.title}

                                </h3>

                            )
                        ))}


                        <div className="alert alert-primary">
                            <small>Preencha o formulário abaixo para validar se está apto a realizar o curso.</small>
                        </div>

                        <form>	
                            <label>Nome completo:</label>
                            <input id='nome' type='text' className='form-control' onChange={(e) => setNome(e.target.value)}></input>
                            <label>CPF:</label>
                            <input id='cpf' type='number' className="form-control" maxLength='14' onChange={(e) => setCPF(e.target.value)}></input>
                            {/* <label>Formulário RENACH:</label>
                            <input type='text' className="form-control" maxLength="11" onChange={(e) => setRenach(e.target.value)}></input> */}
                            <label id='cnh'>Categoria CNH:</label>
                            <input type='text' className="form-control" maxLength="11" onChange={(e) => setCNH(e.target.value)}></input>
                        </form>

                    </section>

                    <section className={styles.section3}>
                        <h2>R$ 350,00 à vista</h2>
                        <p>Ou parcelado no cartão</p>
                        <Button type="button" variant="warning" size="lg" onClick={Enviar}>MATRICULE-SE</Button>

                        <p className={styles.p2}>
                            <strong>DÚVIDAS</strong>
                            <p><CustomIcon icon='whatsapp' color='#28a745' size={25} />  (21) 97148-8620</p>
                        </p>
                    </section>

                </div>


                <div className={styles.caixaFilho2}>


                    <div className={styles.div1}>
                        <h3>A quem se destina o curso?</h3>
                        <p>- Aos condutores que pretendem exercer atividade remunerada dirigindo veículos de transporte coletivo de passageiros, de escolares, de produtos perigosos, de emergência e de carga indivisível.</p>
                        <div className={styles.line}></div>
                        <h3>Objetivos do curso</h3>
                        <p>- Promover a Formação/Capacitação de condutores em Cursos Especializados referentes à condução de veículo de transporte coletivo de passageiros, de escolares, de produtos perigosos, de emergência e de carga indivisível;</p>
                        <p>- Estes cursos são requisitos obrigatórios para o exercício da atividade remunerada correspondente.</p>
                        <div className={styles.line}></div>
                        <h3>Prazo de validade</h3>
                        <p>- 5 anos. </p>
                        <div className={styles.line}></div>
                        <h3>Carga horária</h3>
                        <p>- 50 horas/aula.</p>

                        <div className={styles.line}></div>
                        <h3>Quais o requisitos para fazer o curso?</h3>
                        <p>- Ser maior de 21 anos;</p>
                        <p>- Para o <strong>Curso de Transporte de Coletivo de Passageiros e Escolar</strong> estar habilitado, no mínimo, na categoria "D";</p>
                        <p>- Para o <strong>Curso de Transporte Emergência</strong> estar habilitado em uma das categorias “A”, “B”, “C”, “D” ou “E”;</p>
                        <p>- Para o <strong>Curso de Transporte de Produtos Perigosos</strong> estar habilitado em uma das categorias “B”, “C”, “D” ou “E”;</p>
                        <p>- Para o <strong>Curso de Transporte de Carga Indivisível</strong> estar habilitado, no mínimo, na categoria “C”;</p>
                        <p>- Não estar cumprindo pena de suspensão do direito de dirigir, cassação da Carteira Nacional de Habilitação - CNH, pena decorrente de crime de trânsito, bem como não estar impedido judicialmente de exercer seus direitos.</p>
                    </div>


                </div>

                <div className={styles.div2}>
                    <section>
                        <figure>
                            <img alt="" src="https://i.imgur.com/tCynsAV.png" />
                            <figcaption>CONCLUA O CURSO EM 7 DIAS</figcaption>
                            <p>ESTUDE DE ONDE ESTIVER, A QUALQUER HORA DO DIA, POR MEIO DE COMPUTADOR OU CELULAR. CONTEÚDO DISPONÍVEL 24H POR DIA</p>
                        </figure>


                    </section>

                    <section>
                        <figure>
                            <img alt="" src="https://i.imgur.com/Rk6NyHd.png" />
                            <figcaption>CONTEÚDO ESPECIALIZADO</figcaption>
                            <p>CONTEÚDOS CLAROS E DINÂMICOS MINISTRADOS POR RENOMEADO ESPECIALISTA DE TRÂNSITO RONALDO CARDOSO</p>
                        </figure>


                    </section>

                    <section>
                        <figure>
                            <img alt="" src="https://i.imgur.com/K4aHBa0.png" />
                            <figcaption>MELHOR CUSTO-BENEFÍCIO</figcaption>
                            <p>PARCELAMENTO EM ATÉ 10X SEM JUROS NO CARTÃO OU DESCONTO ESPECIAL EM DEPÓSITO OU TRANSFERÊNCIA BANCÁRIA. ENTRE EM CONTATO</p>
                        </figure>


                    </section>

                    <section>
                        <figure>
                            <img alt="" src="https://i.imgur.com/VFYn2Yr.png" />
                            <figcaption>SUPORTE E TUTORIA</figcaption>
                            <p>ATENDIMENTO COM SUPORTE E TUTORES POR MEIO DE TELEFONE 0800, WHATSAPP, E-MAIL E CHAT PARA LHE AUXILIAR NO CURSO SEMPRE QUE FOR PRECISO</p>
                        </figure>


                    </section>


                </div>

            </div>

            <Footer />
        </div>
    )
}


