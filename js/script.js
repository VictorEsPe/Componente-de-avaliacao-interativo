const ratingContainer = document.querySelector(".rating-container")
const thankYouContainer = document.querySelector(".thank-you-container")
const ratings = document.querySelectorAll(".btn")
const chosenRating = document.getElementById("chosen-rating")
const submitButton = document.getElementById("submit-btn")
const closeButton = document.getElementById("close-btn")

function showThankYouCard() {
  ratingContainer.classList.add("hidden")
  thankYouContainer.classList.add("show")

  ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      chosenRating.innerHTML = rating.innerHTML
    })
  })
}

function closeThankYouCard() {
  ratingContainer.classList.remove("hidden")
  thankYouContainer.classList.remove("show")
}

// TODO: Corrigir um bug que faz com que a nota escolhida não apareça no card de agradecimento de primeira