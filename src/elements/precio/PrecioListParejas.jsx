import React ,{ Component }from "react";

const PrecioListParejas = [
    {
        title: 'DOSxDOS',
        precioFull:'21.333$',
        precioDescuento:'16.000$',
        frecuencia: '- 8 clases por mes (2 por semana)',
        incluye0: '- Hidratación Deportiva',
        incluye1: '',
        incluye2: '',
        nulo: '',
        whatsapp:'https://clck.ru/Ttqpa'
    },
    {
        title: 'DOSxTRES',
        precioFull:'32.000$',
        precioDescuento:'24.000$',
        frecuencia: '- 12 clases por mes (3 por semana)',
        incluye0: '- Hidratación Deportiva',
        incluye1: '- 1 Recovery sesión por persona.',
        incluye2: '',
        nulo: '',
        whatsapp:'https://clck.ru/Ttqrx'
    }
]
class ServiceThree extends Component{
    render(){
        const {column} = this.props;
        const ServiceContentParejas = PrecioListParejas.slice(0 , this.props.item);

        return(
            <React.Fragment>
                <div className="row justify-content-center mr--0 ml--0">
                    {ServiceContentParejas.map( (val , i) => (
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
                                                <span>Escribime</span>
                                                <i className="fa fa-whatsapp whatsapp-icon"></i>
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
