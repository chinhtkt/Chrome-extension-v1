// fetch('https://icanhazdadjoke.com/slack')
//     .then(data => data.json())
//     .then(jokeData => {
//         console.log(jokeData)
//         const jokeText = jokeData.joke;
//         const jokeElement = document.getElementById('jokeElement');
//         jokeElement.innerHTML = jokeText;
//     })

async function getUsers(url) {
    let res = await fetch(url);
    let data = await res.json();
    let newData = data.attachments
    return newData
}


async function renderUser() {
    let renderData = await getUsers('https://icanhazdadjoke.com/slack');
    console.log(renderData)
    let html = '';
    renderData.map(data => {
        let htmlSegment = `<div class="user">
            <h2>${data.text}</h2>
        </div>`;

        html += htmlSegment
    })
    
    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUser();
