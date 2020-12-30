import React, { Component } from 'react'; export default class about extends Component {
    render() {
      return (
        <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="profile" />
          </div>
          <div className="nine columns main-col">
            <h2>Sobre Mi</h2>
            <p>Soy una profesional capacitada para desempeñame en diferentes roles,tales  como  Desarrollador,  Tester,  Analista  Funcional,  Arquitecto  de Software, DBA,   Administrador de Redes, Asesor   en   Tecnología, Asegurador de Calidad (QA), Auditor de Sistemas, Consultor en informática.
               Mi objetivo como profesional es  sumarme a organizaciones civiles, bancos, entidades financieras,
                empresas comerciales,industrias o consultoras para potenciar mi capacidad.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Detalles de Contacto</h2>
                <p className="address">
                  <span>Ana Karina Davidovich</span><br />
                  <span>San Miguel de Tucumán, Argentina
                  </span><br />
                  <span>54(381)6920078</span><br />
                  <span>thedeicider@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="https://drive.google.com/file/d/1obUzUFTydNJ6MAE2gtOBJG0VhG0pLKBi/view?usp=sharing" className="button"><i className="fa fa-download" />Descargar Curriculum</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section>
      
      )
    }
  }