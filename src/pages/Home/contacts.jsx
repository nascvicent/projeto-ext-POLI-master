import React from 'react';
import './contacts.css'; // Importando o arquivo CSS de estilos

function Contacts() {
    return (
        <div className='contacts-container'>
            <div className='text-container'>
                <h1 className="text">Contatos</h1>
                <span>
                    <p>Entre em contato conosco para mais informações sobre nossos serviços e como podemos ajudá-lo.</p>
                    <p>Telefone: (81) 3182-7758 - CISAM</p>
                    <p>Telefone: (81) 3184-1200 - Hospital Universitário Oswaldo Cruz</p>
                    <p>Telefone: (81) 3181-7100 - PROCAPE</p>
                </span>
            </div>
        </div>
    );
}

export default Contacts;
