
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
