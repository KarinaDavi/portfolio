import React, { Component } from 'react'; export default class footer extends Component {
    render() {
      return (
        <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
            <li><a href="https://web.facebook.com/karina.davidovich"><i className="fa fa-facebook" /></a></li>
              <li><a href="https://www.instagram.com/karinadavidovich/"><i className="fa fa-instagram" /></a></li>
              <li><a href="https://www.linkedin.com/in/karina-davidovich-7250ab1ba"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://github.com/KarinaDavi/"><i className="fa fa-github" /></a></li>
            </ul>
            <ul className="copyright">
              <li>© Copyright 2021</li>
              <li>Design by KDavidovich <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>   
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
      
      )
    }
  }