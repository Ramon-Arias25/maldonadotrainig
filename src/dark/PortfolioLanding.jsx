import React from 'react';
import Slider from "react-slick";
import { slideSlick } from "../script/script";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import PrecioList from "../elements/precio/PrecioList";
import Testimonial from "../elements/testimonial/Testimonial"

const SlideList = [
    {
        textPosition: 'text-right',
        bgImage: 'bg_image--15',
        description: 'HABLEMOS DE TRAINING',
    },
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--16',
        description: 'MÁS QUE ENTRENAR, ES UNA MANERA DE CONECTARNOS CON LA VIDA, EN LO FÍSICO Y ESPIRITUAL. . .',
    },
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--17',
        description: '. . . COMPROMETIÉNDONOS CON LA VISIÓN DE SER MEJORES . . .',
    },
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--18',
        description: '. . . Y DISFRUTANDO DEL PROCESO PARA LOGRARLO!!',
    },
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--19',
        description: '"CUANDO QUIERES ALGO CON MUCHA INTENSIDAD, NINGÚN SACRIFICIO ES DEMASIADO GRANDE"',
        subdescription: ' - Rafael Nadal',
    }
]

const PortfolioLanding = () => {
    return (
        <div className="active-dark">
            <Helmet pageTitle="Maldonado Training" />
            <HeaderThree homeLink="/" logo="dark" color="color-black" />
            {/* Start Slider Area   */}
            <div id="home" className="fix">
                <div className="slider-wrapper">
                    <div className="slider-activation slider-startup ">
                        <Slider className="rn-slick-dot dot-light" {...slideSlick}>
                            {SlideList.map((value, index) => (
                                // Start Single Slider 
                                <div className={`slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image ${value.bgImage}`} key={index} data-black-overlay="8">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className={`inner ${value.textPosition}`}>
                                                    {value.description ? <p className="description">{value.description}</p> : ''}
                                                    {value.subdescription ? <p className="description subdescription text-left !important">{value.subdescription}</p> : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                // End Single Slider 
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            {/* End Slider Area   */}

            {/* Start mission Area */}
            <div id="mission" className="fix">
                <div className="rn-blog-area ptb--120 bg_color--5 mb-dec--30">
                    <div className="container bg_image--mission" alt="prueba ">
                        <div className="row align-items-end bg-color-opacity">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-title text-center">
                                    <h2 className="title">Mi Misión</h2>
                                    <p>Desde aquí quiero aportarte mi asesoría profesional, para que seas capaz de mejorar tu aspecto físico y emocional a través de la creación de nuevos hábitos que te garantizan un desarrollo integral completo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End mission Area */}
            {/* Start importance Area */}
            <div id="importance" className="fix">
                <div className="rn-blog-area ptb--120 bg_color--5 mb-dec--30">
                    <div className="container bg_image--importance">
                        <div className="row align-items-end bg-color-opacity">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-title text-center">
                                    <h2 className="title">El Beneficio de tener un <stronge>entrenador personal</stronge> .</h2>
                                    <p>El <stronge>Personal Trainer</stronge>, es ese puente que te ayudará a hacer realidad ese cambio físico que tanto quieres; a través de una <stronge>planificación</stronge> bien elaborada en base a tus objetivos y requerimientos basicos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End importance Area */}
            {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container-about">
                            <div className="row row--35 ">
                                <div className="col-lg-5">
                                    <div className="about-inner inner ">
                                        <div className="section-title">
                                            <br></br>
                                            <h2 className="title text-center">Sobre mí</h2>
                                            <br></br>
                                            <br></br>
                                            <p className="description">Hola, me llamo Carlos <stronge>Maldonado</stronge>, soy profe de educación física y soy de Caracas, Venezuela.</p>
                                            <br></br>
                                            <p className="description">Fui atleta de natación y aguas abiertas cuando chico y participe en carreras de calle de 5, 10 y 15k. Tengo más de 10 años de experiencia en el ámbito deportivo y del entrenamiento personalizado. Apasionado del Fútbol y amante del buen café.</p>
                                            <br></br>
                                            <br></br>
                                            <p className="description text-center">¡Pienso que el compromiso es la diferencia entre lo que fue, a lo que puedo ser!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about-8.webp" alt="About Images, Carlos Maldonado, Entrenador Personal, Personal Training" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End About Area */}

            {/* Start Testimonial Area */}
            <div id="testimonial" className="fix">
                <div className="about-area ptb--60  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container ">
                            <div className="row row--35 align-items-center">
                                <Testimonial></Testimonial>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Testimonial Area*/}

            {/* Start Service Area  */}
            <div id="pricing" className="fix">
                <div className="rn-blog-area ptb--120 bg_color--5 mb-dec--30">
                    <div className="container">
                        <div className="row align-items-end bg-color-opacity">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                    <h2 className="title">PLANES</h2>
                                    <p className="text-price">Si bien cada plan de entrenamiento es elaborado de manera personalizada, en base a los objetivos y requerimientos básicos de cada persona, todos tienen como prioridad el aumento de la fuerza en general.</p>
                                    <p>¡Ya que al mejorar esta capacidad, mejoraríamos todas las demás!</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                <PrecioList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <h2 className="end-text">¡No dejes que otro te cuente la historia, salí y escribí la tuya!</h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Service Area  */}
            <FooterTwo />
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
        </div>
    )
}

export default PortfolioLanding;
