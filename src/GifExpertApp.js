import React, { useState } from 'react'

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon ball'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon ball']);

    const handleAdd = (name = 'HunterXHuner') => {
        // setCategories([...categories, name]);
        //  cast en el argumento es el estado anterior , donde se asigna , los elementos del argumento cats
        // mediante el spread operator el nuevo elemento. 
        setCategories( cats => [...cats, name]);
    }

    return (
        <>
          <h2>Gif Expert App</h2>  
          <hr />
          <button onClick={() => {
              handleAdd('HunterXHunter');
          }}>Agregar</button>
          <ol>
              { categories.map( (category, index) => {
                  return <li key={index}>{category}</li>;
              })}
          </ol>
        </>
    )
}
