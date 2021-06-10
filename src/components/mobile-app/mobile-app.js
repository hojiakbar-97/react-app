import React, {useEffect} from 'react';
import Aos from "aos";

import './mobile-app.scss';


const MobileApp = () => {

    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);

    return (
        <div>

            <div className="mobile-app-banner">
                <div className="container">
                    <div className="col-md-12">
                        <h2 data-aos="fade-right" >Разработка приложений для Android</h2>
                        <p data-aos="fade-right" data-aos-delay="500">Создание визуально потрясающих приложений для Android</p>
                        <div data-aos="fade-up" data-aos-delay="600" className="btn-group">
                            <a href="#con-1" className="btn">ВЫУЧИТЬ БОЛЬШЕ</a>
                            <a href={'/contact'} className="btn">СВЯЗАТЬСЯ С НАМИ</a>
                        </div>
                    </div>
                </div>
            </div>

            <section id="con-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6">
                            <img src="/images/mobile-app/android_phone.png" alt=""/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6">
                            <h2>Что мы делаем</h2>
                            <h5>Мастера на борту</h5>
                            <p>Согласно опросу, приложениями для Android по всему миру пользуются почти 800 миллионов
                                человек. Можете ли вы по-прежнему позволить себе оставаться в стороне от 800 миллионов
                                потенциальных клиентов? Nova предоставляет компаниям услуги по разработке
                                приложений для Android , используя свою команду опытных разработчиков, имеющих опыт
                                работы со стартапами и предприятиями.</p>
                            <p>Наши разработчики используют лучшие оптимизированные инструменты разработки приложений
                                для Android, чтобы предоставлять лучшие услуги по разработке продуктов.</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="android-head">
                    <img src="/images/mobile-app/android_head.png" alt=""/>
                </div>
            </section>

            <section id="con-2">
                <div className="container">
                    <div className="col-md-12">
                        <h2>Почему разработка приложений для Android?</h2>
                        <h5>Рынок приложений для Android стремительно растет. Давайте рассмотрим несколько причин, по
                            которым
                            <br/> компаниям следует заняться разработкой приложений для Android .</h5>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="media">
                                <div className="media-body">
                                    <h5>Всеобъемлющий</h5>
                                    <p>Простые в использовании и увлекательные приложения</p>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-body">
                                    <h5>Видение бренда</h5>
                                    <p>Захват более широкого рынка на очень влиятельном рынке технологий</p>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-body">
                                    <h5>Экономически эффективным</h5>
                                    <p>Индивидуальные прибыльные приложения, соответствующие потребностям вашего
                                        бизнеса</p>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-body">
                                    <h5>Google поддерживает</h5>
                                    <p>Принадлежит Google, который поддерживает все вычислительные задачи</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="/images/mobile-app/android_why_ph.png" alt=""/>
                        </div>
                    </div>
                </div>
            </section>

            <section id="con-3">
                <div data-aos="fade-down" data-aos-duration="1000" className="android-foot">
                    <img src="/images/mobile-app/android_foot.png" alt=""/>
                </div>
                <div className="container">
                    <div className="col-md-12">
                        <h2>Подробнее об Android</h2>
                        <h5>Переключитесь на лучший способ создания приложений</h5>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="col-6 col-md-3">
                                <h5>Масштабируемость</h5>
                                <p>Перспективная технология</p>
                            </div>
                            <div className="col-3 col-md-6">
                            </div>
                            <div className="col-6 col-md-3">
                                <h5>Богатый и дружелюбный</h5>
                                <p>Многофункциональный и удобный</p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <img src="/images/mobile-app/android_tech.png" alt=""/>
                        </div>
                        <div className="col-md-12">
                            <h5>Повышенная производительность</h5>
                            <p>Очень компетентный и функциональный</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="con-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Преимущества CompanyName в <br/> разработке приложений для Android</h2>
                            <h3>Почему стоит выбрать CompanyName в качестве партнера по разработке приложений для
                                Android?</h3>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-12 col-md-12">
                                    <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" className="box">
                                        <div className="icon" />
                                        <div className="icon-desc">
                                            <p>Предоставляем эффективные решения по конкурентоспособным ценам</p>
                                        </div>
                                        <div className="icon" />
                                    </div>
                                    <div data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000" className="box">
                                        <div className="icon" />
                                        <div className="icon-desc">
                                            <p>Мы предлагаем круглосуточные открытые каналы связи с экспертами</p>
                                        </div>
                                        <div className="icon" />
                                    </div>
                                    <div data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000" className="box">
                                        <div className="icon" />
                                        <div className="icon-desc">
                                            <p>У нас есть тщательный обмен идеями по разработке приложений для Android</p>
                                        </div>
                                        <div className="icon" />
                                    </div>
                                    <div data-aos="fade-up" data-aos-delay="1100" data-aos-duration="1000" className="box">
                                        <div className="icon" />
                                        <div className="icon-desc">
                                            <p>У нас гибкие бизнес-модели работы</p>
                                        </div>
                                        <div className="icon" />
                                    </div>
                                    <div data-aos="fade-up" data-aos-delay="1300" data-aos-duration="1000" className="box">
                                        <div className="icon" />
                                        <div className="icon-desc">
                                            <p>Мы любим делать все возможное, чтобы улыбнуться нашим клиентам.</p>
                                        </div>
                                        <div className="icon" />
                                    </div>
                                    <div data-aos="fade-up" data-aos-delay="1500" data-aos-duration="1000" className="box">
                                        <div className="icon" />
                                        <div className="icon-desc">
                                            <p>Мы - отмеченная наградами компания по разработке приложений для Android.</p>
                                        </div>
                                        <div className="icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default MobileApp;