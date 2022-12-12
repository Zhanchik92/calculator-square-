const sideOne = document.querySelector('#side__one');
const sideTwo = document.querySelector('#side__two');
const buttonSquare = document.querySelector('#button_square');
const buttonPerimeter = document.querySelector('#perimeter');
const resultOne = document.querySelector('#result__one');
const resultTwo = document.querySelector('#result__two');


// Проверка введенных значений
let result_1 = Number(0);
let result_2 = Number(0);
let inputOne ='';
let inputTwo ='';

sideOne.addEventListener('input', function(){
    resultOne.innerHTML = '';
    inputOne = sideOne.value;
    if(Boolean(Number(inputOne)) === false){
        sideOne.value = '';
        alert('Введите числовое значение стороны квадрата');
    }
});
sideTwo.addEventListener('input', function(){
    resultOne.innerHTML = '';
    inputTwo = sideTwo.value;
    if(Boolean(Number(inputTwo)) === false){
        sideTwo.value = '';
        alert('Введите числовое значение стороны квадрата');
    }
});
buttonSquare.onclick = function(){
    result_1 = Number(inputOne) * Number(inputTwo) ;
    resultOne.innerHTML = result_1.toFixed(1);   
}
buttonPerimeter.onclick = function(){
    result_2 = (Number(inputOne) + Number(inputTwo)) * 2 ;
    resultTwo.innerHTML = result_2.toFixed(1);   
}







