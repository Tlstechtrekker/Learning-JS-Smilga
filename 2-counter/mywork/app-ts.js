// set up counter var--must use keyword "let" because the value will be changing as you click the buttons
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

console.log(btns);

// loop through each button with .forEach method
btns.forEach(function (eachbutton) {
    console.log(eachbutton);

    //add eventlistener to the buttons
    eachbutton.addEventListener('click', function (e){
        // include the event object immediately since you want to make sure which one you are clicking on -- to see which one, you access the .//currentTarget property
        //console.log(e.currentTarget);

        //we want to be able to get at the list of classes on each button to do some conditional programming -- this is done by chaining on the .classList property and storing the resulting node list in a variable
        const styles = e.currentTarget.classList;

        //console.log(styles);

        //check to see which styles are on the clicked button and take action according to the if statement
        if(styles.contains('decrease')){
            //decrease the counter value by 1
            count--;
        } else if(styles.contains('increase')) {
            //increase the counter value by 1
            count++;
        } else {
            //reset counter value to 0
            count = 0;
        }
        //display the current value of the counter
        value.textContent = count;

        //set color of counter to indicate positive, negative, or 0
        if (count > 0) {value.style.color = 'green';}
        if (count < 0) {value.style.color = 'red';}
        if (count === 0) {value.style.color = 'black';}
    });
})
