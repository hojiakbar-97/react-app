import React from 'react';

import './footer.scss';

const Footer = () => {
    return (
        <footer>

            <section id="footer-1">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <h4>Сервисы</h4>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Гарантия качества</a>
                                </li>
                                <li className="nav-item">
                                    <a href={'/mobile-app-development-services'} className="nav-link">Мобильных приложений</a>
                                </li>
                                <li className="nav-item">
                                    <a href={'/web-development-services'} className="nav-link">Разработка веб-приложений</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <h4>Технологии</h4>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href={'/mobile-app-development-services/android-apps'} className="nav-link">Android</a>
                                </li>
                                <li className="nav-item">
                                    <a href={'/web-development-services/html5-app'} className="nav-link">HTML5</a>
                                </li>
                                <li className="nav-item">
                                    <a href={'/web-development-services/react-app'} className="nav-link">React</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <h4>Связаться с нами</h4>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <span className="nav-link">Адрес: Салар Гес</span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link">hojiakbaregamberdiyev88@gmail.com</span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link">Тел: +998946644337</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12">
                            <ul>
                                <li>
                                    <a href="#"><i className="fa fa-telegram"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-youtube"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </footer>
    );
};

export default Footer;