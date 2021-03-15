const buttonHover = document.getElementById('button');
const username = document.querySelector('#username');

var hoverOver = buttonHover.addEventListener('mouseover', function() {
  buttonHover.setAttribute('style', 'background-color: red;')
})

var hoverOff = buttonHover.addEventListener('mouseleave', function() {
  buttonHover.setAttribute('style', 'background-color: rgba(255, 255, 255, .75);')
})