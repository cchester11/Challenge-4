const highScoresList = document.querySelector('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highscores'));
const buttonHover = document.querySelector("button");

var hoverOver = buttonHover.addEventListener('mouseover', function() {
  buttonHover.setAttribute('style', 'background-color: red;')
})

var hoverOff = buttonHover.addEventListener('mouseleave', function() {
  buttonHover.setAttribute('style', 'background-color: rgba(255, 255, 255, .75);')
})

highScoresList.innerHTML = highScores.map(score => {
  return `<li>${score.name} - ${score.score}</li>`
}).join('')