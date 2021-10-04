import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon ball'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon ball']);

    // const handleAdd = (name = 'HunterXHuner') => {
    //     setCategories( cats => [...cats, name]);
    // }

    // La funcion setCategories, se pasa como argumento , y es una referencia por eso 
    // Me permite acceder a categories para asignarlo 
    return (
        <>
          <h2>Gif Expert App</h2>  
          <AddCategory setCategories={setCategories}/>
          <hr />
        
          <ol>
              { categories.map( (category, index) => {
                  return <li key={category}>{category}</li>;
              })}
          </ol>
        </>
    )
}
