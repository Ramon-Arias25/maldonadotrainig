import React ,{ Component }from "react";
import {FaWhatsapp} from 'react-icons/fa';

const PrecioListIndividual = [
    {
        title: 'TRANQUI',
        precioFull:'18.666,67$',
        precioDescuento:'14.000$',
        frecuencia: '- 8 clases por mes',
        incluye0: '(2 por semana)',
        incluye1: '- 1 sesión nutricional',
        incluye2: '',
        nulo: '',
        whatsapp:'https://clck.ru/TtqZF'
    },
    {
        title: 'MANIJA',
        precioFull:'24.000$',
        precioDescuento:'18.000$',
        frecuencia: '- 12 clases por mes',
        incluye0: '(3 por semana)',
        incluye1: '- 1 sesión nutricional con medición antropometrica',
        incluye2: '',
        nulo: '',
        whatsapp:'https://clck.ru/TtqdR'
    },
    {
        title: 'A FULL',
        precioFull:'29.333$',
        precioDescuento:'22.000$',
        frecuencia: '- 16 clases por mes',
        incluye0: '(4 por semana)',
        incluye1: '- 1 sesión nutricional con medición antropometrica',
        incluye2: '- 1 Recovery sesion',
        nulo: '',
        whatsapp:'https://clck.ru/TtqhX'
    }
]

class ServiceThree extends Component{
    render(){
        const {column} = this.props;
        const ServiceContent = PrecioListIndividual.slice(0 , this.props.item);

        return(
            <React.Fragment>
                <div className="row mr--0 ml--0">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href={val.whatsapp}  target= "blank">
                                <div className="service service__style--2 bg-color-darkGray">
                                    <div className="content">
                                        <div className="reContent">
                                            <h1 className="title text-center">{val.title}</h1>
                                            <p className="text-price-end">{val.frecuencia}</p>
                                            <p className="text-price-end">{val.incluye0}</p>
                                            <p className="text-price-end">{val.incluye1}</p>
                                            <p className="text-price-end">{val.incluye2}</p>
                                        </div>
                                        {/* <h4 className="title text-center strikethrough" >{val.precioFull}</h4>
                                        <p className="text-center sale-off">25% off</p> */}
                                        <h2 className="title text-center">{val.precioDescuento}</h2>
                                        <div className="text-center">
                                            <a href= {val.whatsapp} target="blank" className = "rn-button-style--3 btn-primary--wsp whatsapp">
                                                <span>Escribime <FaWhatsapp/> </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
