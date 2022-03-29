import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import criarLogin from '../reducers/criarLogin';

const store = createStore(criarLogin, composeWithDevTools());

export default store;
