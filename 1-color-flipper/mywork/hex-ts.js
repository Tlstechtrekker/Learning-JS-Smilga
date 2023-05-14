const hexcharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){

/* The following is code for a random dynamically generated hexvalue using the hexcharacters array */

    console.log('The hexcharacters array is: ' + '[' + hexcharacters + ']');

    let hexvalue = '';

    console.log('The current value of hexvalue is: ' + hexvalue);

//this is working to randomly grab one of the 16 array items
    for (i=0; i<=5; i++){
        //define local var to hold value of current pass in the loop
            let newlyAdded = '';
            let randomIndex = Math.floor(Math.random() * hexcharacters.length);
        //use random number as index of new character
            newlyAdded = hexcharacters[randomIndex];
        //make new character a string--necessary if its a number
            //newlyAdded.toString();
            console.log('The array item chosen on this pass is: '+ newlyAdded);
        //append character of the current pass onto dynamic hexvalue var
            hexvalue += newlyAdded;
            console.log('The current value of hexvalue is: ' + hexvalue + ' on pass number '+ [i+1]);
        }
//this works to add the # to the string
    let finalHexValue = '#'+ hexvalue;

    console.log('The final value stored in finalHexValue is: ' + finalHexValue)

//display text of chosen color var in heading -- either .innerText OR textContent works for this
    color.innerText = finalHexValue;
    //color.textContent = finalHexValue;

//display chosen color as page background
    //select the <body> tag and add a style to it with style attribute
        document.body.style.backgroundColor=finalHexValue;
});


