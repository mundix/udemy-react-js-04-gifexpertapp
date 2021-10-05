
// Recuerda siempre ponerle el export par que pueda importarlo. 
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=Nr4bfrgRK7obHM3O68YwvQ2iUmuxi8Yj&q=${ encodeURI(category) }&limit=10`;
    const resp = await fetch(url);
    // const data = await resp.json();
    const { data } = await resp.json();
    // resp.ok ?

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            // url: img.images.downsized_medium.url
            url: img.images?.downsized_medium.url //? es por si no llega 
        };
    });
    // como es async es una promesa que devuevle las imagenes 
    return gifs;
}