import React from 'react';

class DadosPessoais extends React.Component{
  render(){
    return(
      <fieldset className='dados'>
        <label htmlFor="resumo">Resumo do Currículo:<br />
          <textarea id="resumo" cols="30" rows="5" maxlength="1000"></textarea>
        </label>

        <label htmlFor="cargo">Cargo:<br />
          <textarea id="cargo" cols="30" rows="5" maxlength="40"></textarea>
        </label>

        <label htmlFor="descriçâo">Descrição do Cargo:<br />
          <input id="descrição" maxlength="500"></input>
        </label>
      </fieldset>
    )
  }
}

export default DadosPessoais