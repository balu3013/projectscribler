let trashIcons = document.querySelectorAll('.trash');
let background = document.querySelector('.background');
let choose = document.querySelector('.choose');
let noBtn = document.querySelector('#no-btn');
let yesBtn = document.querySelector('#yes-btn');
let userPosts = document.querySelectorAll('.user-posts');
let container = document.querySelector('.posts-container');
let ellipses = document.querySelectorAll('.ellipses');

// let postsContainer = document.querySelector('.posts-container');


trashIcons.forEach((item) => {
    item.addEventListener('click', () => {
        background.style.display='block';
        
    })
})

ellipses.forEach((item) => {
    item.addEventListener('click', () => {
        window.location.href = `<a href=${/html/post.html}`;
    })
})
noBtn.addEventListener('click', () => {
    background.style.display='none';
})


// userPosts.forEach((item) => {
//     yes.addEventListener('click', () => {
//         e.target.parentNode.parentNode.removeChild()
//     })
// })
console.log(userPosts)