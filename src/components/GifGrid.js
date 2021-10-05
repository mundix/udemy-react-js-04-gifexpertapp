import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
    // Necesito recibir la categoria y llamar la peticion http 
    const [images, setImages] = useState([]); //inicializamos images como array vacio

    useEffect(() => {
        getGifs(category)
            // .then( imgs => {setImages(imgs) } );
            .then( setImages );
    // }, []); //cuando se pone el [] , ecita que se ejecute mas de una vez 
    }, [category]); //si la categoria cambia, vuelve y ejecuta esto. 

    

    // getGifs();

    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                {/* <ol> */}

                {/* {images.map( images => {
                    return <li key={images.id}>{images.title}</li>;
                })} */}
                {/* Return implicit */}
                {/* {images.map( img => (
                    <li key={img.id}>{img.title}</li>
                ))} */}
                {/* Usando la desestructuracion */}
                {/* {images.map( ({id, title}) => ( */}
                {images.map(img => (
                    <GifGridItem
                        key={img.id}
                        // img={img}
                        // Mando cada una de las propiedades en ves de la img con sus propiedeaes
                        {...img}
                    />
                ))}

                {/* </ol> */}
            </div>
        </>

    )
}
