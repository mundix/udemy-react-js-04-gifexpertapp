import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    // Necesito saber lo que l apersona escribe
    const [inputValue, setInputValue] = useState();

    // Cada ves que esa caja de trexto cambie, se ejecuta esta funcion de flecha
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.length > 2) {
            setCategories(cats => [...cats, inputValue]);
            setInputValue('');
        }
        // console.log('Submit Hecho');
    }

    //Si el form es el unico elemento que se devuelve ,no neceisto el <> los fragments </>
    return (
        <form onSubmit={handleSubmit}>
            <h1>{inputValue}</h1>
            <input 
                type="text" 
                value = {inputValue}
                // onChange={handleInputChange}
                onChange={ (e) => {handleInputChange(e);}}
                />   
        </form>        
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
  };