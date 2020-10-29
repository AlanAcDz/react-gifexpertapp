
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${ encodeURI(category) }&api_key=seJVC72NRonD4pekXhHfSaM6LVPOtxGK`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
    }));
    return gifs;
};
