//set up vars for targets - each of the number display areas
const items = [...document.querySelectorAll('.number')];
// console.log(items);

// define updateCount function
const updateCount = (el) => {
    const value = parseInt(el.dataset.value);
    const increment = Math.ceil(value/1000);

    // set up initial value var but let it be altered - use let instead of const
    let initialValue = 0;

    const increaseCount = setInterval(() => {
        initialValue += increment;

        /* set up clause to stop the incrementing once the ending data value has been reached as set in the html data-___ attribute */
        if (initialValue > value) {
            el.textContent = `${value}+`;
            clearInterval(increaseCount);
            return;
        }

        el.textContent = `${initialValue}+`;
    }, 1);
};

// loop thru display array items and run updateCount on each one 
items.forEach((item) => {
    updateCount(item);
});

