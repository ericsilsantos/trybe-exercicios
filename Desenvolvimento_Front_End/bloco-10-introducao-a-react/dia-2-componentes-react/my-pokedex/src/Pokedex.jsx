import React from "react";
import data from './data'

class Pokedex extends React.Component{
    render(){
        return(
            data.map((pokemon) => 
            <section className="pokemon">
                <div>
                    <p>Nome: {pokemon.name} </p>
                    <p>Tipo:{pokemon.type} </p>
                    <p>Peso: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</p>
                </div>
                <div>
                    <img src={pokemon.image} alt="" />
                </div>
            </section>
            )
        );
    }
}

export default Pokedex;