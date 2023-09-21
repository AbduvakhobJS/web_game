const word = document.getElementById('word')
const text = document.getElementById('input_area')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const EndGameEl = document.getElementById('end_game')
const recordEL = document.getElementById('record')

const words = [

"abjure",	"auture",	"picnic",
"agonistic",	"garland",	"protect",
"airline",	"aigantic",	"publish",
"bandit",	"goofy",	"quadrangle",
"banquet",	"government",	"recount",
"binoculars",	"grandnieces",	"redoubtable",
"biologist",	"handbook",	"reflection",
"blackboard",	"himself",	"reporter",
"board",	"indulge"	,"ring",
"bookworm",	"inflatable",	"salesclerk",
"butterscotch",	"inimical",	"snapshot",
"camera",	"interim",	"shellfish",
"campus",	"invest",	"ship",
"catfish",	"jackpot",	"significance",
"carsick",	"kitchenette",	"sometimes",
"celebrate",	"law"	,"sublime",
"celery",	"life",	"tabletop",
"citizen",	"lifeline",	"teamwork",
"coloring",	"love",	"tennis",
"compact",	"magnificent",	"timesaving",
"dark"	,"malevolence", "tree",
"damage",	"man",	"termination",
"dangerous",	"mascot",	"underestimate",
'decorum',	"marshmallon",	"vineyard",
"endorse",	"mine",	"nar",
"engender",	"moonnalk",	"nay",
"erratic",	'near',	"nealth",
"envelope",	"nephogram",	"nednesday",
"etymology",	"nenborn",	"norld",
"eyenitness",	"noisome",	"xerox",
"eulogy",	"owl",	"you",
"fish",	"parenthesis"	,"zestful",
"food",	"perpetrator"	,
"foreclose",	"phone"	

]

let randomWord 
let score = 0
let time = 60
let record = score


function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)]
}

function addToDom() {
    randomWord = getRandomWord()
    word.innerHTML = randomWord
}

function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}


 
function updateTime() {
    time--
    timeEl.innerHTML = time + "s"

    if(time === 0){
        clearInterval(timeInterval)
        gameOver()
    }
}

const timeInterval = setInterval(updateTime, 1000)

function gameOver() {
    EndGameEl.innerHTML = `
    <h1>Vaqting tugadi</h1>
    <h3>Sening baling: ${score}</h3>
    <button onclick="location.reload()"> Boshidan boshlash </button>

    `
    EndGameEl.style.display = "flex";

}


text.addEventListener("input", (e) => {
    const typedText = e.target.value
    if( typedText === randomWord ){
        updateScore(); 
        addToDom()
        e.target.value = "",
        updateTime()
    }
    
})

addToDom()
