const originalQuotes = [
    {
        quote: 'The night is darkest just before the dawn. And I promise yout, the dawn is coming.', 
        author: 'Harvey Dent, The Dark Knight'
    },
    {
        quote: 'I believe what doesn’t kill you simply makes you, stranger', 
        author: 'The Joker, The Dark Knight'
    },
    {
        quote: 'Your anger gives you great power. But if you let it, it will destroy you... As it almost did me', 
        author: 'Henri Ducard, Batman Begins'
    },
    {
        quote: 'You either die a hero or live long enough to see yourself become the villain.', 
        author: 'Harvey Dent, The Dark Knight'
    },
    {
        quote: 'If you’re good at something, never do it for free.', 
        author: 'The Joker, The Dark Knight'
    },
    {
        quote: 'Yes, father. I shal become a bat.', 
        author: 'Batman, Batman: Year One'
    },
]

const { createApp, ref, computed } = Vue;

const app = createApp({
    setup() {

        //si queremos que la variable sea reactiva uso ref
        const showAuthor = ref(true);
        const quotes = ref(originalQuotes);
        const totalQuotes = computed(() => quotes.value.length);
        const newMessage = ref("");

        const toggleAuthor = () => {
            showAuthor.value = !showAuthor.value;
        }
        
        const addQuote = () => {
            if(newMessage.value.length != 0){
                quotes.value.unshift({ quote: newMessage.value, author: "Yo Misma"});
            }
            //se limpua el input
            newMessage.value = "";
        }

        return {
            quotes,
            showAuthor,
            toggleAuthor,
            addQuote,
            totalQuotes,
            newMessage
        }

    }
});

app.mount("#myApp")