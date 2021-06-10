import React from "react";
import './navbar.scss';
import Container from "reactstrap/es/Container";


const Nav = () => {

        window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                document.getElementById("nav").style.backgroundColor = "black";
                document.getElementById("nav").style.padding = "0";
                document.getElementById('menuBtn').style.top = '5px';
            } else {
                document.getElementById("nav").style.backgroundColor = "rgba(0, 0, 0, 0.26)";
                document.getElementById("nav").style.padding = "1rem 0";
                document.getElementById('menuBtn').style.top = '20px';
            }
        }

        let menuOpen = false;
        const openMenu = () => {
          if (!menuOpen) {
              document.getElementById('one')
                  .style.transform = 'rotate(45deg) translateY(18px)';
              document.getElementById('two')
                  .style.opacity = '0';
              document.getElementById('three')
                  .style.transform = 'rotate(-45deg) translateY(-18px)';

              document.getElementById('menu').style.left = '0';
              menuOpen = true;
          } else {
              document.getElementById('one')
                  .style.transform = 'rotate(0) translateY(0)';
              document.getElementById('two')
                  .style.opacity = '1';
              document.getElementById('three')
                  .style.transform = 'rotate(0) translateY(0)';

              document.getElementById('menu').style.left = '-100%';
              menuOpen = false;
          }
        };

        let service = false;
        const openService = () => {
            if (!service) {
                document.getElementById('service')
                    .style.transform = 'translateX(0)';
                service = true;
            } else {
                document.getElementById('service')
                    .style.transform = 'translateX(-100%)';
                service = false;
            }
        };

        let tech = false;
        const openTech = () => {
        if (!tech) {
            document.getElementById('tech')
                .style.transform = 'translateX(0)';
            tech = true;
        } else {
            document.getElementById('tech')
                .style.transform = 'translateX(-100%)';
            tech = false;
            }
        };


        return (
          <div>
              <nav id="nav" className="navbar navbar-expand-sm">
                  <div className="container">
                      <div className="row w-100">
                          <div>
                              <a href={'/'} className="nav-link">nova</a>
                          </div>
                          <ul className="navbar-nav">
                              <li className="nav-item">
                                  <a href={'/'} className="nav-link">Домой</a>
                              </li>
                              <li className="nav-item">
                                  <a href="#" className="nav-link">Сервисы</a>
                                  <ul className="dropdown">
                                      <li><a href={'/mobile-app-development-services'} >Разработка мобильных приложений</a></li>
                                      <li><a href={'/web-development-services'}>Разработка веб приложений</a></li>
                                  </ul>
                              </li>
                              <li className="nav-item">
                                  <a href="#" className="nav-link">Технология</a>
                                  <ul className="dropdown">
                                      <li><a href={'/mobile-app-development-services/android-apps'} >Разработка приложений для Android</a></li>
                                      <li><a href={'/web-development-services/html5-app'}>Разработка приложений для HTML5</a></li>
                                      <li><a href={'/web-development-services/react-app'}>Разработка приложений для React</a></li>
                                  </ul>
                              </li>
                              <li className="nav-item">
                                  <a href={'/#about-us'} className="nav-link">О нас</a>
                              </li>
                              <li className="nav-item">
                                  <a href={'#footer-1'} className="nav-link">Контакты</a>
                              </li>
                          </ul>
                          <div id="menuBtn" className="menu-btn" onClick={() => openMenu()} >
                              <i id="one" />
                              <i id="two" />
                              <i id="three" />
                          </div>
                      </div>
                  </div>
              </nav>

              <div id="menu" className="menu-nav">

                  <div className="logo">
                      <a href={'/'}>CompanyName</a>
                  </div>

                  <ul>
                      <li>
                          <a id="link" href={'/'}>Домой</a>
                      </li>
                      <li onClick={() => openService()}>
                          <a>Сервисы</a>
                          <a>
                              <i className="icons icon-next" />
                          </a>
                          <div id="service" className="service">
                              <div className="logo">
                                  <a>Сервисы</a>
                                  <div><i className="icons icon-next"/></div>
                              </div>
                              <ul>
                                  <li>
                                      <a href={'/mobile-app-development-services'}>
                                          Разработка мобильных приложений
                                      </a>
                                  </li>
                                  <li>
                                      <a href={'/web-development-services'}>
                                          Разработка веб приложений
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </li>
                      <li onClick={() => openTech()}>
                          <a>Технология</a>
                          <a>
                              <i className="icons icon-next" />
                          </a>
                          <div id="tech" className="tech">
                              <div className="logo">
                                  <a>Технология</a>
                                  <div><i className="icons icon-next"/></div>
                              </div>
                              <ul>
                                  <li><a href={'/mobile-app-development-services/android-apps'} >Разработка приложений для Android</a></li>
                                  <li><a href={'/web-development-services/html5-app'}>Разработка приложений для HTML5</a></li>
                                  <li><a href={'/web-development-services/react-app'}>Разработка приложений для React</a></li>
                              </ul>
                          </div>
                      </li>
                      <li>
                          <a href={'/about-us'}>О нас</a>
                      </li>
                  </ul>
              </div>

          </div>
        );
};

export default Nav;
