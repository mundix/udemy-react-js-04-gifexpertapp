// los hooks no son mas que funciones, y son hooks por que empiezan con useNameOfHook => useFetchGif

import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';

// Se puede usar rafc para crear esta estructura de la funcion , y borrar el return por que esto es una funcion.
export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // No peuden ser async por que esperan algo sincrono
    // useEffect( async() => { NO 
    useEffect(() => {
        // Peticion http , donde traigo esas imagenes
        getGifs(category)
            .then( imgs => {

                setTimeout(() => {
                    setState({
                        data: imgs, 
                        loading: false
                    });

                }, 3000);
            });
    }, [category]); //solo cuando la categoria cambia 

    return state; //la data que es un [] y loading en true { data:[], loading:false} 

}
