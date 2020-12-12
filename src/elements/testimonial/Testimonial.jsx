import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Testimonial extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="title-practice">En la practica</h2>
                        <br></br>
                        <br></br>
                        <Tabs>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Nunca me cope de lleno con ningun deporte en mi vida, pero desde que entreno con carlitos me divierto ademas de conseguir resultados reales</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>DALVA FALCONI</span></h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Admitire que hacer ejercicio no es lo mio, pero ya tengo un par de años entrenando con mi tocayo y e mejorado mi fuerza y movilidad como nunca antes.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>CARLOS CALENS</span></h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Tuve una lesion de cadera cuando chica y me impedia realizar algunos movimientos, trabajando de la mano de Carlos hoy tengo una movilidad impecable</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>ANA DE ERRANDONEA</span></h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Con Carlitos hemos mejorado mucho la movilidad y fuerza, tras mas de 2 años de trabajo con el seguimos por mas.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>JUAN ERRANDONEA</span></h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Conoci a Charly hace unos 2 años, le pedi una rutina de onda y al dia de hoy e mejorado fisicamente como nunca antes, su guia y motivacion son su plus</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>RODRIGO VILLALBA</span></h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>A Charly lo conoci en un gym, pegamos onda y comenzamos a entrenar, con el me divierto y encima me hace llegar para el verano</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>MARIANA BODI</span></h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Que si dietas, que si tal rutina, que si cardio o pesas, antes de conocer a Charly nada, luego de sus planificaciones de 10</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>DYLAN GUELMAN</span></h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Conoci a Charly por referencia de un amigo, tome una clase de prueba con el y desde entonces me cope con sus planificaciones y manera de entrenar </p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>ROI CORRADO</span></h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>entreno con carlos de hace mas de 2 años y sin duda alguna los mejores resultados los he obtenido bajo su asesoria y planificacion</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>KARINA CHAVEZ</span></h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Gracias a la rutina personalizada de Carlos logre mejorar mi fuerza y movilidad ademas de aumentar mi masa corporal en solo 6 meses, es un genio</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>ANTONELA FORCINITI</span></h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabList className="testimonial-thumb-wrapper">
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-1.jpg" alt="Testimonial Images" />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-2.jpg" alt="Testimonial Images" />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-3.jpg" alt="Testimonial Images" />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-4.jpg" alt="Testimonial Images" />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-5.jpg" alt="Testimonial Images" />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-6.jpg" alt="Testimonial Images" />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-7.jpg" alt="Testimonial Images" />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-8.jpg" alt="Testimonial Images" />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-9.jpg" alt="Testimonial Images" />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-10.jpg" alt="Testimonial Images" />
                                        </div>
                                    </div>
                                </Tab>
                            </TabList>
                        </Tabs>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Testimonial;