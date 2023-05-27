// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// set up vars for active items:
// - trigger is button -- 
const toggleBtn = document.querySelector('.nav-toggle');
// - target is ul list -- 
const links = document.querySelector('.links');

// need to collect the list of classes on the ul target:
console.log(links.classList);

// set up click event listener on trigger:
toggleBtn.addEventListener('click', function () {
    //check to see what happens with an non-existent class and with an existent class
    //console.log(links.classList.contains('random'));
    //console.log(links.classList.contains('links'));

    // check thru classes applied and set up conditional if statement

    //THIS IS THE LONG WAY: using an if statement
    //if (links.classList.contains('.show-list')) {

        //links are showing--hide them
        //links.classList.remove('.show-list');
        //console.log('links');

        //}else{
        //links are not showing--display them
        //links.classList.add('show-list');
        //console.log('links');
        //}

        //THIS IS THE SHORT WAY: using the .toggle method
        links.classList.toggle('.show-list');
    }
)
