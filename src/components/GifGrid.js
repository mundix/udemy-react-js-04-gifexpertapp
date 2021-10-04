import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    // Necesito recibir la categoria y llamar la peticion http 
    const [images, setImages] = useState([]); //inicializamos images como array vacio

    useEffect(() => {
        getGifs();
    }, []); //cuando se pone el [] , ecita que se ejecute mas de una vez 

    const getGifs = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=Nr4bfrgRK7obHM3O68YwvQ2iUmuxi8Yj&q=Samurai+X&limit=10`;
        const resp = await fetch(url);
        // const data = await resp.json();
        const { data } = await resp.json();
        // resp.ok ?

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                // url: img.images.downsized_medium.url
                url: img.images?.downsized_medium.url //? es por si no llega 
            };
        });
        console.log(gifs);
        setImages(gifs);
    }

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
