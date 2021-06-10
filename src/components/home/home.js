import React from 'react';
import Header from "../header";
import About from "../about-us";

import './home.scss';

const Home = () => {
        return (
            <div>
                <Header />

                <section className="home-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6">
                                <h3>Услуги по разработке приложений для Android</h3>
                                <p>Одна из самых популярных операционных систем для мобильных устройств - это платформа
                                    Android-A, которая может увеличить вашу клиентскую базу на миллионы.</p>
                                <p>Мы здесь, в CompanyName, овладели искусством создания самых потрясающих и восхитительно
                                    надежных приложений для Android, которые без проблем работают на всех типах основных
                                    устройств и версий Android.</p>
                                <div className="btn-group">
                                    <a href={'/mobile-app-development-services/android-apps'} className="btn">ВЫУЧИТЬ БОЛЬШЕ</a>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6">
                                <h3>Разработка приложений HTML5</h3>
                                <p>Мы разрабатываем высококачественные, многофункциональные и ориентированные на бизнес
                                    кроссплатформенные мобильные и веб-приложения с использованием HTML5, CSS и
                                    JavaScript.</p>
                                <p>Мы известны своим пониманием окружающего пользовательского опыта, бесшовного процесса
                                    разработки и известного делового опыта.</p>
                                <div className="btn-group">
                                    <a href={'/web-development-services/html5-app'} className="btn">ВЫУЧИТЬ БОЛЬШЕ</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <About />
            </div>
        );
};

export default Home;
