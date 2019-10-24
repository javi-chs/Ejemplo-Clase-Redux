// Creamos el estado inicial IMPORTANTE se ponen en mayusculas por convencion al ser constantes.
const INITIAL_STATE = {
    titulo:'',
    anyo:0,
    director: "",
    genero:"",
    actores: [],
    recaudacion:0,
    enCines:false
}
const movie = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case 'NEW_MOVIE':
            // Recogemos en todas estas constantes de lo que nos devuelva actions.payload que es el nuevo estado.
            // si el nombre de las propiedades conicide con el valor por ES6 hace match y se asignan automaticamente 
            //los valores. ********VER MOVIE.JS EN ACTIONS*********

            /*Valores*/ const {titulo,anyo,director,genero,actores,recaudacion,enCines} = action.payload;
            return{
                ...state,
  /*Propiedad*/ titulo:titulo, /*Valor*/
                anyo:anyo,
                director: director,
                genero,
                actores,
                recaudacion,
                enCines
            }
        

        default:
            return state;
    }
}

export default movie;