let openNavbtn = document.querySelector('.nav-btn');
openNavbtn.addEventListener('click',()=>{
    document.querySelector('.scroll-bar').classList.toggle('close');
    document.querySelector("section").classList.toggle('blur');
})
document.querySelector('.search-btn').addEventListener('click',()=>{
    document.querySelector('.scroll-bar').classList.toggle('close');
    document.querySelector("section").classList.toggle('blur');
    document.querySelector('.search-input').focus();
})