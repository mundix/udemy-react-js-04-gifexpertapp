import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    // Necesito saber lo que l apersona escribe
    //Si no le pongo nada en el intialValue del useStatus esto me devuelve undefined, y 
    // Por eso puede dar un error no controlado al usar el input 
    const [inputValue, setInputValue] = useState(''); //string vacio default value 

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
            {/* <h1>{inputValue}</h1> */}
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