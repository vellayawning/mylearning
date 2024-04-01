const jokeel = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)
generateJoke()

async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const responsebck = await fetch('https://icanhazdadjoke.com', config)

    const data = await responsebck.json()

    jokeel.innerHTML = data.joke

}