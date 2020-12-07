//Creamos nuesto array que contenga en objetos nuestraas citas y autores
let quotes =[
    {
        "quote": "Eres lo que amas.",
        "author": "Taylor Swift"
      },
      {
        "quote": "Se ponen personas en tu vida por temporadas, por diferentes razones y para enseñarte lecciones.",
        "author": "Selena Gomez"
      },
      {
        "quote": "Tu eres el único que puede decidir por lo que otros te recordaran.",
        "author": "Taylor Swift"
      },
      {
        "quote": "La lección que he aprendido con más frecuencia en la vida es que siempre sabrás más en el futuro de lo que sabes ahora.",
        "author": "Taylor Swift"
      },
      {
        "quote": "No te preocupes, las personas tiran rocas a las cosas que brillan.",
        "author": "Taylor Swift"
      },
      {
        "quote": "Nunca le creas a alguien que te diga que no mereces lo que quieres.",
        "author": "Taylor Swift"
      },
      {
        "quote": "No importa lo que pase en la vida, sé bueno con la gente. Ser bueno con las personas es un legado maravilloso que dejar atrás.",
        "author": "Taylor Swift"
      },
      {
        "quote": "Las personas nunca han estado ahi para mi, pero la música si.",
        "author": "Taylor Swift"
      },
      {
        "quote": "Si eres capaz de mirarte en el espejo todos los días con las decisiones que tomas, ahí es donde comienza el poder.",
        "author": "Selena Gomez"
      },
      {
        "quote": "Todas las personas que me derriban, solo me inspiran a hacerlo mejor.",
        "author": "Selena Gomez"
      },
      {
        "quote": "No estás definido por una foto de Instagram, por un 'Me gusta', por un comentario. Eso no te define.",
        "author": "Selena Gomez"
      },
      {
        "quote": "No puedes tener miedo de lo que la gente diga, porque nunca vas a hacer felices a todos.",
        "author": "Selena Gomez"
      },
      {
        "quote": "Me doy cuenta de que todos quieren lo que no tienen. Pero al final del día, ¡lo que tienes adentro es mucho más hermoso que lo que está afuera!",
        "author": "Selena Gomez"
      },
      {
        "quote": "A veces, la persona por la que recibirías una bala es la persona que está detrás del gatillo.",
        "author": "Taylor Swift"
      },
      {
        "quote": "Si tienes tres personas en tu vida en las que puedes confiar, puedes considerarte la persona más afortunada del mundo.",
        "author": "Selena Gomez"
      },
      {
        "quote": "Si tienes tres personas en tu vida en las que puedes confiar, puedes considerarte la persona más afortunada del mundo.",
        "author": "Selena Gomez"
      }
]

window.onload = init;
function init(){
    generateQuote()
}

function generateQuote(){
    //Con esta variable sabremos el tamaño de nuetro array quotes
    let quotesLength = quotes.length;

    //Que dependiendo el tamaño del el array quotes, escoja una  quote al azar
    let randomQuote = Math.floor(Math.random() * quotesLength);
    let randomQuoteData = quotes[randomQuote];

    //Creamos esta variable para almacenar el link
    let tweetLink = "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text="
    

    //Creamos esta variable con la función replace para qe cada espacio se remplace por un %20
    // el / /g significa que cambiara todos los espacos, la g significa globalmente
    let quoteFormat = randomQuoteData.quote.replace(/ /g, "%20");

    tweetLink += quoteFormat;

    let authorFormat = randomQuoteData.author.replace(/ /g, "%20");

   tweetLink += " -" + authorFormat;

    document.getElementById('tweet-quote').href = tweetLink;
    document.getElementById('text').innerText = randomQuoteData.quote;
    document.getElementById('author').innerText = randomQuoteData.author;

}