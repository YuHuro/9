const input = document.querySelector('#mainInput')
const button = document.querySelector('#mainButton')
const block = document.querySelector('#mainBlock')

function squareNum() {
    if(isNaN(input.value) || input.value === ''){
        block.innerHTML += '<h1>' + 'Введите число' + '</h1>'
    }else{
        block.innerHTML += '<h1>' + input.value * input.value + '</h1>'
    }
}

button.addEventListener('click', squareNum)