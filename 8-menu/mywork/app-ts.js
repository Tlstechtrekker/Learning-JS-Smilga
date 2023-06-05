const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },

];

// page division containers holding dynamic info
const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

//*****load items into window with eventlistener
window.addEventListener('DOMContentLoaded', function(){

// call the appropriate dynamic items using the array called menu
  displayMenuItems(menu);
// call menu buttons dynamically
  displayMenuButtons();

}); // **********end window.addEventListener


//************ displayMenuItems- generate html dynamically*** */

// NOTE: menuItems is the same as menu parameter above
function displayMenuItems(menuItems) {
  // array of dynamic html - ALL items
  let displayMenu = menuItems.map(function (item){
      return `<article class="menu-item">
      <img src=${item.img} alt="${item.title}" class="photo" />
      <div class="item-info">
          <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">${item.desc}</p>
      </div>
  </article>`;
  });

  //remove commas between items - the "", and create single line of html code using the .join method
  displayMenu = displayMenu.join("");
  //add the returned items into the div for the menu items
  sectionCenter.innerHTML = displayMenu;

} // **********end displayMenuItems

// *********** displayMenuButtons dynamically ****
// create a new function that will ultimately be UNIQUE categories from the full array called menu -- no duplicates
function displayMenuButtons(){
  const categories = menu.reduce(
    function(runningvalues, currentitem){
      if(!runningvalues.includes(currentitem.category)){
        runningvalues.push(currentitem.category);
      }
      return runningvalues;
    },
    ["all"]
  );

  //create & display buttons dynamically - the .join method put on separate line to be easier to see - no problem since ; is after the join line
const categoryBtns = categories.map(function(category){
  return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`;
  })
  .join("");
btnContainer.innerHTML = categoryBtns;
  //filter items
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(function(btn){
  btn.addEventListener('click', function(e){
    // create variable to collect & access EACH item's data-id category
    const buttonCategory = e.currentTarget.dataset.id;

    // create sub-menus--set up function to filter through the menu to select items whose data-id property match the category of the button clicked
    const menuCategory = menu.filter(function(menuItem){

      //set up statement to filter for items and return item if the category property of the menu array item matches the category of the button's dataset -- this creates a subset menu item list
      if (menuItem.category === buttonCategory) {
        return menuItem;
      }
    });

    // display the appropriate items in the browser window
    if (buttonCategory === "all") {
      // if button's dataset is all, list all items using the full menu array
      displayMenuItems(menu);
    } else {
      //show only those items whose menu category matches the button category by showing the subset of items of the filtered menuCategory array
      displayMenuItems(menuCategory);
    }

  });
});
} // *********  end displayMenuButtons





