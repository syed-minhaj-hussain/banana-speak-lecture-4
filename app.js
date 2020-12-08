/*  // exercise-3
var btn = document.querySelector('#btn');
console.log(btn);

// define what operation to be taken placce
function onClick() {
    console.log("you Just clicked");
}
// btn.addEventListener('click', onClick);
// In ES-6
btn.addEventListener('click', () => {
    console.log('You Just Clicked');
}) */

// exercise-4
var btn = document.querySelector('#btn');
var textArea = document.querySelector('#text-area');
console.log(textArea);
// read value from textarea 
function readValue(){
    var readUserValue = textArea.value;
    console.log(readUserValue);
}
btn.addEventListener('click', readValue)


