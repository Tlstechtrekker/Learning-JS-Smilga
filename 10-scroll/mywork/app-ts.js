// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');

date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle'); // trigger element
const linksContainer = document.querySelector('.links-container'); //used as condition to check link visibility
const links = document.querySelector('.links'); // target

navToggle.addEventListener('click', function(){
    //get ht. of surrounding div to use as condition to check if links are showing or not
    const containerHeight = linksContainer.getBoundingClientRect().height;

    //get ht of links themselves to open dynamically
    const linksHeight = links.getBoundingClientRect().height;

    //set up conditional code to see if links are currently visible or not--if they don't show, add the style of height needed for the links
    if (containerHeight === 0){
        // add height
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        // links are showing and need to be hidden by changing ht of links div to 0
        linksContainer.style.height = 0;
    }
})

// ********** fixed navbar & back to top arrow ************
    // these are in same function because they're based on same scroll event

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

// fixed nav visibility depends on how far you scroll down the window
window.addEventListener('scroll', function(){

    // the .pageOffsetY method tells how far down from top of page has been scrolled
    // once the navbar height has been scrolled past, add a class to the navbar div that sets it to position:fixed with top:0
    const scrollHeight = window.pageYOffset;
    //console.log('Scroll height is ', scrollHeight);
    const navHeight = navbar.getBoundingClientRect().height;
    //console.log('NavHeight is ',navHeight)

    if (scrollHeight > navHeight){
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }

    // set up condition to show the back to top arrow by determining distance to scroll before showing it - the 500px here is ARBITRARY
    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link) {
    link.addEventListener('click', function(e) {
        // prevent the default behavior because it takes you to the wrong height location
        e.preventDefault(); 

    //navigate to specific spot

        // get text of href of desired section
        const id = e.currentTarget.getAttribute('href').slice(1);
        //console.log('Current target is: ',id);

        const element = document.getElementById(id);
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;

        // set up a boolean var to see if the fixed navbar is showing or not - this is set to have it showing, thus this is true
        const fixedNav = navbar.classList.contains('fixed-nav');

        //initially set up positioning for having the fixed navbar showing - the default for any time you have scrolled/jumped down far enough - this corrects section positioning when fixedNav is true for desktop width view -- when it's showing
        let position = element.offsetTop - navHeight;

        // conditionally alter the value of positioning if fixed nav is NOT showing -- we don't need to jump down as far since the links are already showing at the top -- so we subtract the height of the navigation links div from the current position height value
        if (!fixedNav) {
            position = position - navHeight;
        }

        // conditionally alter value of position if hamburger menu is open in a mobile or narrow screen--we need to scroll down a bigger distance because the links are showing so we add the containerHeight value to the existing position value
        if (navHeight > 82) { // MUST have line 105 setting linksContainer ht to 0 or this doesn't work
            position = position + containerHeight;
        }

        // scrollTo actually says to go to the position - it's the "do it" property; it will go to whatever value is stored in the position variable
        window.scrollTo({
            left: 0,
            top: position,
        });

        // this line closes up the links on the narrow/mobile view (it's already 0 on a desktop view)
        linksContainer.style.height = 0;
    });
});
