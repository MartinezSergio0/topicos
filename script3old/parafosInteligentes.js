const body = document.querySelector('body')

const palabras = [
    "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", 
    "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", 
    "magna", "aliqua", "Ut", "enim", "ad", "minim", "veniam", "quis", "nostrud", 
    "exercitation", "ullamco", "laboris", "nisi", "aliquip", "ex", "ea", "commodo", 
    "consequat", "Duis", "aute", "irure", "dolor", "in", "reprehenderit", "in", 
    "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla", 
    "pariatur", "Excepteur", "sint", "occaecat", "cupidatat", "non", "proident", 
    "sunt", "in", "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id", 
    "est", "laborum"
];

function generarParrafo()
{
    const cantidadDePalabras = Math.floor(Math.random() * (50)) + 50;
    let texto = ""
    for(let i = 1; i < cantidadDePalabras; i++)
    {
        let palabra = palabras[Math.floor(Math.random() * palabras.length)]
        texto += palabra + " "
    }
    const CARACTERES = texto.length;
    texto += ". El parrafo contiene " + CARACTERES + " caracteres"
    return texto
}

for (let i = 0; i < 5; i++)
{
    const parrafo = document.createElement('p')
    parrafo.textContent = generarParrafo()
    body.appendChild(parrafo)
}