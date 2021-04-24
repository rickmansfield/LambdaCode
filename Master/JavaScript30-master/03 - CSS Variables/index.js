const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
//   console.log(this.value);
// const suffix = this.database;
console.log(this.dataset);
}

// let blah = input.addEventListner('change', handleUpdate);  
// inputs.forEach(blah);
inputs.forEach(input => input.addEventListener(`change`, handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
