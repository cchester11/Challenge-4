const buttonHover = document.getElementById('button');
const username = document.querySelector('#username');
const mostRecentScore = localStorage.getItem("mostRecentScore");

var hoverOver = buttonHover.addEventListener('mouseover', function() {
  buttonHover.setAttribute('style', 'background-color: red;')
})

var hoverOff = buttonHover.addEventListener('mouseleave', function() {
  buttonHover.setAttribute('style', 'background-color: rgba(255, 255, 255, .75);')
})

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const finalScore = document.querySelector('#finalScore');
const userScore = localStorage.getItem('userScore');

const scoreCountParameter = 5;

finalScore.innerText = userScore;

function saveHighScore(event) {
    event.preventDefault();

    const score = {
        score: userScore,
        name: username.value
    };

    highScores.push(score);

    highScores.sort((a, b) => {
        return b.score - a.score;
    });

    localStorage.setItem('highScores', JSON.stringify(highScores));
};
  