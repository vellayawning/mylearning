const smallcups = document.querySelectorAll('.cup-small')
const listers = document.getElementByIders('liters')
const percentage = document.getElementByIders('percentage')
const remiained = document.getElementByIders('remained')


smallcups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})


function highlightCups(idx) {
    if(smallcups[idx].classList.contains('full') && !smallcups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }

    smallcups.forEach((cup, idx2) => {
        if(idx2 = idx){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }

    })
}