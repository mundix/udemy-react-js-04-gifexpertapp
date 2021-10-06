import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
    // const state = useFetchGifs(); //Regresa el loading y la data 
    const { data: images, loading } = useFetchGifs(category); // se le va a pasar la category 

    return (
        <>
            <h3>{category}</h3>
            
            {loading && <p className='animate__animated animate__flash'>Loading</p>}

            <div className='card-grid'>
            {images.map(img => (
                    <GifGridItem
                        key={img.id}
                        // Mando cada una de las propiedades en ves de la img con sus propiedeaes
                        {...img}
                    />
                ))}

            </div>
        </>

    )
}
