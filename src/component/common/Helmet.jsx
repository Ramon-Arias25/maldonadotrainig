import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} </title>
                    <meta name="description" content="Preparación física integral | nutrición y antropometría | kinesiología deportiva" />
                    <meta name="description" content="Entranamientos deportivos planificados en base a los objetivos y requerimientos de cada persona" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
