const DADOS_LOGIN = {
  name: '',
  idade: 0,
  email: '',
}

const criarLogin = (state = DADOS_LOGIN, action) => {
  switch(action.type){
  case "LOGIN":
    return { ...action.state };
  default:
    return state;
  }
};

export default criarLogin;
