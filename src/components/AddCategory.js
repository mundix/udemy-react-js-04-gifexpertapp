import React, { useState } from 'react';

export const AddCategory = () => {

    // Necesito saber lo que l apersona escribe
    const [inputValue, setInputValue] = useState('Hola Mundo');

    // Cada ves que esa caja de trexto cambie, se ejecuta esta funcion de flecha
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
    }

    return (
        <>
            <h1>{inputValue}</h1>
            <input 
                type="text" 
                value = {inputValue}
                // onChange={handleInputChange}
                onChange={ (e) => {handleInputChange(e);}}
                />           
        </>
    )
}
