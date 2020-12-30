import React, { Component } from 'react'; export default class portfolio extends Component {
    render() {
      return (
        <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Algunos de mis trabajos.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt="lista" src="images/portfolio/lista.jpg" width="300px"/>
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Lista de tareas</h5>
                        <p>Web Aṕp</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt="portfolio" src="images/portfolio/portfolio.jpg" width="300px" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Portfolio</h5>
                        <p>Desarrollo Web</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt="" src="images/portfolio/blog.jpg" width="300px" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Blog</h5>
                        <p>Desarrollo Web</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt="" src="images/portfolio/login.jpg" width="300px"/>
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Login - Dashboard - CRUD</h5>
                        <p>Web App</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
             {/* <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05" title>
                    <img alt="" src="images/portfolio/farmerboy.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Farmer Boy</h5>
                        <p>Branding</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
             {/*   <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06" title>
                    <img alt="" src="images/portfolio/girl.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Girl</h5>
                        <p>Photography</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
             {/*   <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-07" title>
                    <img alt="" src="images/portfolio/origami.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Origami</h5>
                        <p>Illustrration</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
             {/*   <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-08" title>
                    <img alt="" src="images/portfolio/retrocam.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Retrocam</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>  {/* item end */}
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
                --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-lista.jpg" alt="lista" />
            <div className="description-box">
              <h4>Lista de Tareas</h4>
              <p>Lista de tareas o pendientes, se pueden agregar o eliminar las mismas. Realizado en React , utilizando Javascript, HTML y CSS.</p>
              <span className="categories"><i className="fa fa-tag" />React App</span>
            </div>
            <div className="link-box">
              <a href="https://karinadavi.github.io/lista/">Enlace</a>
              <a className="popup-modal-dismiss">Cerrar</a>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-portfolio.jpg" alt="" />
            <div className="description-box">
              <h4>Portfolio</h4>
              <p>Prototipo de portfolio profesional auto-administrable con panel para añadir proyectos. Realizado en PHP utilizando el framework Laravel</p>
              <span className="categories"><i className="fa fa-tag" />Desarrollo web</span>
            </div>
            <div className="link-box">
            <a href="https://portfoliokd2.herokuapp.com/">Enlace</a>
              <a className="popup-modal-dismiss">Cerrar</a>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-blog.jpg" alt="blog" />
            <div className="description-box">
              <h4>Blog</h4>
              <p>Blog para organización Tribu Pañalera de Tucuman, sobre uso de pañales de tela. Realizado en PHP utilizando framework Laravel 8, HTML, CSS, JS, con panel de administración y adminLTE integrado.</p>
              <span className="categories"><i className="fa fa-tag" />Branding</span>
            </div>
            <div className="link-box">
              <a href="https:tribupablog.herokuapp.com/">Enlace</a>
              <a className="popup-modal-dismiss">Cerrar</a>
            </div>
          </div>{/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-login.jpg" alt="" />
            <div className="description-box">
              <h4>Login - Dashboard -  CRUD</h4>
              <p> Realizado en Laravel 8, con un CRUD para articulos</p>
              <span className="categories"><i className="fa fa-tag" />Web App</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}
          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-farmerboy.jpg" alt="" />
            <div className="description-box">
              <h4>Farmer Boy</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-05 End */}
          <div id="modal-06" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt="" />
            <div className="description-box">
              <h4>Girl</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-06 End */}
          <div id="modal-07" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt="" />
            <div className="description-box">
              <h4>Origami</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-07 End */}
          <div id="modal-08" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt="" />
            <div className="description-box">
              <h4>Retrocam</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
        </div> {/* row End */}
      </section>
      
      )
    }
  }