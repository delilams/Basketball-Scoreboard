let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")

let countHome = 0
let countGuest = 0

function score1Home() {
    countHome += 1
    scoreHome.textContent = countHome
}

function score2Home() {
    countHome += 2
    scoreHome.textContent = countHome
}

function score3Home() {
    countHome += 3
    scoreHome.textContent = countHome
}

function score1Guest() {
    countGuest += 1
    scoreGuest.textContent = countGuest
}

function score2Guest() {
    countGuest += 2
    scoreGuest.textContent = countGuest
}

function score3Guest() {
    countGuest += 3
    scoreGuest.textContent = countGuest
}