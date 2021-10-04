import React from 'react';

// export const GifGridItem = ( props) => {
export const GifGridItem = ( {id, title, url}) => {

    console.log(id, title, url);

    return (
        <div>
            {/* {img.title} */}
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
