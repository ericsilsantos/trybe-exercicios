import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { MOVE_CAR } from './actionCreators';
import { CHANGE_SIGNAL } from './actionCreators';

//Primeira reducer
const stateCar = {
  cars: {
    red: false,
    blue: false,
    yellow: false,
  },
};

const carReducer = (state = stateCar, action) => {
  switch (action.type) {
    case MOVE_CAR:
      return {
        ...state,
        cars: { ...state.cars, [action.car]: action.side }
      };
    default:
      return state;
  }
}

//Segunda reducer
const initialState = {
  signal: { color: 'red' },
}

const trafficReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SIGNAL:
      return {
        ...state,
        signal: { ...state.signal, color: action.payload }
      };
    default:
      return state;
  }
}
const rootReducer = combineReducers({carReducer, trafficReducer})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
