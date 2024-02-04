/*window.addEventListener('keydown', (test) =>{
    console.log(test)
})*/
const insert = document.getElementById('insert')

window.addEventListener('keydown', (keyget) =>{
    insert.innerHTML =`
    <div class="key">
     ${keyget.key === ' ' ? 'Space' : keyget.key}
     <small>event.key</small>
    </div>

    <div class="key">
     ${keyget.keyCode}
     <small>event.keyCode</small>
    </div>
    
    <div class="key">
     ${keyget.code}
    <small>event.code</small>
    </div>`
})

