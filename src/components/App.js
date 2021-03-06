import React, {Fragment} from 'react';
import Cookies from 'universal-cookie';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import RouterComponent from './RouterComponent/RouterComponent';
import FooterComponent from './FooterComponent/FooterComponent';
import ModalComponent from './ModalComponent/ModalComponent';
import {BrowserRouter as Router} from "react-router-dom";
import InicioComponent from './InicioComponent/InicioComponent';
import NosotrosComponent from './NosotrosComponent/NosotrosComponent';
import ServiciosComponent from './ServiciosComponent/ServiciosComponent';
import ContactoComponent from './ContactoComponent/ContactoComponent';

// Testimonial API
// 

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cookies: this.cookiesAceptadas()            
    }    

    this.menuLinks = [
      {url: '/inicio', texto: 'Inicio',activo: true, homePage: true, componente: <InicioComponent />},
      {url: '/nosotros', texto: 'Nosotros',activo: false, homePage: false, componente: <NosotrosComponent />},
      {url: '/servicios', texto: 'Servicios',activo: false, homePage: false, componente: <ServiciosComponent />},
      {url: '/contacto', texto: 'Contacto',activo: false, homePage: false, componente: <ContactoComponent />}      
    ];
  }

  mostrarModalCookies() {
    if(this.state.cookies === undefined) {
      return (
        <ModalComponent 
          title="AVISO DE COOKIES"
          message="Utilizamos cookies para mejorar su experiencia en nuestro sitio. Para continuar navegando seleccione la configuración de Cookies que desea utilizar."
          buttons={
            [
              {method: this.establecerCookies.bind(this,'todas'), label: 'Aceptar Todas', classButton: 'modalButton'},
              {method: this.establecerCookies.bind(this,'necesarias'), label: 'Sólo las necesarias', classButton: 'modalButton'}                            
            ]
          }
        />  
      );      
    }   
    
    return null;
  }

  establecerCookies(valor) {
    let cookies = new Cookies();

    cookies.set('cookies_aceptadas',valor);  

    this.setState(
      {cookies: valor}
    );
  }

  cookiesAceptadas() {
    let cookies = new Cookies();

    return cookies.get('cookies_aceptadas')
  }

  render() {    
    return (
      <Fragment>
        {this.mostrarModalCookies()}              
        <Router>
          <HeaderComponent menuLinks={this.menuLinks} />
          <RouterComponent menuLinks={this.menuLinks} />          
        </Router>
        <FooterComponent />
      </Fragment>
    );
  }
}

export default App;
