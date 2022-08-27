const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener("submit", populateData)

    function populateData(e) {
        e.preventDefault();

        let value = e.target.children[1].value
    fetch(`http://localhost:3000/movies/${value}`)
    .then(response => response.json())
    .then(data => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');
        title.innerText = data.title;
    summary.innerText = data.summary;
    })
}
}

document.addEventListener('DOMContentLoaded', init);