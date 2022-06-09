let homeScoreNumber = 0
let guestScoreNumber = 0


let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function plus1home() {
    homeScoreNumber = homeScoreNumber + 1
    homeScore.textContent = homeScoreNumber
}

function plus2home() {
    homeScoreNumber = homeScoreNumber + 2
    homeScore.textContent = homeScoreNumber
}

function plus3home() {
    homeScoreNumber = homeScoreNumber + 3
    homeScore.textContent = homeScoreNumber
}

function plus1guest() {
    guestScoreNumber = guestScoreNumber + 1
    guestScore.textContent = guestScoreNumber
}

function plus2guest() {
    guestScoreNumber = guestScoreNumber + 2
    guestScore.textContent = guestScoreNumber
}

function plus3guest() {
    guestScoreNumber = guestScoreNumber + 3
    guestScore.textContent = guestScoreNumber
}