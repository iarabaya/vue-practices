import type { GIFResponse } from "../interfaces/gif.response";
const apiKey = 'asdasdafda';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(res => res.json())
    .then((body: GIFResponse) => console.log(body.data.images.downsized.url))
    .catch(err => console.info(err))