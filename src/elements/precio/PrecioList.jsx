import React ,{ Component }from "react";

const PrecioList = [
    {
        title: 'TRANQUI',
        precioFull:'16.667$',
        precioDescuento:'11.400$',
        frecuencia: '2',
        whatsapp:'https://clck.ru/RVUKN'
    },
    {
        title: 'MANIJA',
        precioFull:'22.000$',
        precioDescuento:'14.600$',
        frecuencia: '3',
        whatsapp:'https://clck.ru/RVUL9'
    },
    {
        title: 'A FULL',
        precioFull:'27.333$',
        precioDescuento:'17.800$',
        frecuencia: '4',
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
                                        <h1 className="title text-center">{val.title}</h1>
                                        <p className="text-center">{val.frecuencia} Veces por semana</p>
                                        <h4 className="title text-center strikethrough" >{val.precioFull}</h4>
                                        <p className="text-center sale-off">25% off</p>
                                        <h2 className="title text-center">{val.precioDescuento}</h2>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                <div className="service service__style--2 subservices">
                    <div className="content">
                    <h3 className="title text-center">Todos los planes incluiyen</h3>
                        <p><strong> 1 </strong> Cita nutricional con sus respectiva medición antropométrica</p>
                        <p><strong> 1 </strong> Sesión kinesiológica</p>
                        <p><strong> 1 </strong> Bebida isotonica de 500cc por sesión de entrenamiento</p>
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
