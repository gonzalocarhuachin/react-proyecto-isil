import React, { Component } from 'react';

export default class Terminos extends Component{
    render(){
        let contenido = <p>Texto de Prueba</p>;
        return(
            <section id="terminos" className="padded">
                <div className="container">
                    <h2>Terminos y Condiciones</h2>
                    {contenido}
                </div>
            </section>
        );
    }
};