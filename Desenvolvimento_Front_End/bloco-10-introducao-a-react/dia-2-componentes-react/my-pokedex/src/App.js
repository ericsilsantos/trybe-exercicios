// import logo from './logo.svg';
import './App.css';
import data from './data'
import Pokedex from './Pokedex'

function App() {
  return (
    <main>
      <h1>Pokedex</h1>
      <div>
        {data.map((pokemon) => 
          <Pokedex 
            key={pokemon.id} 
            nome={pokemon.name} 
            tipo={pokemon.type}
            peso={pokemon.averageWeight.value}
            unidadePeso={pokemon.averageWeight.measurementUnit}
            imagem={pokemon.image}
          />
        )}
      </div>
    </main>
  );
}

export default App;
