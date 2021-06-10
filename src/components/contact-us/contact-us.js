import React, {Component} from 'react';

import './contact-us.scss';

export default  class ContactUs extends Component {
    render() {
        return (
            <div>
                <div className="contact-us">
                    <div className="container">
                        <div className="row">
                            <div className="col-10 offset-1 col-sm-10 col-md-5 offset-md-1">
                                <h3>Связаться с нами</h3>
                                <form action="#">
                                    <div>
                                        <input type="text" name="" required="required"/>
                                        <label>Имя</label>
                                    </div>
                                    <div>
                                        <input type="email" name="" required="required"/>
                                        <label>Эл. адрес</label>
                                    </div>
                                    <div>
                                        <input type="text" name="" required="required"/>
                                        <label>Телефон</label>
                                    </div>
                                    <div>
                                        <textarea required="required"/>
                                        <label>Сообщение</label>
                                    </div>
                                    <span>Мы обещаем, что не будем вас беспокоить.</span>
                                    <input type="submit" name="" value="Бесплатная консультация"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
