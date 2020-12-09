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
       .then( json => console.log(json) )
       .catch( error => {
        alert(error + " try after some time")
    })
    div.innerText = textArea.value;
   }

   btn.addEventListener('click', clickEventHandler);


