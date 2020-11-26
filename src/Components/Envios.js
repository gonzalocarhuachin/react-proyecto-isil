import React, { Component } from 'react';
import './Envios.css';

export default class Envios extends Component{
    constructor(props){
        super(props);
        this.state = {
            listaEnvios:[]
        };
    }

    componentDidMount(){
        const rutaServicio = "http://localhost/servicioangular/envios.php";
        fetch(rutaServicio)
            .then(
                res => res.json()
            )
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        listaEnvios:result
                    })
                }
            )
    }

    static dibujarEnvios(datosTablaEnvios){
        return(
            <tbody>
                {datosTablaEnvios.map(itemEnvio => 
                    <tr key={itemEnvio.idempresaenvio}>
                        <td>{itemEnvio.idempresaenvio}</td>
                        <td>{itemEnvio.nombre}</td>
                        <td>{itemEnvio.telefono}</td>
                    </tr>       
                )}
            </tbody>
        )
    }

    render(){
        let contenidoEnvios = Envios.dibujarEnvios(this.state.listaEnvios);
        return(
            <section id="envios" className="padded">
                <div className="container">
                    <h2>Envios</h2>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th>Codigo</th>
                                <th>Empresa</th>
                                <th>Telefono</th>
                            </tr>
                        </thead>
                        {contenidoEnvios}
                    </table>
                </div>
            </section>
        );
    }
};