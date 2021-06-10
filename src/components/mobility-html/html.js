import React, {useEffect} from 'react';

import './html.scss';
import Aos from "aos";

const Html = () => {

         useEffect(() => {
          Aos.init({duration: 2000});
         }, []);

        return (
            <div>
                <div className="mobility-html">
                    <div className="container">
                        <div className="row">
                            <div data-aos="fade-right" className="col-12 col-sm-6 col-md-6">
                                <h6>Кросс-платформенные мобильные решения</h6>
                                <h3>Разработка приложений HTML5</h3>
                                <p>Мы разрабатываем высококачественные, многофункциональные и ориентированные на бизнес
                                    кроссплатформенные мобильные и веб-приложения с использованием HTML5, CSS и
                                    JavaScript.</p>
                                <p>Мы известны своим пониманием окружающего пользовательского опыта, бесшовного процесса
                                    разработки и известного делового опыта.</p>
                                <div className="btn-group">
                                    <a href={'/mobile-app-development-services/android-apps'} className="btn">ВЫУЧИТЬ БОЛЬШЕ</a>
                                    <a href={'/contact'} className="btn">СВЯЗАТЬСЯ С НАМИ</a>
                                </div>
                            </div>
                            <div data-aos="flip-up" className="col-12 col-sm-6 col-md-6">
                                <img src="/images/mobility-html5-acreen.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default Html;
