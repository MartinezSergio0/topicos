const body = document.querySelector('body')

const colores = ['fuchsia','lime','aqua','bisque','lightcoral', 'whitesmoke']

for(let i = 0; i <10; i++)
{
    const div = document.createElement('div')
    div.style.height = '100px'
    div.style.backgroundColor = colores[Math.floor(Math.random()*colores.length)]
    body.appendChild(div)
}