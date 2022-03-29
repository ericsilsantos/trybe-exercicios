import React from 'react';

class Login extends React.Component {
  render() {
    return(
      <div>
        <form>
          <label htmlFor="user">
            Usuario:
            <input id='user' type="text" />
          </label>
          <label htmlFor="password">
            Senha:
            <input id='password' type="password" />
          </label>
          <button type='button'>Entrar</button>
        </form>
      </div>
    )
  }
}

export default Login;
