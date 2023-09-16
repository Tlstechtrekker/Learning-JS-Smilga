const toggleBtn = document.querySelector('.btn');
const articlesContainer = document.querySelector('.articles');

toggleBtn.addEventListener('click', () => {
    console.log('toggle btn was clicked');
    document.documentElement.classList.toggle('dark-theme');
});

const articlesData = articles.map((article) => {
    const {title,date,length,snippet} = article;
    //formatting date eventually goes here
    const formatDate = moment(date).format('MMMM Do YYYY');

    return `<article class="post">
                <h2>${title}</h2>
                <div class="post-info">
                    <span>${formatDate}</span>
                    <span>${length} min read</span>
                </div>
                <p>
                    ${snippet}
                </p>
            </article>`;
}).join('');

// insert list of articles into the appropriate location in the html using the innerHTML property
articlesContainer.innerHTML = articlesData;
