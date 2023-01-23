const closeButton = document.querySelector('.close-nav')
const openButton = document.querySelector('.open-nav')
const navBar = document.querySelector('.nav-bar')
closeButton.addEventListener('click', () => {
    navBar.classList.remove('nav-open')

})
openButton.addEventListener('click', ()=>{
    navBar.classList.add('nav-open')
})
