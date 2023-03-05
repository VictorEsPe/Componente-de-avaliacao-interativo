const ratingContainer = document.querySelector(".rating-container")
const thankYouContainer = document.querySelector(".thank-you-container")
const ratings = document.querySelectorAll(".btn")
const chosenRating = document.getElementById("chosen-rating")

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    chosenRating.innerHTML = rating.innerHTML
  })
})

function showThankYouCard() {
  ratingContainer.classList.add("hidden")
  thankYouContainer.classList.add("show")
}

function closeThankYouCard() {
  ratingContainer.classList.remove("hidden")
  thankYouContainer.classList.remove("show")
}