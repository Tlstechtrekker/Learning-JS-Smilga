// ****** SELECT ITEMS **********

// status message
const alert = document.querySelector('.alert');
// form wrapper
const form = document.querySelector('.grocery-form');
// input text box
const grocery = document.getElementById('grocery');
// form submit button
const submitBtn = document.querySelector('.submit-btn');
// grocery list wrapper including the clear items button
const container = document.querySelector('.grocery-container');
// list of items
const list = document.querySelector('.grocery-list');
// clear all items button
const clearBtn = document.querySelector('.clear-btn');

// edit status option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit', addItem);
// clear items
clearBtn.addEventListener('click', clearItems);
// load items after browser refresh
window.addEventListener('DOMContentLoaded', setupItems);




// ****** FUNCTIONS **********
// 1. addItem(e)
// 2. displayAlert('message', 'stylingname')
// 3. setBackToDefault()
// 4. clearItems()
// 5. setBackToDefault()
// deleteItem(e)
// editItem(e) - used in combo with addItem(e)


// 1. addItem() - adds item into list
function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    // create a unique id for the item
    const id = new Date().getTime().toString();
    console.log(id);

    // set up conditional code for type of edit option triggered

/* ************ if - normal adding an item to list  **************** */
    if(value !=='' && editFlag === false){
        //console.log('Add item to list.');
        // 1. create the article element
        const element = document.createElement('article');
        // 2. add a class for styling
        element.classList.add('grocery-item');
        // 3. add a unique id with data-id attribute so later it can be retrieved individually
        const attr = document.createAttribute('data-id');
        // 4. set the id's value stored in id var above
        attr.value = id;
        // 5. add the data-id attribute into the element tag
        element.setAttributeNode(attr);
        // 6. populate the new item tag's content using .innerHTML and replace anything hard-coded with the variable name of textbox input for dynamic insertion
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
            <button type="button" class="edit-btn"><i class="fas fa-edit"></i></button>
            <button type="button" class="delete-btn"><i class="fas fa-trash"></i></button>
        </div>`;

        // set up the individual item buttons
        const deleteBtn = element.querySelector('.delete-btn');
        const editBtn = element.querySelector('.edit-btn');
        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem);

        // 7. add the new article element into the list element via appendChild method
        list.appendChild(element);
        // 8. show the correct alert message and the dynamic portion of the style to apply to it
        displayAlert('Item successfully added to list', 'success');
        // 9. add the style that makes the overall list element visible
        container.classList.add('show-container');

        // 10. add item into local storage - placeholder for now
        addToLocalStorage(id, value);
        // 11. clear text input box - placeholder for now
        setBackToDefault();
    }
    /* ******************* else if - now editing **************** */
    else if(value !== '' && editFlag === true){
        console.log('Now in else if block of addItem function - Edit this item.');
        // takes edited textbox value and puts it into the editElement var
        editElement.innerHTML = value;
        // set the alert msg to show item was edited
        displayAlert('An item value was changed', 'success');
        // put revised item back into local storage
        editLocalStorage(editID,value);
        // reset the editing vars and empty the textbox, change form button text
        setBackToDefault();
    }
    /* **************** nothing entered into input ********* */
    else{
        console.log('Empty value - nothing entered in text box.');
        displayAlert("please enter a value", "danger");
    }
}

// 2. display alert
function displayAlert(text,action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // remove alert automatically after a second (1000ms) by setting alert text to empty and removing the styling
    setTimeout(function () {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}

// 3. set back to default - clears input box and resets vars
function setBackToDefault() {
    console.log("set textbox back to default");
    grocery.value = '';
    editFlag = false;
    editID = '';
    submitBtn.textContent = 'submit';
}

// 4. clear items - deletes all items on list
function clearItems() {
    const items = document.querySelectorAll('.grocery-item');
    // access parent item and remove its children
    if(items.length > 0){
        items.forEach(function(item){
            list.removeChild(item);
        });
    }
    // get rid of style that displays the list; show appropriate alert msg
    container.classList.remove('show-container');
    displayAlert('empty list', 'danger');
    setBackToDefault();
    localStorage.removeItem('list');
}

// delete function
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    //console.log(element);
    const id = element.dataset.id;
    list.removeChild(element);
    //console.log('item deleted');
    if (list.children.length === 0){
        container.classList.remove('show-container');
    }
    displayAlert('An item was removed.', 'danger');
    setBackToDefault();
    //console.log('editFlag status', editFlag);
    //console.log('editID status', editID);

    // remove from local storage
    removeFromLocalStorage(id);
}

// edit function
function editItem(e) {
    console.log('now in editItem function -edit item');
    // grab the grocery item element so we can use its unique data-id attribute
    const element = e.currentTarget.parentElement.parentElement;
    // set edit item - the paragraph element
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // set the text of the paragraph element into the textbox
    grocery.value = editElement.innerHTML;
    editFlag = true;
    // access the id of the grocery element being edited - allows us to put the edited item back in the same place
    editID = element.dataset.id;
    // change text of form submit button to show we are editing
    submitBtn.textContent = 'edit';

    // at this point, we finish off the functionality in the addItem 'else if' block of code
}

// 5. set back to default
function setBackToDefault(){
    grocery.value = '';
    editFlag = false;
    editId = '';
    submitBtn.textContent = 'submit';
}


// ****** LOCAL STORAGE **********
// 1. addToLocalStorage(id, value)
// 2. removeFromLocalStorage(id)
// 3. editLocalStorage(editID, value)
// 4. getLocalStorage()

// ************* 1. addToLocalStorage(id, value) **** */
function addToLocalStorage(id, value) {
    // console.log('adding the following item to local storage');
    const grocery = {id:id,value:value};
    // console.log('this is grocery from line 195 before code to retrieve-should be passed in values: ',grocery);

    // check to see if list exists - is so, retrieve it, create empty array if not
    let items = getLocalStorage();

    // add item item in textbox into items array
    // console.log('this is items after line 198 retrieve list from local storage: ',items);
    items.push(grocery);

    // put new/revised array of items back into storage
    // console.log('this should be revised list of items after pushing new one to items array on line 201: ',items);
    localStorage.setItem('list', JSON.stringify(items));
}

// *********** 2. removeFromLocalStorage(id) **** */
function removeFromLocalStorage(id) {
    let items = getLocalStorage();

    items = items.filter(function(item){
        // rewrite the list with all items that don't have a matching id - the matching id is the one we want to delete
        if(item.id !==id) {
            return item;
        }
    });

    // put revised list back into local storage
    localStorage.setItem('list', JSON.stringify(items));
}

// ********* 3. editLocalStorage(id, value) **** */
function editLocalStorage(id, value) {
    let items = getLocalStorage();
    items = items.map(function(item){
        // this item will be edited
        if(item.id === id){
            item.value = value;
        }
        // the rest of the items come through unchanged
        return item;
    });

    // send revised list into local storage
    localStorage.setItem('list', JSON.stringify(items));
}

// ******** 4. getLocalStorage() **** */
function getLocalStorage() {
    return localStorage.getItem("list")?JSON.parse(localStorage.getItem('list')):[];
}
// ****** SETUP ITEMS **********
function setupItems(){
    let items = getLocalStorage();
    if(items.length > 0) {
        items.forEach(function(item) {
            createListItem(item.id, item.value);
        });
    }
}

function createListItem(id, value) {
    const element = document.createElement('article');
    element.classList.add('grocery-item');
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
            <button type="button" class="edit-btn"><i class="fas fa-edit"></i></button>
            <button type="button" class="delete-btn"><i class="fas fa-trash"></i></button>
        </div>`

    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');
    deleteBtn.addEventListener('click', deleteItem);
    editBtn.addEventListener('click', editItem);

    list.appendChild(element);
}