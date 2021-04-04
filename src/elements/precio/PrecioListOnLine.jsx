import React ,{ Component }from "react";
import {FaWhatsapp} from 'react-icons/fa';

const PrecioListIndividual = [
    {
        title: 'PLANI 1',
        precioFull:'8.000$',
        precioDescuento:'6.000$',
        frecuencia: '',
        incluye0: '- Planificación de entrenamiento mensual',
        incluye1: '- 1 sesión nutricional',
        incluye2: '',
        nulo: '',
        whatsapp:'https://clck.ru/Ttqvn'
    },
    {
        title: 'PLANI 3',
        precioFull:'16.000$',
        precioDescuento:'12.000$',
        frecuencia: '',
        incluye0: '- Macrociclo Deportivo por 3 meses',
        incluye1: '- 1 sesión nutricional con medición antropometrica',
        incluye2: '',
        nulo: '',
        whatsapp:'https://clck.ru/TtqyZ'
    },
    {
        title: 'PLANI 6',
        precioFull:'24.000$',
        precioDescuento:'18.000$',
        frecuencia: '',
        incluye0: '- Macrociclo Deportivo por 6 meses',
        incluye1: '- 2 sesiones de nutrición + medición antropometrica',
        incluye2: '',
        nulo: '',
        whatsapp:'https://clck.ru/TtrCM'
    }
]

class ServiceThree extends Component{
    render(){
        const {column} = this.props;
        const ServiceContent = PrecioListIndividual.slice(0 , this.props.item);

        return(
            <React.Fragment>
                <div>
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
                <div className="service service__style--2 subservices">
                    <div className="content">
                    <h3 className="title text-center">Aclaraciones:</h3>
                        <br></br>
                        <br></br>
                        <p className="text-price-end" >- Cada sesión de entrenamiento tiene una hora de duración</p>
                        {/* <p className="text-price-end" >- Con el valor del abono del plan que elijas disfrutaras de los beneficios que este incluye por un mes.</p> */}
                        <p className="text-price-end" >- Los entrenamientos podrán ser realizados en parques al aire libre, en gimnasios, o en domicilios si las condiciones lo permiten.</p>
                        <p className="text-price-end" >- Todos los planes presenciales individuales incluyen una bebida deportiva por sesión de entrenamiento</p>
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
