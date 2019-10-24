import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux' 
import {newMovie} from './actions/movie'
const pelicula = {
  titulo: "Django",
  anyo: 2016,
  director: "Tarantino",
  recaudacion: 150000000,
  actores: "Jamie Foxx",
  genero: "Western",
  enCines: false,
}
function App(props) {
  return (
    <div className="App">
      <div>
        <p>Titulo :{props.titulo} </p>
        <p>Año:  {props.anyo}</p>
        <p>Director:{props.director} </p>
        <p>Genero:{props.genero} </p>
        <p>Actores {props.actores[0]}</p>
        <p>Recaudación:{props.recaudacion} </p>
        <p>¿En Cines? {props.enCines}</p>

      </div>
      <button type="button" onClick={()=>props.newMovie(pelicula)}>Generar Pelicula</button>
    </div>
  );
}
//Parametros de connect()
const mapStateToProps = state =>({
  titulo: state.movie.titulo,
  anyo: state.movie.anyo,
  director: state.movie.director,
  recaudacion: state.movie.recaudacion,
  actores: state.movie.actores,
  genero: state.movie.genero,
  enCines: state.movie.enCines,
})

const mapDispatchToProps = dispatch =>({
  newMovie:(movie) =>dispatch(newMovie(movie))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps  
)(App);
