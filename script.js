function addPost() {
    const post = {
        method: 'POST',
        body: JSON.stringify({
            title: document.querySelector('#title').value,
            body: document.querySelector('#body').value,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    };

    fetch('https://jsonplaceholder.typicode.com/posts', post)
        .then(response => response.json())
        .then(data => console.log(data));
}

const button = document.querySelector('button');

button.addEventListener('click', addPost);