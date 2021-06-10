import React, {useEffect} from 'react';

import './php.scss';
import Aos from "aos";

const Php = () => {

    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);

    return (
        <div id="main_content">

            <div className="php-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12">
                            <img data-aos="zoom-out" src="/images/php/php_logo.png" alt=""/>
                            <h2 data-aos="fade-up" data-aos-delay="500">PHP поддерживает 70% веб-сайтов в мире.</h2>
                            <h4 data-aos="fade-up" data-aos-delay="500">Серверный встроенный язык сценариев HTML, он предоставляет веб-разработчикам полный
                                набор инструментов для создания динамических веб-сайтов. Он поддерживает такие сайты,
                                как Facebook.</h4>
                            <div data-aos="fade-up" data-aos-delay="500" className="btn-group">
                                <a href="#php_1" className="btn">ВЫУЧИТЬ БОЛЬШЕ</a>
                                <a href={'/contact'} className="btn">СВЯЗАТЬСЯ С НАМИ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="php_1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h3>Все о PHP</h3>
                            <p>PHP - это язык сценариев на стороне сервера и мощный инструмент для создания динамических
                                и интерактивных веб-страниц, которые могут расширить возможности вашего веб-сайта
                                благодаря своим уникальным и всеобъемлющим функциям. Если веб-сайт спроектирован,
                                разработан и поддерживается с использованием PHP, он имеет множество преимуществ, а
                                также возможность выполнять сложные функции.</p>
                        </div>
                        <div data-aos="flip-right" className="col-12 col-md-6">
                            <img src="/images/php/php_about_screen.png" alt=""/>
                        </div>
                    </div>
                </div>
            </section>

            <section id="php_2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Характеристики</h2>
                            <h3>Вот некоторые из выдающихся особенностей PHP, которые выделяют его среди
                                остальных языков сценариев:</h3>
                        </div>
                        <div className="col-md-12">
                            <div data-aos="fade-up" data-aos-delay="500" className="col-12 col-sm-12 col-md-4">
                                <img src="/images/php/php_feature_icon1.png" alt=""/>
                                <p><br/> Легко учиться и <br/> организовывать</p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="600" className="col-12 col-sm-12 col-md-4">
                                <img src="/images/php/php_feature_icon2.png" alt=""/>
                                <p><br/>Безопасные, масштабируемые и надежные решения</p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="700" className="col-12 col-sm-12 col-md-4">
                                <img src="/images/php/php_feature_icon3.png" alt=""/>
                                <p>Быстрая
                                    разработка приложений и снижение
                                    затрат на ИТ с помощью PHP</p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="800" className="col-12 col-sm-12 col-md-4">
                                <img src="/images/php/php_feature_icon4.png" alt=""/>
                                <p>Снижение эксплуатационных расходов
                                    за счет автоматизированной
                                    разработки приложений</p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="900" className="col-12 col-sm-12 col-md-4">
                                <img src="/images/php/php_feature_icon5.png" alt=""/>
                                <p>Создавайте высокопроизводительные
                                    приложения для хранилищ данных
                                    на PHP и My SQL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="php_3">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12">
                            <h2>Что мы делаем?</h2>
                            <h4>обширный опыт наших специалистов по PHP, которые применяют лучшие отраслевые практики и
                                методологии, Nova предоставляет наиболее полные веб-
                                приложения и решения PHP для различных отраслевых вертикалей.</h4>
                            <span>Мы предлагаем следующие решения:</span>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6">
                            <img src="/images/php/php_wt_do_screen.png" alt=""/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="500">Веб-разработка на PHP</li>
                                <li data-aos="fade-up" data-aos-delay="600">Разработка корпоративного сайта</li>
                                <li data-aos="fade-up" data-aos-delay="700">Разработка CMS на PHP</li>
                                <li data-aos="fade-up" data-aos-delay="800">PHP / MySQL разработка</li>
                                <li data-aos="fade-up" data-aos-delay="900">Разработка веб-приложений</li>
                                <li data-aos="fade-up" data-aos-delay="1000">Решения для развития портала</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Php;