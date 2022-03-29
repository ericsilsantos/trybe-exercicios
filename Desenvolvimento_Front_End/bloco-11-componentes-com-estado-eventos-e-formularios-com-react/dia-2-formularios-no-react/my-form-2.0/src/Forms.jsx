import React from 'react';
import DadosPessoais from './DadosPessoais';
import DadosEmprego from './DadosEmprego';

class Forms extends React.Component{
  render(){
    return(
      <form >
        <DadosPessoais />
        <DadosEmprego />
        <div>
          <button type='submit'>Submit</button>
          <button>Limpar</button>
        </div>
      </form>
    )
  }
}

export default Forms