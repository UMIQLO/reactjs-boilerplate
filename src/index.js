import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import MainAppContainer from './MainApp/containers/MainAppContainer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './rootReducer'
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
console.log(store.getState())
ReactDOM.render(<Provider store={store}>
  <MainAppContainer/></Provider>, document.getElementById("app"));
