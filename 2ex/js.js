const input = document.querySelector('#inputText')
const button = document.querySelector('#submitInput')
const block = document.querySelector('#mainBlock')

function submitText(){
    if(input.value === ''){
        block.innerHTML += '<h1>' + ' Поле обязательно для заполнения!' + '</h1>'
    }
    if(input.value.length < 3 & input.value.length){
        block.innerHTML += '<h1>' + 'Поле должно содержать не менее 3-х символов' + '</h1>'
    }else{
        block.innerHTML += '<h1>' + input.value + '</h1>'
    }
}

button.addEventListener('click', submitText)
