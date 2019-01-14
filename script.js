const result = document.querySelector('.result');
const numbers = document.querySelectorAll('.num');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function () {
        let number = numbers[i].getAttribute('data-value');
        result.value += number;
    })
}

equal.addEventListener('click', function () {
    let value = eval(result.value);
    result.value = value;
})

clear.addEventListener('click', function () {
    result.value = '';
})