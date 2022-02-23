import React from 'react';

class DadosPessoais extends React.Component{
  render(){
    return(
      <fieldset className='dados'>
        <label htmlFor="nome">Nome:
          <input type='text' name="nome" id="" maxlength="40"></input>
        </label>

        <label htmlFor="email">Email:
          <input type='text' name="email" id="" maxlength="40"></input>
        </label>

        <label htmlFor="cpf">CPF:
          <input type='text' name="cpf" id="" maxlength="50"></input>
        </label>

        <label htmlFor="endereço">Endereço:
          <input type='text' name="endereço" id="" maxlength="11"></input>
        </label>

        <label htmlFor="cidade">Cidade:
          <input type='text' name="cidade" id="" maxlength="200"></input>
        </label>

        <label htmlFor="estado">Estado:
          <select name="estado">
            <option value="">Amazonas</option>
            <option value="">Minas Gerais</option>
            <option value="">Sergipe</option>
            <option value="">São Paulo</option>
            <option value="">Rio Grande do Sul</option>
          </select>
        </label>

        <div>
          <span>Moradia:</span>
          <label htmlFor="casa">
            <input id="casa" type="radio" name="moradia"/> Casa
          </label>
          
          <label htmlFor="apartamento">
            <input id="apartamento" type="radio" name="moradia"/> Apartamento
          </label>
        </div>
      </fieldset>
    )
  }
}

export default DadosPessoais;