const submitButton = document.getElementById('submitButton')
const thankYouCard = document.getElementById('thank-you-card')
const firstCard = document.getElementById('firstCard')
const buttons = document.querySelectorAll('.btn')
const rating = document.getElementById('rating')

submitButton.addEventListener('click', () =>{
    thankYouCard.classList.remove('hidden')
    firstCard.classList.add('hidden')
})

buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        rating.innerText = button.innerText
    })
})