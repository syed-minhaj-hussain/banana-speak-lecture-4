// exercise-3
var btn = document.querySelector('#btn');
console.log(btn);

// define what operation to be taken placce
    function onClick() {
        console.log("you Just clicked");
    }
// btn.addEventListener('click', onClick);
btn.addEventListener('click', () => {
    console.log('You Just Clicked');
}) 

