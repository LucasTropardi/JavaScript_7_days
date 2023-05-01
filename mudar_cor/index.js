
const colors = ['green', 'white', 'yellow', 'purple', 'Grey', 'blue', 'red']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

// no click
btn.addEventListener('click', function() {
    const randomColor = getRandomColor()
    document.body.style.background = colors[randomColor]
    color.textContent = colors[randomColor]

})
// número randômico
function getRandomColor() {
    return Math.floor(Math.random() * colors.length)
}