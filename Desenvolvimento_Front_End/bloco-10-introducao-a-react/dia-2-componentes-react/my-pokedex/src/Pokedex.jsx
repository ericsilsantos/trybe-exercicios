import React from "react";
import PropTypes from 'prop-types';

class Pokedex extends React.Component{
    render(){
        return(
            <section className="pokemon" >
                <div className="flex-column">
                    <p>Nome: {this.props.nome} </p>
                    <p>Tipo: {this.props.tipo} </p>
                    <p>Peso: {this.props.peso} {this.props.unidadePeso}</p>
                </div>
                <div>
                    <img src={this.props.imagem} alt="" />
                </div>
            </section>
        );
    }
}

Pokedex.propTypes = {
    nome: PropTypes.string,
    tipo: PropTypes.string,
    peso: PropTypes.number,
    unidadePeso: PropTypes.string,
    imagem: PropTypes.string
}

export default Pokedex;