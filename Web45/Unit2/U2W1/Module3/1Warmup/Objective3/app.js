const fakeData = [
    "One",
    "Two",
    // "Three",
    // "Four",
    // "Five",
    "Six"
];


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
//OLD WAY NOT DRY
// const button1 = buttonCreater('Home');
// const button2 = buttonCreater('About');
// // const button3 = buttonCreater('Contact');
// console.log('Then product of the buttonCreater Fuction', button1);
let container = document.querySelector('.container');

//Old Way NOT Dry
// container.appendChild(button1);
// container.appendChild(button2);
// container.appendChild(buttonCreater('Fun Button'));
// container.appendChild(buttonCreater('Cool Component'));
// container.appendChild(buttonCreater('Contact'));

//Old way NOT dry
// const button7 = buttonCreater(fakeData[0]);
// const button8 = buttonCreater(fakeData[1]);
// const button9 = buttonCreater(fakeData[2]);
// container.appendChild(button7);
// container.appendChild(button8);
// container.appendChild(button9);

//New Better way number 1... Functions
// for (let i = 0; i < fakeData.length; i++){
//     let button = buttonCreater(fakeData[i]);
//     console.log(button);
//     container.appendChild(button);
// }

// //New Better way Number 2... .forEach()
// fakeData.forEach((item) => {
//     let button = buttonCreater(item);
//     console.log(button);
//     container.appendChild(button);
// });

// New Better Way #3 .map();
// returns new array, with the new item, after being manipulated bu the call back. 
// Takes data, does someting two it and then retruns a new array
let buttonsArray = fakeData.map((item) => {
// let button = buttonCreater(item);
// return button;
return buttonCreater(item);//same as two lines above 
});
// The next forEach relies on the array created above FIRST
buttonsArray.forEach(button =>{
    container.appendChild(button);
});
console.log(`Here are the buttons`, buttonsArray);