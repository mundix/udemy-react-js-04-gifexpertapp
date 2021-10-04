import React from 'react';

// export const GifGridItem = ( props) => {
export const GifGridItem = ( {id, title, url}) => {


    return (
        <div className='card'>
            {/* {img.title} */}
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
