let inputArea = document.querySelector(".input");
let outputArea = document.querySelector(".output");
inputArea.innerHTML = "";
outputArea.innerHTML = "0";
let button= document.querySelectorAll("button");
var inputText = "";

button.forEach(e=>{
    e.addEventListener("click", ()=>{
        var btnText = e.innerText;
        
        
        var sum = 0;
        if(btnText==="="){
             inputArea.innerHTML = inputText;
             outputArea.innerHTML = eval(inputText);
             inputText = outputArea.innerHTML;

             inputArea.style.animation = "small 0.5s ease-in-out";
             outputArea.style.animation = "big 0.5s ease-in-out";

             inputArea.style.animationFillMode = "forwards";
             outputArea.style.animationFillMode = "forwards";
        }
        else if(btnText==="AC"){
            inputText = "";
            inputArea.innerHTML = "";
             outputArea.innerHTML = "0";

            inputArea.style.animation = "";
            outputArea.style.animation = "";
        }
        else if(btnText==="DEL"){
            let mute = inputText;
    mute.split("");
    inputText = "";
    for(let i=0;i<mute.length-1;i++){
        inputText+= ""+mute[i];
    }
    inputArea.innerHTML = inputText;
        }
        else{
            inputText+= btnText;
            inputArea.innerHTML = inputText;
        }
    })
});