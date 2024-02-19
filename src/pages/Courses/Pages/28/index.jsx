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



    console.log(curso)



    return (
        <>
            <h2 className={styles.titulo}>Pós-Graduação em Gestão e Educação para o Trânsito</h2>
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
                            index === 27 && (
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
                        {/* <h2>R$ 110,00 à vista</h2> */}
                        <Button type="button" variant="warning" size="lg" onClick={Enviar}>Fale com consultor</Button>

                        <p className={styles.p2}>
                            <strong>DÚVIDAS</strong>
                            <p><CustomIcon icon='whatsapp' color='#28a745' size={25} />  (21) 97148-8620</p>
                        </p>
                    </section>

                </div>

            </div>

            <Footer />
        </>
    )
}


