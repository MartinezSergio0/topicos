const body = document.querySelector('body')

const colores = ['blue', 'red', 'green', 'yellow', 'orange', 'purple', 'cyan', 'magenta', 'brown', 'lightgray', 'darkgray', 'lightblue', 'lightgreen', 
    'lightyellow', 'lightcyan', 'lightpink', 'lightcoral', 'lightseagreen', 'lightsalmon', 'lightsteelblue']
const coloresRestantes = colores.slice()

for(let i = 0; i <10; i++)
{
    const div = document.createElement('div')
    div.style.height = '100px'
    let color = Math.floor(Math.random()*coloresRestantes.length)
    div.style.backgroundColor = coloresRestantes[color]
    coloresRestantes.splice(color,1)
    body.appendChild(div)
}