import React, {useEffect} from 'react';

import './html-app.scss';
import Aos from "aos";

const HtmlApp = () => {

    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);

    return (
        <div>

            <div className="html-app-header">
                <div className="container">
                    <div className="col-md-12">
                        <h2 data-aos="fade-right">Разработка приложений HTML<b>5</b></h2>
                        <p data-aos="fade-right" data-aos-delay="500">Инновационные стратегии мобильного бизнеса.</p>
                        <div data-aos="zoom-out-up" data-aos-delay="600" className="btn-group">
                            <a href="#ht_1" className="btn">ВЫУЧИТЬ БОЛЬШЕ</a>
                            <a href={'/contact'} className="btn">СВЯЗАТЬСЯ С НАМИ</a>
                        </div>
                    </div>
                </div>
            </div>

            <section id="ht_1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6">
                            <h3>Кто мы?</h3>
                            <p>Группа экспертов Nova, состоящая из разработчиков приложений HTML5, проектирует и
                                разрабатывает многоплатформенные приложения с использованием HTML5, JavaScript и CSS3
                                для создания веб-приложений и собственных мобильных приложений.
                                <br/>
                                Чтобы дополнить вашу бизнес-информацию, ваши дружелюбные эксперты предлагают
                                качественные решения с богатым набором функций и новейшими технологическими тенденциями,
                                создавая инновационные и высокоинтерактивные приложения HTML5 для различных отраслевых
                                вертикалей.
                            </p>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6">
                            <img src="/images/web/html-screen.png" alt=""/>
                        </div>
                    </div>
                </div>
            </section>

            <section id="ht_2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 data-aos="fade-right">Почему приложение HTML<b>5</b>?</h2>
                            <h3 data-aos="fade-right" data-aos-delay="500">Многофункциональные и ориентированные на бизнес мобильные приложения</h3>
                        </div>
                        <div data-aos="fade-up" className="col-12 col-sm-12 col-md-4">
                            <img src="/images/web/html_why_icon1.png" alt=""/>
                            <h4>Надежные функции</h4>
                            <p>HTML<b>5</b> имеет определенные надежные функции,
                                благодаря которым технология позволяет
                                быстро выполнять несколько задач.</p>
                        </div>
                        <div data-aos="fade-up" className="col-12 col-sm-12 col-md-4">
                            <img src="/images/web/html_why_icon2.png" alt=""/>
                            <h4>Доступная рабочая сила</h4>
                            <p>HTML<b>5</b> - один из самых популярных инструментов, которые широко используются
                                программистами, поэтому вы можете легко найти разработчиков HTML<b>5</b>.</p>
                        </div>
                        <div data-aos="fade-up" className="col-12 col-sm-12 col-md-4">
                            <img src="/images/web/html_why_icon3.png" alt=""/>
                            <h4>Высокое покрытие устройства</h4>
                            <p>Все популярные мобильные и настольные операционные системы поддерживают HTML<b>5</b>, что
                                дает
                                приложениям HTML<b>5</b> значительно более широкий охват устройств.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="ht_3">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h2 data-aos="fade-right">Другие особенности</h2>
                            <h5 data-aos="fade-right">Многофункциональные и ориентированные на бизнес мобильные приложения</h5>
                            <div className="square-box">
                                <div className="col-12 col-md-12">
                                    <div className="adv-box">
                                        <div className="icon">
                                            <img src="https://algoworksupload.s3.amazonaws.com/new-algoworks/wp-content/uploads/2016/03/09070800/html_feature_icon1.png" alt="Особенности HTML5" />
                                        </div>
                                        <div className="icon-desc">
                                            <p>Экспоненциальное сокращение времени и усилий при выходе на рынок</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12">
                                    <div className="adv-box">
                                        <div className="icon">
                                            <img src="https://algoworksupload.s3.amazonaws.com/new-algoworks/wp-content/uploads/2016/03/09070802/html_feature_icon2.png" alt="Доступность HTML5" />
                                        </div>
                                        <div className="icon-desc">
                                            <p>Легкость обнаружения на рынке</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12">
                                    <div className="adv-box">
                                        <div className="icon">
                                            <img src="https://algoworksupload.s3.amazonaws.com/new-algoworks/wp-content/uploads/2016/03/09070803/html_feature_icon3.png" alt="HTML5 простое обновление" />
                                        </div>
                                        <div className="icon-desc">
                                            <p>Меньше обслуживания и легкое обновление приложения</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12">
                                    <div className="adv-box">
                                        <div className="icon">
                                            <img src="https://algoworksupload.s3.amazonaws.com/new-algoworks/wp-content/uploads/2016/03/09070804/html_feature_icon4.png" alt="Перспективная технология HTML5" />
                                        </div>
                                        <div className="icon-desc">
                                            <p>Высокая масштабируемость - перспективная технология</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src="/images/web/html_feature_screen.png" alt=""/>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HtmlApp;