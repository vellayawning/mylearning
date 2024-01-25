const panels = document.querySelectorAll('.panel')

console.log(panels[0])
console.log(panels[1])
console.log(panels[2])
console.log(panels[3])


panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiiveClassess()
        panel.classList.add('active')
    })
})


function removeActiiveClassess() {
    panels .forEach(panel => {
        panel.classList.remove('active')
    })
}
