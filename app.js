// grab the necessary documents
var textArea = document.querySelector('#text-area');
var btn = document.querySelector('#btn');
var box = document.querySelector('.box');

// grab the url
var minionUrl = "https://api.funtranslations.com/translate/minion.json";

// function for concatination
function concatinateUrl(text) {
    return minionUrl + "?" + "text=" + text;
}

// get value from textarea
function getValue() {
    var input = textArea.value;
    fetch(concatinateUrl(input))
    .then(response => response.json())
    .then(json => {
        box.innerText = json.contents.translated;
    })
    .catch(error => alert(error))
}

btn.addEventListener('click', getValue);
