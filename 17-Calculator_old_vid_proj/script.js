const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function (){
        let num = btns[i].getAttribute('data-num');
        screen.value += num;
    });
}

equalBtn.addEventListener('click', function() {
    if (screen.value === '') {
        alert('You need to enter some value.')
    }
    else {
        let value = eval(screen.value);
        screen.value = value;
    }
})

clearBtn.addEventListener('click', function(){
    screen.value = '';
})