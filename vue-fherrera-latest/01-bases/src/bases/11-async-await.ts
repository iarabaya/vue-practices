import type { GIFResponse } from "../interfaces/gif.response";
import giphyApi from "./10-axios";

export const getImage = async () => {
    try {
        const res = await giphyApi.get<GIFResponse>('/random');
        return res.data.data.images.downsized.url;
    } catch (error) {
        throw 'Url no encontrado';
    }
};

// export const getImagePromise = () => {
//     return new Promise( resolve => {
//         resolve('https://url-de-mi-sitio-web/image1.jpg')
//     });
// }



console.log(getImage()); //va a mostrar pending

getImage()
    .then((url) => console.log({ url }))
    .catch(error => console.log(error))