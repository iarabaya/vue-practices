import axios from 'axios';

const tesloApi = axios.create({
  baseURL: import.meta.env.VITE_TESLO_API_URL,
});

// console.log(import.meta.env); hay que agregar VITE_ a las variables de entorno para agregarlas al objeto

//TODO: Interceptors

export { tesloApi };
