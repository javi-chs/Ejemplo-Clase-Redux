import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//Importamos esto como primer paso para implementar redux.
// Dependecias de redux
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import RootReducers from './reducers' //RootReducers nos lo definimos en index.js dentro de la carpeta reducers que 
//creamos en el primer paso.
// Creamos el store a partir de un conjunto de Reducers
const store = createStore(RootReducers);
ReactDOM.render(
    //Provider SIEMPRE tiene el Atributo/prop  strore.
<Provider store={store}>
    
    <App/>

</Provider>
,document.getElementById('root'));


serviceWorker.unregister();
