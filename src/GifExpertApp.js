import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon ball'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon ball']);

    // const handleAdd = (name = 'HunterXHuner') => {
    //     setCategories( cats => [...cats, name]);
    // }

    return (
        <>
          <h2>Gif Expert App</h2>  
          <AddCategory/>
          <hr />
        
          <ol>
              { categories.map( (category, index) => {
                  return <li key={index}>{category}</li>;
              })}
          </ol>
        </>
    )
}
