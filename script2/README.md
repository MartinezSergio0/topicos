# Descripcion
Este codigo de JavaScript genera 10 contenedores 'div' con una altura de 100 pixeles basandose en el Script1 con la diferencia de que la lista de colores contiene 20 elementos y los colores no se repetiran mas de una vez. Los contenedores son agregados al cuerpo de un documento HTML.

# Funcionamiento
Para elegir los colores de los contenedores se define una estructura que contendra 20 colores. Ademas se hace una copia del arrego de colores.
``` javascript
const colores = ['blue', 'red', 'green', 'yellow', 'orange', 'purple', 'cyan', 'magenta', 'brown', 'lightgray', 'darkgray', 'lightblue', 'lightgreen', 
    'lightyellow', 'lightcyan', 'lightpink', 'lightcoral', 'lightseagreen', 'lightsalmon', 'lightsteelblue']
const coloresRestantes = colores.slice()
```
Para generar los diez contenedores se utiliza un ciclo for.
``` javascript
for(let i = 0; i <10; i++)
{
    const div = document.createElement('div')
    div.style.height = '100px'
    let color = Math.floor(Math.random()*coloresRestantes.length)
    div.style.backgroundColor = coloresRestantes[color]
    coloresRestantes.splice(color,1)
    body.appendChild(div)
}
```
* Este ciclo:
    * Crea un nodo div(contenedor de HTML).
    * Cambia la altura del contenedor creado a 100px.
    * Mediante la funcion random genera un numero que utilizara como indice en el arreglo de colores restantes.
    * Cambia el color de fondo del contenedor usando el numero generado como indice.
    *  Borra el color del arreglo.
    * Agrega el nodo al body(cuerpo) del documento HTML.
