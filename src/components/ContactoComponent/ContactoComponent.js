import React from 'react';
import './ContactoComponent.css';
import FormularioContactoComponent from '../FormularioContactoComponent/FormularioContactoComponent'

class ContactoComponent extends React.Component {
    render() {
        return(
            <div className="contacto-box">
                <h1>┬íContacta con nuestro equipo!</h1>
                <FormularioContactoComponent />
            </div>
        );
    }
}

export default ContactoComponent;