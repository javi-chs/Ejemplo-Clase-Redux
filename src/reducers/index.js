import { combineReducers} from 'redux'
//Dependecias de reducers
import movie from './movie';

//Exportamos el combinador de reducers, es decir donde se alojan todos los reducers.
export default combineReducers({
    movie,
});