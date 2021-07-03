//1 Mouseover <h1> yellow up
const headerH1 = document.querySelector('h1');
console.log(headerH1
    );
    headerH1.addEventListener('mouseover', event => {
        event.target.style.backgroundColor = 'yellow'; 
    });
    headerH1.addEventListener('mouseleave', event => {
        event.target.style.backgroundColor = 'white';
    });

    //2 Keydown <h4> "Sign Me Up!" 
//First note I'm using <div class="btn>Sign Me Up!</> as <button id = "launchButton">Launch!</button> from web guided project.I want to use "Esc" key 27 to leave the modal as my Keydown event. 

//Isolate <section class="content-pick"> to add needed elements
// const sectionContentPick = document.querySelector('content-pick');
// console.log(sectionContentPick);

// Next I set up a modal with a Parent div defaulted to off
const newParentDivModal = document.createElement('div');
newParentDivModal.classList.add('modal');
newParentDivModal.classList.add('off');
// sectionContentPick.appendChild(newParentDivModal);
console.log(newParentDivModal);