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

/*
// exercise-4
var btn = document.querySelector('#btn');
var textArea = document.querySelector('#text-area');
console.log(textArea);
// read value from textarea 
function readValue(){
    var readUserValue = textArea.value;
    console.log(readUserValue);
}
btn.addEventListener('click', readValue);
*/

/*
Live Exercise
1. document.querySelector('textarea');
2. document.querySelector('.btn-primary');
3. document.querySelector('#input-btn');
4. document.querySelector("input[name='translator']");
*/

/*
    // Exercise-5
    var btn = document.querySelector('#btn');
    var textArea = document.querySelector('#text-area');
    var div = document.querySelector('.box');
    console.log(div);
    
    function printInDiv() {
        div.innerText = takeTextAreaValue;
        //   console.log(div.innerText);
    }
    //   onclick
    btn.addEventListener('click', printInDiv);
    */
   // Ex-6,7,8 done
   
   // Ex-9
   var btn = document.querySelector('#btn');
   var textArea = document.querySelector('#text-area');
   var div = document.querySelector('.box');
//    var takeTextAreaValue = textArea.value;

   var url = "https:api.funtranslations.com/translate/minion.json";

    function getTranslationUrl(text) {
      return  url + "?" + "text=" + text;
    }

   function clickEventHandler() {
       var inputFromTextArea = textArea.value;
       fetch(getTranslationUrl(inputFromTextArea))
       .then( response => response.json())
    //    .then( json => console.log(json) )
       .then( json => {
        div.innerText = json.contents.translated;
        } )
       .catch( error => {
        alert(error + " try after some time");
        console.log('Error occurred:', error);
        console.log('try after some time');
    })
    div.innerText = textArea.value;
   }

   
   btn.addEventListener('click', clickEventHandler)
