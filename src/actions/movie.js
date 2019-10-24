export const newMovie = ({titulo,anyo,genero,director,actores,recaudacion,enCines}) =>({
    type:'NEW_MOVIE',
    payload:{
        titulo,
        anyo,
        director,
        genero,
        actores,
        recaudacion,
        enCines
    }
})