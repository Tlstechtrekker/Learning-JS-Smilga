const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    //check to make sure you can access the body
        //console.log(document.body);

    //get random number between 0 - 3
        const randomNumber = getRandomNumber();
        console.log(randomNumber);

    //select the body & add the style property of background color, setting it up to use the colors array value at index set by the variable randomNumber -- currently hard coded to 2
    document.body.style.backgroundColor = colors[randomNumber];

    //set up span tag to display the text of the randomly chosen color held from the colors array
    color.textContent = colors[randomNumber];
});

//create separate function to generate a random number
function getRandomNumber() {
    //we're using this elsewhere, so must use a return statement
    //set the number to be between 0 & 3 by multiplying by the length of the array
    //round the decimal down using Math.floor
    return Math.floor(Math.random() * colors.length);
}

//This is working