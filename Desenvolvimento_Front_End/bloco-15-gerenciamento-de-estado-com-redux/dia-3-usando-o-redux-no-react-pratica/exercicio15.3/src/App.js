import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// import { Provider } from 'react-redux';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import ClientesCadastrados from './Pages/ClientesCadastrados'
// import store from './redux/store/store';

function App() {
  return (
    // <Provider store={ store }>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/login" component={ Login } />
          <Route path="/cadastro" component={ Cadastro } />
          <Route path="/clientes" component={ ClientesCadastrados } />
        </Switch>
      </BrowserRouter>
    // {/* </Provider> */}
  );
}

export default App;
