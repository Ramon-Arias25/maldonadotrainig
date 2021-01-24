import React ,{ Component }from "react";

const PrecioList = [
    {
        title: 'TRANQUI',
        precioFull:'16.000$',
        precioDescuento:'12.000$',
        frecuencia: '- 2 secciones por semana',
        incluye0: '- 1 sesión nutricional con medición antropometrica',
        incluye1: '',
        incluye2: '',
        nulo: '',
        whatsapp:'https://clck.ru/RVUKN'
    },
    {
        title: 'MANIJA',
        precioFull:'24.000$',
        precioDescuento:'18.000$',
        frecuencia: '- 3 secciones por semana',
        incluye0: '- 1 sesión nutricional con medición antropometrica',
        incluye1: '- 1 bebida isotonica por sesión de entrenamiento',
        incluye2: '',
        nulo: '',
        whatsapp:'https://clck.ru/RVUL9'
    },
    {
        title: 'A FULL',
        precioFull:'28.000$',
        precioDescuento:'18.000$',
        frecuencia: '- 3 secciones por semana',
        incluye0: '- 1 sesión nutricional con medición antropometrica',
        incluye1: '- 1 bebida isotonica por sesión de entrenamiento',
        incluye2: '- 1 sesión Kinesiólogica',
        nulo: '',
        whatsapp:'https://clck.ru/RVUML'
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = PrecioList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href={val.whatsapp}  target= "blank">
                                <div className="service service__style--2">
                                    <div className="content">
                                        <div className="reContent">
                                            <h1 className="title text-center">{val.title}</h1>
                                            <p className="text-price-end">{val.frecuencia}</p>
                                            <p className="text-price-end">{val.incluye0}</p>
                                            <p className="text-price-end">{val.incluye1}</p>
                                            <p className="text-price-end">{val.incluye2}</p>
                                        </div>
                                        <h4 className="title text-center strikethrough" >{val.precioFull}</h4>
                                        <p className="text-center sale-off">25% off</p>
                                        <h2 className="title text-center">{val.precioDescuento}</h2>
                                        <div className="text-center">
                                            <a href= {val.whatsapp} target="blank" className = "rn-button-style--3 btn-primary--wsp whatsapp">
                                                <span>Escribíme</span>
                                                <i className="fa fa-whatsapp whatsapp-icon"></i>
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
                        <p className="text-price-end" >Cada sesión de entrenamiento tiene una hora de duración</p>
                        <p className="text-price-end" >- Con el valor del abono del plan que elijas disfrutaras mes a mes de los beneficios que este incluye.</p>
                        <p className="text-price-end" >- Los entrenamientos podrán ser realizados en parques al aire libre, en domicilios si las condiciones lo permiten, o en gimnasios*.</p>
                        <p className="text-price-end" >- En caso de elegir entrenar en un gym consultame para ver opciones.</p>
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
