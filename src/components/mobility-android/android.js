import React, {useEffect} from 'react';
import Aos from 'aos';

import './android.scss';

const Android = () => {


        useEffect(() => {
            Aos.init({duration: 2000});
        }, []);

        return (
            <div>
                <div className="mobility-android">
                    <div className="container">
                        <div className="row">
                            <div data-aos="fade-right" className="col-12 col-sm-6 col-md-6">
                                <h6>Индивидуальные мобильные решения для Android</h6>
                                <h3>Услуги по разработке приложений для Android</h3>
                                <p>Одна из самых популярных операционных систем для мобильных устройств - это платформа
                                    Android-A, которая может увеличить вашу клиентскую базу на миллионы.</p>
                                <p>Мы здесь, в Nova, овладели искусством создания самых потрясающих и восхитительно
                                    надежных приложений для Android, которые без проблем работают на всех типах основных
                                    устройств и версий Android.</p>
                                <div className="btn-group">
                                    <a href={'/mobile-app-development-services/android-apps'} className="btn">ВЫУЧИТЬ БОЛЬШЕ</a>
                                    <a href={'/contact'} className="btn">СВЯЗАТЬСЯ С НАМИ</a>
                                </div>
                            </div>
                            <div data-aos="zoom-out" className="col-12 col-sm-6 col-md-6">
                                <img src="/images/mobility-android-screen.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
 };

export default Android;