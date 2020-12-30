import React, { Component } from 'react'; export default class resume extends Component {
    render() {
      return (
        <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Educación</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Universidad Siglo 21</h3>
                <p className="info">Analista Universitario en Sistemas <span>•</span> <em className="date">Junio 2020</em></p>
               <p>Graduado</p>
              </div>
            </div> {/* item end */}

            <div className="row item">
              <div className="twelve columns">
                <h3>Universidad Siglo 21</h3>
                <p className="info">Licenciatura en Informática <span>•</span> <em className="date">Desde junio 2016</em></p>
                <p>
                Cursando
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Universidad Tecnológica Nacional - FRT</h3>
                <p className="info">Ingeniería en Sistemas de información <span>•</span> <em className="date">March 2012</em></p>
                <p>
                Incompleto
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Experiencia </span></h1>
          </div>
          <div className="nine columns main-col">
          <div className="row item">
              <div className="twelve columns">
                <h3>IT Solutions Tucuman.</h3>
                <p className="info">CONSULTORA DE SISTEMAS <span>•</span> <em className="date">2016 - Actualidad</em></p>
                <p>
                Confeccióne   implementación   de planes   de   acciónpreventivos   y correctivos. Análisisde riesgos. Responsables de pruebas  técnicas  y funcionales. Consultoríade adquisición  y  adecuación  de  sistemas  de gestión.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Atento Argentina S.A.</h3>
                <p className="info">ASESOR HELP DESK <span>•</span> <em className="date">2011 - Actualidad</em></p>
                <p>
                Soporte  técnico  de  comunicaciones  en  servicios  de  telefonía  móvil,  fija, internet ADSL, VDSL y FTTH , incluyendo SVA especiales como cámaras IP , IP Fija y VPN para Telefónica-Movistar Argentina desde Atento, desde noviembre de 2011 hasta la fecha (aún en actividad)
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Estudio Jurídico Espinoza</h3>
                <p className="info">ASISTENTE TÉCNICO <span>•</span> <em className="date">2008 - 2011</em></p>
                <p>
                Soporte y mantenimientode equipos informáticos de oficina, configuración de red interna e intranet, Implementación de sistema especializado (Lex-Doctor)
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Habilidades</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand photoshop" /><em>PHP</em></li>
                <li><span className="bar-expand illustrator" /><em>Laravel</em></li>
                <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
                <li><span className="bar-expand css" /><em>CSS</em></li>
                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                <li><span className="bar-expand jquery" /><em>JavaScript</em></li>
                <li><span className="bar-expand jquery" /><em>Java</em></li>
                <li><span className="bar-expand jquery" /><em>C++</em></li>

              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section>
      
      )
    }
  }