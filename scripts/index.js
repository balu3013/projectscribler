let signUpBtn = document.querySelector('.signup-btn');

let signInBtn = document.querySelector('.signin-btn');
let outer = document.querySelector('.outer');
let signInBox = document.querySelector('.signin');
let crossMark = document.querySelector('.mark');
let crossMark1 = document.querySelector('.mark1');
let signUpLink = document.querySelector('.redirect-to-signup');
const createPost = document.querySelector('.create-post');
const cancelPost = document.querySelector('.pen-mark');
const postCreateBtn = document.querySelector('#createPost');

signUpBtn.addEventListener('click', () => {
    outer.style.display = 'block';
    
})
crossMark.addEventListener('click', () => {
    outer.style.display = 'none';
})
signInBtn.addEventListener('click', () => {
   signInBox.style.display = 'block';
    
})
crossMark1.addEventListener('click', () => {
    signInBox.style.display = 'none';
})

signUpLink.addEventListener('click', () => {
    outer.style.display='block';
    signInBox.style.display = 'none'
})

postCreateBtn.addEventListener('click', () => {
    createPost.style.display = 'block';
})
cancelPost.addEventListener('click', () => {
    createPost.style.display = 'none';
})