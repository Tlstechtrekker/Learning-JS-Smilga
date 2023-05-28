//using selectors inside the element
// traversing the dom

const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn){
    //you want to be able to verify what you clicked on so use the event object as a parameter on the callback function
    btn.addEventListener('click', function(e){
        //get the currently clicked button's info via .currentTarget
        //console.log(e.currentTarget);

        //navigate from the button trigger up to the target question answer
        console.log(e.currentTarget.parentElement.parentElement);
        const question = e.currentTarget.parentElement.parentElement;
        //set the question container to show the question's answer
        question.classList.toggle('show-text');
    })
});



