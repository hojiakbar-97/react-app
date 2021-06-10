import React from 'react';

import './about.scss';

const About = () => {
    return (
        <div id="about-us" className="about-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Мы — Nova</h1>
                        <p>Мы убеждены в том, что программное обеспечение помогает открывать новые возможности для людей
                            и для планеты. Наше программное обеспечение формирует цифровую платформу для поддержки
                            приложений, услуг и возможностей, которые преобразуют мир.
                            <br/>
                            Мы считаем, что создание незабываемых впечатлений - лучший способ связаться с вашими
                            потребителями. Мы верим, что индивидуальные решения, которые мы создаем сегодня, превзойдут
                            тенденции завтрашнего дня, от динамического веб-дизайна до передовых стратегий цифрового
                            маркетинга. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;