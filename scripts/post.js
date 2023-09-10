let heading = document.querySelector('#heading-data');
let review = document.querySelector('#review');
let count = document.querySelector('#count');
let likeBtn = document.querySelector('.like-btn');
let person = document.querySelector('.persons');
let commentData = document.querySelector('#comment-data');
let commentBtn = document.querySelector('#comment-btn');
let commentContainer = document.querySelector('.comments-container');
var countLikes  =0;
heading.value = 'hello my name is balu';



review.value = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quidem officia debitis neque aliquam tenetur iusto tempora assumenda voluptatum, labore architecto ad? Corrupti qui veniam earum labore eius odit rem dolor assumenda eaque fugiat impedit, nam aliquid doloremque rerum? Rem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos iure in assumenda nobis corrupti blanditiis ipsa placeat nemo sunt aliquid.orem, ipsum dolor sit amet consectetur adipisicing elit. Quae quidem officia debitis neque aliquam tenetur iusto tempora assumenda voluptatum, labore architecto ad? Corrupti qui veniam earum labore eius odit rem dolor assumenda eaque fugiat impedit, nam aliquid doloremque rerum? Rem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos iure in assumenda nobis corrupti blanditiis ipsa placeat nemo sunt aliquid.orem, ipsum dolor sit amet consectetur adipisicing elit. Quae quidem officia debitis neque aliquam tenetur iusto tempora assumenda voluptatum, labore architecto ad? Corrupti qui veniam earum labore eius odit rem dolor assumenda eaque fugiat impedit, nam aliquid doloremque rerum? Rem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos iure in assumenda nobis corrupti blanditiis ipsa placeat nemo sunt aliquid.orem, ipsum dolor sit amet consectetur adipisicing elit. Quae quidem officia debitis neque aliquam tenetur iusto tempora assumenda voluptatum, labore architecto ad? Corrupti qui veniam earum labore eius odit rem dolor assumenda eaque fugiat impedit, nam aliquid doloremque rerum? Rem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos iure in assumenda nobis corrupti blanditiis ipsa placeat nemo sunt aliquid.';







let editBtn = document.querySelector('.edit-btn');
let save = document.querySelector('.save')
editBtn.addEventListener('click', () => {
    // heading.style.zIndex = '2';
    // review.style.zIndex = '2';
    // heading.style.outline = '2px solid pink';
    heading.classList.toggle('add');
    review.classList.toggle('add');
    editBtn.style.display='none';
    save.style.display='block';

})
save.addEventListener('click', () => {
    heading.classList.toggle('add');
    review.classList.toggle('add');
    save.style.display='none';
    editBtn.style.display='block';
})


likeBtn.addEventListener('click', () => {
    person.textContent = countLikes < 1 ? 'person likes this!' : 'persons likes this!';
    countLikes++;
    count.textContent = countLikes;
})


commentBtn.addEventListener('click', () => {
    if(commentData.value.trim().length !== 0){
        commentContainer.style.padding = '10px 5px';

        commentContainer.innerHTML += `<div class="comment-boxes">${commentData.value}</div>`;
    }
})

