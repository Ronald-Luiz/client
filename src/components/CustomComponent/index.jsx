// CustomComponent.js
import React, { useState } from 'react';


import { Link, useNavigate } from 'react-router-dom'; // Make sure to import Link if you are using it

import { Form } from 'react-bootstrap'; // Assuming you are using Bootstrap components

import styles from '../CustomComponent/style.module.scss'; // Make sure to import your CSS module

const CustomComponent = () => {
    const navigate = useNavigate();
    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (event) => {
        const selectedOption = event.target.value;
        setSelectedValue(selectedOption);

        switch (selectedOption) {
            case "1":
                navigate('/home');
                break;
            case "2":
                navigate('/especializados');
                break;
            case "3":
                navigate('/atualizados');
                break;
            case "4":
                navigate('/reciclagem');
                break;
            case "5":
                navigate('/condutoresapp');
                break;
            case "6":
                navigate('/nr');
                break;
            case "7":
                navigate('/graduacao');
                break;
            case "8":
                navigate('/livres');
                break;
            // Add more cases as needed
            default:
            // Default logic if no case matches
        }
    };

    return (

        <main>

            <div className={styles.divPai}>

                <Form.Select
                    className={styles.selector}
                    aria-label="Default select example"
                    onChange={handleSelectChange}
                    value={selectedValue}
                >
                    <option value="">Selecione o curso</option>
                    <option value="1">Todos os cursos</option>
                    <option value="2">Especializados Formação</option>
                    <option value="3">Especializados Atualização</option>
                    <option value="4">Reciclagem e Atualização da CNH</option>
                    <option value="5">Taxista e condutores de APP</option>
                    <option value="6">Cursos NR</option>
                    <option value="7">Pós-Graduação</option>
                    <option value="8">Cursos livres</option>




                    {/* Add more options as needed */}
                </Form.Select>


                <ul>
                    {/* Seção 1 */}
                    <section>
                        <div className={styles.line}>
                            <li>
                                <Link to='/home'>
                                    Todos os cursos
                                </Link>
                            </li>
                        </div>

                        <div className={styles.line}>
                            <li>
                                <Link to='/especializados'>
                                    Especializados Formação
                                </Link>
                            </li>
                        </div>

                        <div className={styles.line}>
                            <li>
                                <Link to='/atualizados'>
                                    Especializados Atualização
                                </Link>
                            </li>
                        </div>

                        <div className={styles.line}>
                            <li>
                                <Link to='/reciclagem'>
                                    Reciclagem e Atualização da CNH
                                </Link>
                            </li>
                        </div>

                    </section>

                    {/* Seção 2 */}
                    <section>

                        <div className={styles.line}>
                            <li>
                                <Link to='/condutoresapp'>
                                    Taxista e Condutores de APP
                                </Link>
                            </li>
                        </div>

                        <div className={styles.line}>
                            <li>
                                <Link to='/nr'>
                                    Cursos NR
                                </Link>
                            </li>
                        </div>

                        <div className={styles.line}>
                            <li>
                                <Link to='/graduacao'>
                                    Pós-graduação
                                </Link>
                            </li>
                        </div>

                        <div className={styles.line}>
                            <li>
                                <Link to='/livres'>
                                    Cursos livres
                                </Link>
                            </li>
                        </div>

                    </section>
                </ul>


                {/* <h1>Seja muito bem vindo!</h1> */}
                <section className={styles.SectionMain}>


                    {/* <figure>
        <img className={styles.CNH} src={CNH} alt='' />
        <figcaption></figcaption>
    </figure> */}

                </section>

                <section className={styles.SectionMain}>

                    <a href='https://api.whatsapp.com/send?phone=5521971488620' className={styles.whatsapp}>
                        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMjYxOSA1MDYgMTIwIDEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogIzI3ZDA0NTsKICAgICAgfQoKICAgICAgLmNscy0yLCAuY2xzLTUgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgc3Ryb2tlOiAjZmZmOwogICAgICAgIHN0cm9rZS13aWR0aDogNXB4OwogICAgICB9CgogICAgICAuY2xzLTMgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgIH0KCiAgICAgIC5jbHMtNCB7CiAgICAgICAgc3Ryb2tlOiBub25lOwogICAgICB9CiAgICA8L3N0eWxlPjwvZGVmcz48ZyBkYXRhLW5hbWU9Ikdyb3VwIDM2IiBpZD0iR3JvdXBfMzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzMDAgNzMpIj48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjYwIiBjeT0iNjAiIGRhdGEtbmFtZT0iRWxsaXBzZSAxOCIgaWQ9IkVsbGlwc2VfMTgiIHI9IjYwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMTkgNDMzKSIvPjxnIGRhdGEtbmFtZT0iR3JvdXAgMzUiIGlkPSJHcm91cF8zNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjU0IDM4NikiPjxnIGRhdGEtbmFtZT0iR3JvdXAgMzQiIGlkPSJHcm91cF8zNCI+PGcgY2xhc3M9ImNscy0yIiBkYXRhLW5hbWU9IkVsbGlwc2UgMTkiIGlkPSJFbGxpcHNlXzE5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5NCA3NSkiPjxjaXJjbGUgY2xhc3M9ImNscy00IiBjeD0iMzEuNSIgY3k9IjMxLjUiIHI9IjMxLjUiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNSIgY3g9IjMxLjUiIGN5PSIzMS41IiByPSIyOSIvPjwvZz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xNDI0LDE5MWwtNC42LDE2LjMsMTYuOS00LjcuOS01LjItMTEsMy41LDIuOS0xMC41WiIgZGF0YS1uYW1lPSJQYXRoIDEyNiIgaWQ9IlBhdGhfMTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTMyNSAtNjgpIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTI2Niw5MGMwLS4xLDMuNS0xMS43LDMuNS0xMS43bDguNCw3LjlaIiBkYXRhLW5hbWU9IlBhdGggMTI3IiBpZD0iUGF0aF8xMjciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTY1IDQzKSIvPjwvZz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xNDM5LjMsMTYwLjZhOS40LDkuNCwwLDAsMC0zLjksNi4xYy0uNSwzLjksMS45LDcuOSwxLjksNy45YTUwLjg3Niw1MC44NzYsMCwwLDAsOC42LDkuOCwzMC4xODEsMzAuMTgxLDAsMCwwLDkuNiw1LjEsMTEuMzc4LDExLjM3OCwwLDAsMCw2LjQuNiw5LjE2Nyw5LjE2NywwLDAsMCw0LjgtMy4yLDkuODUxLDkuODUxLDAsMCwwLC42LTIuMiw1Ljg2OCw1Ljg2OCwwLDAsMCwwLTJjLS4xLS43LTcuMy00LTgtMy44cy0xLjMsMS41LTIuMSwyLjYtMS4xLDEuNi0xLjksMS42LTQuMy0xLjQtNy42LTQuNGExNS44NzUsMTUuODc1LDAsMCwxLTQuMy02cy42LS43LDEuNC0xLjhhNS42NjQsNS42NjQsMCwwLDAsMS4zLTIuNGMwLS41LTIuOC03LjYtMy41LTcuOUExMS44NTIsMTEuODUyLDAsMCwwLDE0MzkuMywxNjAuNloiIGRhdGEtbmFtZT0iUGF0aCAxMjgiIGlkPSJQYXRoXzEyOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzMjYuMzMyIC02OC40NjcpIi8+PC9nPjwvZz48L3N2Zz4=" />
                        <span className={styles.alertWapp} > 1 </span>
                    </a>

                    <div className={styles.msg1}>Fale agora com nossa Equipe de Vendas!</div>

                </section>
            </div>

        </main>
    );
};

export default CustomComponent;
