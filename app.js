var buttonTrans = document.querySelector(" #btn-trans ");
var textInput = document.querySelector("#txt-area")
var outPut=document.querySelector("#output")
console.log(buttonTrans);

buttonTrans.addEventListener("click", clickHandler)

var serverUrl="https://api.funtranslations.com/translate/minion.json"

function getUrl(text)
{
    return serverUrl + "?" + "text=" +text
}

function clickHandler(){


    // console.log(textInput.value); 
    // outPut.innerText=textInput.value;


    var inputTxt= textInput.value;
    fetch(getUrl(inputTxt))
    .then(response=>response.json())
    .then(json=>{
    var translated=json.contents.translated;
    outPut.innerText=translated;
    })
}


























// var userName= prompt("what is your name");
// alert("welcome to translation application " +userName);

