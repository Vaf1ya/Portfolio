import React, { useState } from 'react';
import './services.css';

const Services = () => {
    const [ToggleState, setTogleState] = useState(0);
    const toggleTab = (index) => {
        setTogleState(index);
    };
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Сервисы</h2>
            <span className="section__subtitle">Что я закончила</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services-icon"></i>
                        <h3 className="services__title">
                            product <br /> Designer
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>
                        View More <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={ToggleState === 1 ? 'services__modal active-modal' : 'services__modal'}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="services__modal-title">Designer</h3>
                            <p className="services__modal-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa officia quos dolor velit,
                                accusamus in debitis laborum expedita sit repudiandae praesentium dignissimos, quis
                                dolorum ab, assumenda fugiat aliquam tenetur ipsum?
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Я работала с пользоательским интерфейсом</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Я работала с пользоательским интерфейсом</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Я работала с пользоательским интерфейсом</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Я работала с пользоательским интерфейсом</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Я работала с пользоательским интерфейсом</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services-icon"></i>
                        <h3 className="services__title">
                            Ui/Ux <br /> Designer
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>
                        View More <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={ToggleState === 2 ? 'services__modal active-modal' : 'services__modal'}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="services__modal-title">Desighjkjhghjgner</h3>
                            <p className="services__modal-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa officia quos dolor velit,
                                accusamus in debitis laborum expedita sit repudiandae praesentium dignissimos, quis
                                dolorum ab, assumenda fugiat aliquam tenetur ipsum?
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Я работала с пользоательским интерфейсом</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Я работала с пользоательским интерфейсом</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Я работала с пользоательским интерфейсом</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Я работала с пользоательским интерфейсом</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Я работала с пользоательским интерфейсом</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services-icon"></i>
                        <h3 className="services__title">
                            Visual <br /> Designer
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>
                        View More <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={ToggleState === 3 ? 'services__modal active-modal' : 'services__modal'}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="services__modal-title">Design,,,,,,er</h3>
                            <p className="services__modal-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa officia quos dolor velit,
                                accusamus in debitis laborum expedita sit repudiandae praesentium dignissimos, quis
                                dolorum ab, assumenda fugiat aliquam tenetur ipsum?
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Я работала с пользоательским интерфейсом</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Я работала с пользоательским интерфейсом</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Я работала с пользоательским интерфейсом</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Я работала с пользоательским интерфейсом</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Я работала с пользоательским интерфейсом</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
