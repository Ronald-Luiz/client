import React, { useState } from 'react';

const MobileSelector = () => {
    const [selectedSection, setSelectedSection] = useState('todosCursos');

    const handleSelectChange = (event) => {
        setSelectedSection(event.target.value);
    };

    return (
        <div>
            {/* Seletor em mobile */}
            <select value={selectedSection} onChange={handleSelectChange}>
                <option value="todosCursos">Todos os cursos</option>
                <option value="especializados">Especializados</option>
                <option value="taxista">Taxista e Condutores de APP</option>
            </select>

            {/* Lista original oculta */}
            <ul>
                {/* Seção 1 */}
                <section style={{ display: selectedSection === 'todosCursos' ? 'block' : 'none' }}>
                    <li>Todos os cursos</li>
                    <li>Especializados formados</li>
                    <li>Especializados Atualizados</li>
                    <li>Reciclagem e Atualização da CNH</li>
                </section>

                {/* Seção 2 */}
                <section style={{ display: selectedSection === 'especializados' ? 'block' : 'none' }}>
                    <li>Taxista e Condutores de APP</li>
                    <li>Cursos NR</li>
                    <li>Pós-graduação</li>
                    <li>Cursos livres</li>
                </section>
            </ul>
        </div>
    );
};

export default MobileSelector;
