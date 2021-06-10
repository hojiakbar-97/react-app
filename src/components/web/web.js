import React, {useEffect} from 'react';
import Aos from "aos";

import './web.scss';
import 'aos/dist/aos.css';


const Web = () => {

        useEffect(() => {
            Aos.init({duration: 2000});
        }, []);

        return (
            <div>
                <div className="web-header">
                    <div data-aos="fade-up" className="banner-text">
                        <img src="/images/Web-App-Developers.png" alt=""/>
                        <p>Сделайте отметку с помощью наших услуги по разработке полнофункциональных
                            веб-приложений</p>
                    </div>
                    <div data-aos="fade-up" className="banner-img">
                        <img src="/images/Web-Application-Developers.png" alt=""/>
                    </div>
                </div>

                <div className="web-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h3>Разработчики веб-приложений полного стека</h3>
                                <span>Совместная работа нескольких технологий для решения ваших проблем</span>
                                <p>Каждое современное решение - это объединение множества взаимосвязанных технологий.
                                    Поэтому мы здесь, в Nova, собрали команду разработчиков веб-приложений с
                                    многолетним опытом работы во всех основных технологиях, которые делают нас одной из
                                    лучших компаний по разработке веб-приложений. Мы обладаем опытом во всех аспектах:
                                    от разработки интерфейса до бэкэнд-кодирования, от управления пользовательским
                                    интерфейсом до управления данными, облачных приложений, охватывающих устройства, и
                                    системного программного обеспечения. разработка веб-приложений .
                                    Наш опытный разработчики веб-приложений тесно сотрудничать с клиентами в решении их
                                    проблем с помощью передовых технологий. Мы уделяем приоритетное внимание результатам
                                    и строго придерживаемся методологии гибкой разработки, чтобы быстро отслеживать
                                    время вывода продукта на рынок без ущерба для качества.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h3>Возможности нашей службы веб-разработки</h3>
                                <span>Причины, по которым наши клиенты возвращаются к нам снова и снова</span>
                            </div>
                            <div className="col-12 col-md-6 col-lg-5 offset-lg-1">
                                <div className="media">
                                    <div className="media-body">
                                        <h5>Опыт полного стека</h5>
                                        <p>Мы одни из немногих, кто обладает опытом использования всех новейших
                                            технологий на всех основных платформах.</p>
                                    </div>
                                    <div className="media-right">
                                        <span className="blank">
                                            <i className="fa fa-cubes" />
                                        </span>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-body">
                                        <h5>Независимые от устройств решения</h5>
                                        <p>Все наши решения готовы к работе с мобильными устройствами и протестированы
                                            на всех основных мобильных устройствах.</p>
                                    </div>
                                    <div className="media-right">
                                        <span className="blank">
                                            <i className="fa fa-mobile">
                                            </i>
                                        </span>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-body">
                                        <h5>Специалисты по интеграции и API</h5>
                                        <p>У нас есть склонность выполнять даже самую сложную интеграцию программного
                                            обеспечения.</p>
                                    </div>
                                    <div className="media-right">
                                        <span className="blank">
                                            <i className="fa fa-plug">
                                            </i>
                                        </span>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-body">
                                        <h5>Масштабируемость и гибкость</h5>
                                        <p>Используя микросервисную архитектуру, мы создаем решения, которые легко
                                            расширять и масштабировать.</p>
                                    </div>
                                    <div className="media-right">
                                        <span className="blank">
                                            <i className="fa fa-line-chart">
                                            </i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-5">
                                <img src="/images/Web-Application-Development.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="web-process">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Наш процесс разработки веб-приложений</h2>
                                <p>Наши разработчики веб-приложений соблюдают строгий рабочий процесс гибкой
                                    разработки.</p>
                            </div>
                            <div className="col-12 col-md-12 process-list">
                                <ul className="list-unstyled list-inline">
                                    <li>
                                        <span className="blank">
                                            <i className="fa fa-puzzle-piece" />
                                        </span>
                                        <br/>
                                        <h5>Открытие</h5>
                                        <p>Подготовка дорожной карты приложения enitre</p>
                                    </li>
                                    <li>
                                        <span className="blank">
                                            <i className="fa fa-user" />
                                        </span>
                                        <br/>
                                        <h5>Пользовательский опыт</h5>
                                        <p>Эксперт UX Engineering</p>
                                    </li>
                                    <li>
                                        <span className="blank">
                                            <i className="fa fa-code" />
                                        </span>
                                        <br/>
                                        <h5>Развитие</h5>
                                        <p>Минималистичный код с гибкой архитектурой</p>
                                    </li>
                                    <li>
                                        <span className="blank">
                                            <i className="fa fa-search" />
                                        </span>
                                        <br/>
                                        <h5>Тестирование</h5>
                                        <p>Производительность тестирования в любой среде</p>
                                    </li>
                                    <li>
                                        <span className="blank">
                                            <i className="fa fa-repeat" />
                                        </span>
                                        <br/>
                                        <h5>Итерация</h5>
                                        <p>Пора сделать приложение еще лучше</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <article className="p_pages">

                    <section id="java" className="d-none pages-class">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 nexticon-wrap">
                                    <a href="#java" className="icon-java" />
                                </div>
                                <div className="col-md-12">
                                    <div className="col-12 col-md-6 je2-screen">
                                        <img src="/images/Java-Web-Development.jpg" alt=""/>
                                    </div>
                                    <div className="col-12 col-md-6 right-media">
                                        <div className="circle-box">
                                            <h4>Веб-разработка на Java / J2EE</h4>
                                            <h5>Услуги Java Web и разработки программного обеспечения</h5>
                                        </div>
                                        <div className="circle-box">
                                            <p>Мы предлагаем полный набор услуг разработки Java / J2EE для мобильных,
                                                веб-приложений и отдельных приложений на основе Java. От создания
                                                простых, но вдохновляющих приложений для стартапов до очень сложных
                                                интегрированных решений для предприятий - мы реализовали проекты любого
                                                масштаба и для каждой отрасли. Вот некоторые из наших основных сервисов
                                                Java:</p>
                                        </div>
                                        <div className="circle-box">
                                        </div>
                                        <div className="circle-box">
                                            <div className="media">
                                                <div className="media-left">
                                                    <span className="blank">
                                                        <i className="fa fa-cogs">
                                                        </i>
                                                    </span>
                                                </div>
                                                <div className="media-body">
                                                    <h5>Полные решения Java</h5>
                                                    <p>Мы разрабатываем все, от облачных и веб-решений на основе Java до
                                                        автономных настольных приложений.</p>
                                                </div>
                                            </div>
                                            <div className="media">
                                                <div className="media-left">
                                                    <span className="blank">
                                                        <i className="fa fa-desktop">
                                                        </i>
                                                    </span>
                                                </div>
                                                <div className="media-body">
                                                    <h5>Веб-решения Java</h5>
                                                    <p>Spring, Struts, Hibernate, Liferay и Custom веб-решения, мы
                                                        эксперты во всем, что касается Интернета.</p>
                                                </div>
                                            </div>
                                            <div className="media">
                                                <div className="media-left">
                                                    <span className="blank">
                                                        <i className="fa fa-mobile">
                                                        </i>
                                                    </span>
                                                </div>
                                                <div className="media-body">
                                                    <h5>Мобильные приложения Java</h5>
                                                    <p>Язык «пиши один раз, запускай везде», Java отлично подходит для
                                                        создания мобильных приложений.</p>
                                                </div>
                                            </div>
                                            <div className="media">
                                                <div className="media-left">
                                                    <span className="blank">
                                                        <i className="fa fa-jsfiddle">
                                                        </i>
                                                    </span>
                                                </div>
                                                <div className="media-body">
                                                    <h5>Бэкэнд-разработка на Java</h5>
                                                    <p>Мы эксперты в разработке API, управлении базами данных, решениях
                                                        бизнес-аналитики и серверных приложениях.</p>
                                                </div>
                                            </div>
                                            <div className="btn-box">
                                                <a href="#" className="btn">ВЫУЧИТЬ БОЛЬШЕ</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="php" className="pages-class">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 nexticon-wrap">
                                    <a href="#php" className="icon-php">
                                    </a>
                                </div>
                                <div className="col-md-12">
                                    <div className="col-md-6 page-screen">
                                        <img src="/images/PHP-website-developers.jpg" alt=""/>
                                    </div>
                                    <div className="col-md-6 left-media">
                                        <div className="circle-box">
                                            <h4>Разработка веб-приложений на PHP</h4>
                                            <h5>Самый популярный язык веб-приложений</h5>
                                        </div>
                                        <div className="circle-box">
                                            <p>Самый популярный язык разработки веб-приложений, PHP используется для
                                                создания веб-приложений любого типа и любого масштаба, он прост в
                                                использовании, широко популярен и достаточно надежен для создания любого
                                                типа веб-решения. Используя PHP и связанные с ним фреймворки, мы создали
                                                бесчисленное количество мобильных веб-решений для всех областей
                                                промышленности. Мы предлагаем следующие основные услуги, связанные с
                                                PHP:</p>
                                        </div>
                                        <div className="circle-box">
                                        </div>
                                        <div className="circle-box">
                                            <div className="media">
                                                <div className="d-block d-md-none media-left">
                                                    <span className="blank">
                                                        <i className="fa fa-database" />
                                                    </span>
                                                </div>
                                                <div className="media-body">
                                                    <h5>Полные веб-решения</h5>
                                                    <p>У нас есть опыт во всем, от сложных веб-сайтов, порталов
                                                        электронной коммерции и высококачественных социальных сетей до
                                                        сложных финансовых систем.</p>
                                                </div>
                                                <div className="d-none d-md-block media-left">
                                                    <span className="blank">
                                                        <i className="fa fa-database" />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="media">
                                                <div className="d-block d-md-none media-left">
                                                    <span className="blank">
                                                        <i className="fa fa-fax" />
                                                    </span>
                                                </div>
                                                <div className="media-body">
                                                    <h5>Управление базами данных</h5>
                                                    <p>Мы предлагаем веб-сервисы для баз данных Oracle, MySQL, Microsoft
                                                        SQL и NoSQL, таких как MongoDB, Neo4j, GraphDB, CouchDB,
                                                        Cassandra и т. Д.</p>
                                                </div>
                                                <div className="d-none d-md-block media-left">
                                                    <span className="blank">
                                                        <i className="fa fa-fax" />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="media">
                                                <div className="d-block d-md-none media-left">
                                                    <span className="blank">
                                                        <i className="fa fa-gears" />
                                                    </span>
                                                </div>
                                                <div className="media-body">
                                                    <h5>Услуги веб-дизайна</h5>
                                                    <p>Мы известны своим вдохновляющим дизайном и имеем опыт работы с
                                                        различными инструментами дизайна, такими как Bootstrap,
                                                        Foundation, AngularJS, EmberJs и т. Д.</p>
                                                </div>
                                                <div className="d-none d-md-block media-left">
                                                    <span className="blank">
                                                        <i className="fa fa-gears" />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="media">
                                                <div className="d-block d-md-none media-left">
                                                    <span className="blank">
                                                        <i className="fa fa-jsfiddle" />
                                                    </span>
                                                </div>
                                                <div className="media-body">
                                                    <h5>Миграция с устаревших систем</h5>
                                                    <p>Мы помогаем организациям перенести свои сложные устаревшие
                                                        решения на облачные и мобильные решения веб-приложений PHP.</p>
                                                </div>
                                                <div className="d-none d-md-block media-left">
                                                    <span className="blank">
                                                        <i className="fa fa-jsfiddle" />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="btn-box">
                                                <a href={'/web-development-services/php'} className="btn">ВЫУЧИТЬ БОЛЬШЕ</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </article>
            </div>
        );
};

export default Web;
