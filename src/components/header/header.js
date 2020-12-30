import React, { Component } from 'react'; export default class header extends Component {
    render() {
      return (
        <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">Sobre mí</a></li>
            <li><a className="smoothscroll" href="#resume">Curriculum</a></li>
            <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
        {/*     <li><a className="smoothscroll" href="#contact">Contacto</a></li>*/} 
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Soy Karina Davidovich</h1>
            <h3>Soy <span>Analista en Sistemas</span>, <span>Estudiante de Licenciatura en informática</span> y <span>desarrolladora full-stack autodidacta</span> </h3>
            <hr />
            <ul className="social">
              <li><a href="https://web.facebook.com/karina.davidovich"><i className="fa fa-facebook" /></a></li>
              <li><a href="https://www.instagram.com/karinadavidovich/"><i className="fa fa-instagram" /></a></li>
              <li><a href="https://www.linkedin.com/in/karina-davidovich-7250ab1ba"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://github.com/KarinaDavi/"><i className="fa fa-github" /></a></li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>

      )
    }
  }