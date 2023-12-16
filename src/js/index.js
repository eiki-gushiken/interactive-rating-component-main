const btnRatings = document.querySelectorAll('.rating')
const btnSubmit = document.getElementById('btn-submit')

btnRatings.forEach(btn => {
    btn.addEventListener('click', () => {
        btnRatings.forEach(btn => btn.classList.remove('selected'))
        btn.classList.add('selected')
    })
});

btnSubmit.addEventListener('click', () => {
    const ratingCard = document.querySelector('.rating-card')
    const thanksCard = document.querySelector('.thanks-card')
    const selectedButton = document.querySelector('.selected')

    if(selectedButton){
        ratingCard.classList.remove('active')
        thanksCard.classList.add('active')
        selectRating(selectedButton.value)
    }
})

function selectRating(rating) {
    const response = document.querySelector('.response')
    response.innerHTML = `You selected ${rating} out of 5`
}