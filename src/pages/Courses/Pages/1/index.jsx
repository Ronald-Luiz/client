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
            setCurso(Cards[0].title);
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

    // console.log(curso)



    return (
        <div >

            <h2 className={styles.titulo}>Curso de reciclagem para condutores infratores</h2>

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
                            index === 0 && (
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

                        <h2>R$ 110,00 à vista</h2>
                        <p>Ou parcelado no cartão</p>
                        <Button type="button" variant="warning" size="lg" onClick={Enviar}>MATRICULE-SE</Button>

                        <p className={styles.p2}>
                            <strong>DÚVIDAS</strong>
                            <p><CustomIcon icon='whatsapp' color='#28a745' size={25} />  (21) 97148-8620</p>
                        </p>
                    </section>

                </div>


                <div className={styles.caixaFilho2}>
                    <h1>Volte a dirigir! Curso de reciclagem para condutores infratores</h1>

                    <div className={styles.div1}>
                        <h3>A quem se destina o curso?</h3>
                        <p>O infrator será submetido a curso de reciclagem (Artigo 268 do Código de Trânsito Brasileiro - CTB): </p>

                        <p>- Quando suspenso do direito de dirigir.</p>

                        <p>- Quando se envolver em acidente grave para o qual haja contribuído, independentemente de processo judicial.</p>

                        <p>- Quando condenado judicialmente por delito de trânsito.</p>

                        <p>- A qualquer tempo, se for constatado que o condutor está colocando em risco a segurança do trânsito.</p>
                        <div className={styles.line}></div>
                        <h3>Carga horária</h3>
                        <p>- A carga horária total é de 30 horas-aula, período mínimo para conclusão é de 4 dias.</p>
                        <div className={styles.line}></div>
                        <h3>O que você vai aprender</h3>
                        <p>São 4 módulos de estudo:</p>
                    </div>

                    <div className={styles.div2}>
                        <table class={styles.table}>
                            <thead>
                                <tr className={styles.tr1}>
                                    <th scope="col">Módulo</th>
                                    <th scope="col">Carga horária</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className={styles.tr2}>
                                    <td>Legislação de Transito</td>
                                    <td>12 h/a</td>
                                </tr>

                                <tr className={styles.tr3}>
                                    <td>Direção Defensiva</td>
                                    <td>08 h/a</td>
                                </tr>

                                <tr className={styles.tr4}>
                                    <td>Noções de Primeiros Socorros</td>
                                    <td>04 h/a</td>
                                </tr>

                                <tr className={styles.tr5}>
                                    <td>Relacionamento Interpessoal</td>
                                    <td>06 h/a</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className={styles.div3}>
                        <section className={styles.section1}>
                            <h3>Aprenda com o melhor professor!</h3>
                            <h3>Conteúdo claro e dinâmico ministrado por renomeado Especialista de Trânsito</h3>

                            <figure>
                                <img src={Image} alt='' />

                                <figcaption>
                                    <strong>Ronaldo Cardoso</strong>
                                    Palestrante, atua na área de trânsito desde 1998; Especialista pós-graduado em Gestão e Segurança no Trânsito; Instrutor Teórico e Prático nas categorias A, B, C, D e E com formação e atuação como Diretor Geral e Ensino em Centro de Formação de Condutores (CFC); Professor em cursos preparatórios para concursos na área de trânsito; Bacharel em Sistemas de Informação pela Universidade Estadual de Minas Gerais (UEMG – Carangola); Analista Educacional pela Secretaria de Estado de Educação/MG.
                                </figcaption>

                            </figure>
                        </section>

                    </div>


                    <div className={styles.div4}>
                        <section className={styles.div4Section1}>
                            <h3>Informações do curso</h3>
                            <p>✅O Curso de Reciclagem possui 30h de aulas-aula e pode ser feito em <strong>4 Dias.</strong></p>

                            <p>Você escolhe quando e onde fazer o curso. Não precisa aguardar para formar turma - <strong>Curso 100% Online.</strong></p>

                            <p>✅ Nosso curso pode ser feito em qualquer Celular ou Computador conectado à internet. Estude de onde estiver, a qualquer hora do dia.</p>

                            <p>✅ O conteúdo do curso é claro e dinâmico, com <strong>videoaula do renomeado Especialista de Trânsito Ronaldo Cardoso.</strong></p>

                            <p>✅ O Curso conta com Língua Brasileira de Sinais disponível para auxiliar os deficientes auditivos.</p>

                            <p><strong>✅ Atendimento diferenciado com suporte e Tutores por meio de telefone 0800, WhatsApp, e-mail e chat para lhe auxiliar no Curso sempre que for preciso.</strong></p>

                            <p>✅ O Certificado de Conclusão do Curso fica disponível para impressão ou download imediatamente após a conclusão das aulas e aprovação nas avaliações.</p>

                            <p>✅ Por ser um Curso de Reciclagem, após emitir o certificado, será necessário fazer prova junto ao DETRAN de sua CNH.</p>

                            <p>✅ Este serviço é cobrado pelo DETRAN de sua CNH.</p>
                        </section>

                        <section className={styles.div4Section2}>
                            <figure>
                                <img src={Image2} alt='' />
                            </figure>
                        </section>

                        <div className={styles.line}></div>


                        <section className={styles.div4Section3}>
                            <h3>Fale com um consultor e tire todas as suas dúvidas!</h3>
                            <h3>(21) 97148-8620</h3>

                            <figure>
                                <a href="https://api.whatsapp.com/send?phone=5521971488620">
                                    <img src={Image3} alt='' />
                                </a>
                            </figure>

                        </section>


                    </div>

                </div>

            </div>

            <Footer />
        </div>
    )
}


