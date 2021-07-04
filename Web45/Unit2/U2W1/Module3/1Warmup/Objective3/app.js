function buttonCreater(text){
    let button = document.createElement('button');
    button.textContent = text;
    button.classList.add('button');
    button.classList.add('large-button');
    button.addEventListener('click', (event) => {
        alert(`The button clicked says: ${event.target.texContent}`);
    });
    return button;
}
const button1 = buttonCreater('Home');
const button2 = buttonCreater('About');
// const button3 = buttonCreater('Contact');

console.log('Then product of the buttonCreater Fuction', button1);

let container = document.querySelector('.container');


container.appendChild(button1);//Try prepend and append as well
container.appendChild(button2);
container.appendChild(buttonCreater('Fun Button'));
container.appendChild(buttonCreater('Cool Component'));
container.appendChild(buttonCreater('Contact'));