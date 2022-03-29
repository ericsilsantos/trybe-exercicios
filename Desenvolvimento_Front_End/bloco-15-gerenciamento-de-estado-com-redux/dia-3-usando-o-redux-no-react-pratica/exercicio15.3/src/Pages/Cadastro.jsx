import React from 'react';
import { connect } from 'react-redux';
import { actionLogin } from '../redux/actions/action';

class Cadastro extends React.Component {
  constructor(){
    super();
    this.state = {
      nome: '',
      idade: '',
      email: '',
    }
  }

  handleChanges = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  handleButton = () => {
    const { salvarNoStore } = this.props;
    console.log(this.state);
    salvarNoStore(this.state);
  }

  render() {
    return(
      <div>
        <form action="">
          <label htmlFor="nome">
            Nome:
            <input name='nome' type="text" onChange={ this.handleChanges }/>
          </label>
          <label htmlFor="idade">
            Idade:
            <input name='idade' type="text" onChange={ this.handleChanges } />
          </label>
          <label htmlFor="email">
            Email:
            <input name='email' type="text" onChange={ this.handleChanges } />
          </label>
          <button type='button' onClick={ this.handleButton }>Criar cadastro</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  salvarNoStore: (state) => dispatch(actionLogin(state)),
})

export default connect(null, mapDispatchToProps)(Cadastro);
