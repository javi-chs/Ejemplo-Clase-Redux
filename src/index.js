import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//Importamos esto como primer paso para implementar redux.
// Dependecias de redux
import {createStrore} from 'redux'
import {Provider} from 'react-redux'
// Creamos el store a partir de un conjunto de Reducers
const store = createStrore();
ReactDOM.render(
    //Provaider SIEMPRE tiene el Atributo/prop  strore.
<Provider store={store}>
    
    <App/>

</Provider>
,document.getElementById('root'));


serviceWorker.unregister();
