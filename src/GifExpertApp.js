import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({defaultCategories = []}) => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon ball'];
    // const [categories, setCategories] = useState(['One Punch Men']);
    const [categories, setCategories] = useState(defaultCategories);

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
              {/* { categories.map( (category, index) => {
                  return <li key={category}>{category}</li>;
              })} */}
              { 
                // categories.map( category => <GifGrid category={category}/>)
                categories.map( category => (
                    <GifGrid 
                        key={category}
                        category={category}/>
                ))
              }
          </ol>
        </>
    )
}
