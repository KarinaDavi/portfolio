import React, { Component } from 'react'; export default class contactus extends Component {
    render() {
      return (
<section id="contact">
  <div className="row section-head">
    <div className="two columns header-col">
      <h1><span>Contacto</span></h1>
    </div>
    <div className="ten columns">
      <p className="lead">Enviar mensaje
      </p>
    </div>
  </div>
  <div className="row">
    <div className="eight columns">
      {/* form */}
      <form action method="post" id="contactForm" name="contactForm">
        <fieldset>
          <div>
            <label htmlFor="contactName">Nombre <span className="required">*</span></label>
            <input type="text" defaultValue size={35} id="contactName" name="contactName" />
          </div>
          <div>
            <label htmlFor="contactEmail">Email <span className="required">*</span></label>
            <input type="text" defaultValue size={35} id="contactEmail" name="contactEmail" />
          </div>
          <div>
            <label htmlFor="contactSubject">Asunto</label>
            <input type="text" defaultValue size={35} id="contactSubject" name="contactSubject" />
          </div>
          <div>
            <label htmlFor="contactMessage">Mensaje <span className="required">*</span></label>
            <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
          </div>
          <div>
            <button className="submit">Enviar</button>
            <span id="image-loader">
              <img alt="" src="images/loader.gif" />
            </span>
          </div>
        </fieldset>
      </form> {/* Form End */}
      {/* contact-warning */}
      <div id="message-warning"> Error boy</div>
      {/* contact-success */}
      <div id="message-success">
        <i className="fa fa-check" />Your message was sent, thank you!<br />
      </div>
    </div>
    <aside className="four columns footer-widgets">
      <div className="widget widget_contact">
        <h4></h4>
        <p className="address">
          
        </p>
      </div>
      <div className="widget widget_tweets">
        <h4 className="widget-title"></h4>
        <ul id="twitter">
          <li>
            <span>
             
              <a href="#"></a>
            </span>
            <b><a href="#"></a></b>
          </li>
          <li>
            <span>
            
            </span>
            <b><a href="#"></a></b>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</section>

      )
    }
  }