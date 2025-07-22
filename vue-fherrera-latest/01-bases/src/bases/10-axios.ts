import axios from "axios";
import type { GIFResponse } from "../interfaces/gif.response";

const apiKey = 'asdasdafda';

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey,
    }
});

export default giphyApi;

giphyApi.get<GIFResponse>('/random')
    .then(res => console.log(res.data.data.images.downsized.url))
    .catch(err => console.info(err))
