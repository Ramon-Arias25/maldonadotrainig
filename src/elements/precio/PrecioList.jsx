import React ,{ Component }from "react";

const PrecioList = [
    {
        title: 'TRANQUI',
        precio:'11.400$',
        frecuencia: '2 Veces por semana',
        nutricion: '1 cita nutricional con sus respectiva medición antropométrica',
        kinesiologo: '1 sesión kinesiológica',
        bebida: '1 bebida isotonica de 500cc por sesión de entrenamiento',
        whatsapp:'https://api.whatsapp.com/send?phone=+541123742226&text=carlos%20me%20interesa%20el%20plan%20tranqui%20como%20continuamos?'
    },
    {
        title: 'MANIJA',
        precio:'14.600$',
        frecuencia: '3 Veces por semana',
        nutricion: '1 cita nutricional con sus respectiva medición antropométrica',
        kinesiologo: '1 sesión kinesiológica',
        bebida: '1 bebida isotonica de 500cc por sesión de entrenamiento',
        whatsapp:'https://api.whatsapp.com/send?phone=+541123742226&text=carlos%20me%20interesa%20el%20plan%20manija%20como%20continuamos?'
    },
    {
        title: 'FULL',
        precio:'17.800$',
        frecuencia: '4 Veces por semana',
        nutricion: '1 cita nutricional con sus respectiva medición antropométrica',
        kinesiologo: '1 sesión kinesiológica',
        bebida: '1 bebida isotonica de 500cc por sesión de entrenamiento',
        whatsapp:'https://api.whatsapp.com/send?phone=+541123742226&text=carlos%20me%20interesa%20el%20plan%20Full%20como%20continuamos?'
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = PrecioList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href={val.whatsapp}>
                                <div className="service service__style--2">
                                    <div className="content">
                                        <h1 className="title text-center">{val.title}</h1>
                                        <p>{val.frecuencia}</p>
                                        <p>{val.nutricion}</p>
                                        <p>{val.kinesiologo}</p>
                                        <p>{val.bebida}</p>
                                        <h2 className="title text-center">{val.precio}</h2>
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
