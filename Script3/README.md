# Descripcion
Este codigo de JavaScript genera 5 parrafos con texto generado de manera aleatoria. Cada parrafo cuenta con, entre 50 y 100 palabras.
Al generar el parrafo hace un recuento de caracteres.

# Funcionamiento
El script cuenta con una funcion para generar el texto a partir de un arreglo con palabras predefinidas.

``` javascript
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
```
* Utiliza la funcion random para definir el numero de palabras que tendra el parrafo.
* Mediante un ciclo for que se repetira segun la cantidad de palabras:
    * Utilizara la funcion random para extraer una palabra del arreglo que las contiene.
    * Concatera esta palabra a la variable que contiene el texto.
* Utiliza la propiedad length para determinar el numero de caracteres del texto.
* Retorna el texto.

Para Generar cinco parrafos se utiliza un ciclo for.
``` javascript
for (let i = 0; i < 5; i++)
{
    const parrafo = document.createElement('p')
    parrafo.textContent = generarParrafo()
    body.appendChild(parrafo)
}
```
* Lo que realiza este ciclo for es:
    * Crear un nodo p(parrafo de HTML) y asignarlo a una variable.
    * Utilizar la funcion generarParrafo para cambiar el texto del parrafo.
    * Por ultimo lo agrega a el cuerpo(body) del HTML.
