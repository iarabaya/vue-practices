
const { createApp, ref } = Vue;

const app = createApp({
    // template: `
    // <h1>{{ message }}</h1>
    // <p>Desde app.js</p>
    // <p>-  {{ author }}</p>
    // `,
    setup() {
        console.log('Hola mundo!');

        let message = ref("I'm Batman");
        const author = ref('Bruce Wayne');

        // setTimeout(() => {
        //     // message = 'Soy Goku';
        //     message.value = 'Hola, soy Goku';
        //     author.value = 'Goku';
        //     console.log('Ejecutado');
        // }, 1000)

        const changeMessage = () => {
            message.value = 'Hola, soy Goku';
            author.value = 'Goku';
        }

        return { message, author, changeMessage }
    }
});

app.mount('#myApp')