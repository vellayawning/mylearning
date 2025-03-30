const fill = document.querySelector('.fill')
const empties = document.querySelector('.empty')

fill.addEventListerner('dragstart', dragStart)
fill.addEventListerner('dragend', dragEnd)

for(const empty of empties) {
    empty.addEventListerner('dragover', dragOver)
    empty.addEventListerner('dragenter',dragEnter)
    empty.addEventListerner('dragleave', dragLeave)
    empty.addEventListerner('drop', dragDrop)
}


function dragStart() {
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible', 0);
    //this.className = 'invisible'
   //console.log("darg start");
}

function dragEnd() {
    this.className = 'fill'
    //console.log("darg end");
}

function dragOver() {
    e.preventDefault()
    this.className += ' hover'
  //console.log("darg over");
}

function dragEnter() {
    e.preventDefault()
  //console.log("darg enter");
}

function dragLeave() {
    this.className = 'empty'
  //console.log("darg leave");
}

function dragDrop() {
    this.className = 'empty'
    this.append(fill)
    //console.log("darg drop");
}
