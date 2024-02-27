# Descripcion
Este codigo de JavaScript genera 10 contenedores 'div' con una altura de 100 pixeles y les asigna un color aleatorio seleccionado de una lista predefinida.Los contenedores son agregados al cuerpo de un documento HTML

# Funcionamiento
Para elegir los colores de los contenedores se define una estructura que contiene los colores.
``` javascript
const colores = ['fuchsia','lime','aqua','bisque','lightcoral', 'whitesmoke']
```
Para generar los diez contenedores se utiliza un ciclo for.
``` javascript
for(let i = 0; i <10; i++)
{
    const div = document.createElement('div')
    div.style.height = '100px'
    div.style.backgroundColor = colores[Math.floor(Math.random()*colores.length)]
    body.appendChild(div)
}
```
* Este ciclo:
    * Crea un nodo div(contenedor de HTML).
    * Cambia la altura del contenedor creado a 100px.
    * Cambia el color de fondo del contenedor usando un numero generado aleatoriamente como indice.
    * Agrega el nodo al body(cuerpo) del documento HTML.