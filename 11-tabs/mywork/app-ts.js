const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

// add event listener to parent container of tab info -- the "tab wrapper" element
about.addEventListener('click',function(e){
    // set up local var to hold the VALUE of data-id of a button being clicked
    const id = e.target.dataset.id;

    //set up functionality for clicking a button
    if(id) {

        btns.forEach(function(btn) {
            // remove the active class from whatever button it is currently applied to
            btn.classList.remove("active");
            //add the active class to the button just clicked on--the current target -- ie e.target
            e.target.classList.add("active");

            //hide non-active tab's content articles
            articles.forEach(function(article){
                article.classList.remove('active');
            });
            //add active class to the current tab article
            const element = document.getElementById(id);
            element.classList.add('active');
        });
    }
});

