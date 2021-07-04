let button = document.querySelectorAll('.button');
button.forEach( b => {
    b.addEventListener('click', (event) => {
        alert(`The button clicked says: ${event.target.texContent}`);
    });
});