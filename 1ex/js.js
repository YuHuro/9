const x = document.querySelector('#x')
const y = document.querySelector('#y')
const block = document.querySelector('.mainBlock')
const button = document.querySelector('#mainBtn')

function moveBlock(){
    let temporaryY = parseInt(y.value)
    let temporaryX = parseInt(x.value)
    
    block.style.top = temporaryY + 'px'
    block.style.left = temporaryX + 'px'
}
button.addEventListener('click', moveBlock)