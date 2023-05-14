const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    //MY LOGIC:
    //select color randomly from array
        //generate random number
            let randomNum = Math.random();
            console.log('random number:', randomNum);

        //set random number to fall between index 0 and index last -- in this case, 3 -- the array length is 4 but it is 0-based -- refactored to use length property of colors array
            let inRange = randomNum * colors.length;
            console.log('in range value: ', inRange);

        //round down random number so it is an integer between 0 - 3
            let finalRandomIndex = Math.floor(inRange);
            console.log('final random index value: ', finalRandomIndex);
            console.log('colors array: ', colors);

        //store chosen color via its array index in a variable
            const chosenColor = colors[finalRandomIndex];
            console.log('chosen color from array: ', chosenColor);

    //display text of chosen color var in heading -- either .innerText OR textContent works for this
        color.innerText = chosenColor;
        //color.textContent = chosenColor;

    //display chosen color as page background
        //select the <body> tag and add a style to it with style attribute
            document.body.style.backgroundColor=chosenColor;
});
