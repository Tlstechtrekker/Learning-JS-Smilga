//add vars to the active elements
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

// add event-listeners to the two buttons
// the hamburger button: 2 ways -- long with if/else, short with .toggle()

toggleBtn.addEventListener('click', function () {
    // console.log(sidebar.classList);
    
    //SHORT WAY WITH .TOGGLE
    sidebar.classList.toggle('show-sidebar');

}); 

// LONG WAY WITH IF/ELSE
    /* if(sidebar.classList.contains('show-sidebar')){
        // sidebar is showing - remove it
        sidebar.classList.remove('show-sidebar');
    }else{
        // sidebar is NOT showing - add it
        sidebar.classList.add('show-sidebar');
    } */


// the close button within the sidebar --
// just need it to close the sidebar by removing the show-sidebar class

closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('show-sidebar');
})

