// объявление переменных
const btnCart = document.getElementById('cart');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.btn-close');
const mainIndex = document.getElementById('index');
const mainRest = document.getElementById('restaurant')
const cardsBlockIndex = mainIndex.querySelector('.cards')
const cardsIndex = cardsBlockIndex.querySelectorAll('.card')
const logos = document.querySelectorAll('.logo-link')



const modalOpen = () => {
    modal.classList.toggle('modal--close')
}
const getToMain = () => {
    mainRest.classList.toggle('not--active')
    mainIndex.classList.toggle('not--active')
}
// вызов функций
btnCart.addEventListener('click', modalOpen);
btnClose.addEventListener('click', modalOpen);
modal.addEventListener('click', (event) => {
    if (event.target == modal) {
        modalOpen()
    }
})

cardsIndex.forEach(card => {
    card.addEventListener('click', () => {
        getToMain()
    })
})
logos.forEach(logo => {
    logo.addEventListener('click', (event) => {
        event.preventDefault()
        if (mainIndex.classList.contains('not--active')) {
            getToMain()
        }
    })
})

















