//======Older Code =======//
// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");
// button.addEventListener("click", function(){
//     if (input.value.length > 0){
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         input.value = "";
//     }
// })
// input.addEventListener("keypress", function(event){
//     if (input.value.length > 0 && event.keyCode === 13){
//         console.log(event.keyCode);
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         input.value = "";
//     }
// })

//======Refactored Code =======//

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}
function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}
function addListAfterKeypress(e) {
    if (inputLength() > 0 && e.keyCode === 13) {
        createListElement();
    }
}
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);