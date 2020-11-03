// Read instructions. And remove this line
const textInput = document.getElementById('user-input')

textInput.addEventListener('keyup', function (event){
if (event.key === 'Enter'){

if (textInput.value == 42){
    alert('congrats that is right')
    }
if (textInput.value > 42){
    alert('That is a little bit to high')
    }
if (textInput.value < 42){
    alert('That is a little bit to low')
    }
    textInput.value = ""
}})
console.log()