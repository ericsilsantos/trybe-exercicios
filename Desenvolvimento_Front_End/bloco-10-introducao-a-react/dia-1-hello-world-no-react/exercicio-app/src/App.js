// import logo from './logo.svg';
import './App.css';

const compromissos = ['Comer', 'Estudar', 'Viajar', 'Correr']

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div>
      <ol>
        {compromissos.map((compromisso) => Task(compromisso))}
      </ol>
    </div>
  );
}

export default App;
