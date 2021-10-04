import React, { useState, useEffect } from 'react'

export const GifGrid = ({category}) => {
    // Necesito recibir la categoria y llamar la peticion http 

    const [counter, setCounter] = useState(0);
    useEffect(() => {
        getGifs();
    }, []); //cuando se pone el [] , ecita que se ejecute mas de una vez 

    const getGifs = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=Nr4bfrgRK7obHM3O68YwvQ2iUmuxi8Yj&q=Rick+and+Morty&limit=10`;
        const resp = await fetch(url);
        // const data = await resp.json();
        const {data} = await resp.json();
        // resp.ok ?

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                // url: img.images.downsized_medium.url
                url: img.images?.downsized_medium.url //? es por si no llega 
            };
        });
        console.log(gifs)
         
    }

    // getGifs();

    return (
        <>
            <h2>{counter}</h2>
            {/* <h3>{category}</h3> */}
            <li key={category}>{category}</li>
            <button onClick={() => {setCounter(c => c + 1)}}>Count</button>
        </>
    )
}
