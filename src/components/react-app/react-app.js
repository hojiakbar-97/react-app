import React, {useEffect} from 'react';

import './react-app.scss'
import Aos from "aos";

const ReactApp = () => {

    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);

    return (
        <div>
            <main>

                <div className="react-app-header">
                    <div className="container">
                        <div data-aos="fade-up" data-aos-delay="500" className="col-md-12">
                            <img src="/images/react/react-logo.png" alt=""/>
                            <h2>ReactJS Девелоперская компания</h2>
                            <p>Создавайте потрясающий пользовательский интерфейс с лучшими экспертами в области
                                веб-разработки на ReactJS! <br/>
                                Службы разработки ReactJS создают компоненты пользовательского интерфейса, которые
                                работают как на платформах Android, так и на iOS. С помощью этой платформы с открытым
                                исходным кодом разработчики ReactJS могут заняться предоставлением высококачественных
                                решений для разработки веб-приложений и мобильных приложений.</p>
                            <div className="btn-group">
                                <a href="#ct_1" className="btn">ВЫУЧИТЬ БОЛЬШЕ</a>
                                <a href={'/contact'} className="btn">СВЯЗАТЬСЯ С НАМИ</a>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="600" className="col-md-12 mt-2">
                            <img src="/images/react/cross_browser-min.png" alt=""/>
                        </div>
                    </div>
                </div>

                <section id="ct_1">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <h3>Ключевые особенности услуг разработки ReactJS</h3>
                                <h4>Когда дело доходит до разработки простого HTML-сайта / приложения, веб-разработка на
                                    ReactJS - ваш помощник. Наймите лучшую компанию по разработке Reactjs!</h4>
                                <div className="media">
                                    <div className="media-left">
                                        <img src="/images/react/icons/gui_icon.png" alt=""/>
                                    </div>
                                    <div className="media-body">
                                        <p>
                                            Это позволяет вам создавать компоненты в коде, которые можно использовать
                                            повторно, не переписывая новый код.</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-left">
                                        <img src="/images/react/icons/reduce_icon.png" alt=""/>
                                    </div>
                                    <div className="media-body">
                                        <p>Он легко адаптируется, поскольку его можно легко и удобно использовать.</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-left">
                                        <img src="/images/react/icons/drop_icon.png" alt=""/>
                                    </div>
                                    <div className="media-body">
                                        <p>Информация проста для понимания, а значит, позволяет командам работать
                                            быстрее.</p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up-right" className="col-12 col-md-6">
                                <img src="/images/react/ReactJS-Development-Features-min-1.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="ct_2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Почему услуги разработки ReactJS?</h2>
                                <h3>Потому что это просто, масштабируемо и быстро.Разработка приложений ReactJS это все,
                                    что вам нужно для создания потрясающих веб-приложений.</h3>
                                <h4>ReactJS работает на кросс-платформе и чрезвычайно эффективен, поскольку упрощает
                                    написание Javascript.
                                    Компания ReactJS Development из Индии предоставляет своим клиентам лучших экспертов
                                    ReactJS для работы.</h4>
                            </div>
                            <div data-aos="fade-right" className="col-12 col-md-6">
                                <img src="/images/react/ReactJS-for-App-Development-min-1.png" alt=""/>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="media">
                                    <div className="media-left">
                                        <img src="/images/react/icons/tick_icon.png" alt=""/>
                                    </div>
                                    <div className="media-body">
                                        <p>ReactJS работает на кросс-платформе и чрезвычайно эффективен, поскольку
                                            упрощает написание Javascript.</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-left">
                                        <img src="/images/react/icons/edit_icon.png" alt=""/>
                                    </div>
                                    <div className="media-body">
                                        <p>Его плавный и безотказный характер делает его хитом среди разработчиков
                                            приложений.</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-left">
                                        <img src="/images/react/icons/mobile_icon.png" alt=""/>
                                    </div>
                                    <div className="media-body">
                                        <p>Основы веб-разработки на ReactJS легко понять, и их может понять любой
                                            разработчик JavaScript.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="ct_3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Предложения услуг разработки Reactjs</h2>
                                <h4>Почему разработка на Reactjs? Почему вам следует нанять Nova? Reactjs выгоден
                                    для вашего бизнеса? Сервисы ReactJS создают компоненты пользовательского интерфейса,
                                    которые работают на платформах Android и iOS. С помощью этой платформы с открытым
                                    исходным кодом разработчики ReactJS могут заняться предоставлением
                                    высококачественных решений для разработки веб-приложений и мобильных
                                    приложений.</h4>
                                <div className="media">
                                    <div className="media-body">
                                        <h3>Разработка веб-приложений на ReactJS</h3>
                                        <p>Будучи ведущей компанией по разработке ReactJS, мы предоставляем
                                            высокомасштабируемые, оптимизированные для SEO и эффективные веб-приложения,
                                            созданные с использованием инфраструктуры ReactJS. Мы верим в возможность
                                            предоставления решений для разработки ReactJS, соответствующих требованиям
                                            вашего бизнеса.</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-body">
                                        <h3>Разработка мобильных приложений ReactJS</h3>
                                        <p>Мы предлагаем услуги на основе ReactJS для разработки мобильных приложений
                                            высокого класса, работающих на платформах Android и iOS. Мы создаем
                                            мобильные приложения, используя повторно используемые нативные компоненты,
                                            тем самым обеспечивая более быструю реализацию проекта приложения.</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-body">
                                        <h3>Интеграция ReactJS с существующим приложением</h3>
                                        <p>ReactJS расширяет возможности бизнеса за счет интеграции с существующими
                                            приложениями и системами. Мы, как компания-разработчик ReactJS, предлагаем
                                            интеграцию определенных функций, которые помогают уменьшить необходимость
                                            переписывать оставшийся код приложения.</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-body">
                                        <h3>ReactJS Миграция</h3>
                                        <p>Мы помогаем компаниям легко перейти на платформу ReactJS в соответствии с их
                                            текущими настройками и требованиями. Наша команда также следит за тем, чтобы
                                            приложение не сталкивалось с какими-либо препятствиями во время миграции
                                            ReactJS.</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-body">
                                        <h3>Разработка Enterprise ReactJS</h3>
                                        <p>У нас есть сильная, опытная команда разработчиков ReactJS, которые
                                            предоставляют услуги разработки ReactJS многочисленным клиентам по всему
                                            миру. Наши клиенты относятся к таким отраслям, как электронная коммерция,
                                            финансы, связь, здравоохранение и т. Д.</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-body">
                                        <h3>Поддержка и обслуживание ReactJS</h3>
                                        <p>Наша команда является ведущей компанией по разработке ReactJS в США, поэтому
                                            наша команда предоставляет надежные услуги поддержки и сопровождения для
                                            веб-приложений и мобильных приложений, созданных с использованием
                                            ReactJS.</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-body">
                                        <h3>Интерактивная разработка пользовательского интерфейса на ReactJS</h3>
                                        <p>Наши услуги по разработке ReactJS помогают создавать интерактивные и
                                            продвинутые приложения для клиентов в соответствии с их
                                            бизнес-потребностями. У нас есть команда высококвалифицированных и опытных
                                            разработчиков ReactJS, которые создают фантастические пользовательские
                                            интерфейсы для клиентских приложений.</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-body">
                                        <h3>ReactJS QA и тестирование</h3>
                                        <p>Когда дело доходит до разработки ReactJS, мы, несомненно, являемся одним из
                                            лидеров этой гонки. Здесь команда использует передовые методы разработки
                                            вместе с соответствующими инструментами и методами для своевременной
                                            реализации проектов.</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-body">
                                        <h3>Пользовательские услуги разработки ReactJS</h3>
                                        <p>Мы предоставляем отличные услуги разработки ReactJS, которые превосходят
                                            отраслевые стандарты. Наша обширная команда разработчиков ReactJS может
                                            вносить изменения в ваше текущее приложение, а также интегрировать его со
                                            сторонними фреймворками.</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-body">
                                        <h3>Нанять разработчиков ReactJS</h3>
                                        <p>Благодаря нашим высоконадежным службам контроля качества и тестирования
                                            ReactJS приложения могут обеспечивать исключительную производительность,
                                            соответствующую самым высоким стандартам качества. Это стало возможным
                                            благодаря нашей команде, которая проводит тщательное и всестороннее
                                            тестирование с использованием передовых методов и инструментов. Наши
                                            предложения включают индивидуальную разработку ReactJS, интерактивный
                                            интерфейс / пользовательский интерфейс ReactJS, разработку мобильных
                                            приложений React Native, разработку плагинов React Native, миграцию ReactJS
                                            и поддержку и обслуживание ReactJS.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default ReactApp;