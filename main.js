var SpeechRecognition=window.webkitSpeechRecognition;
var reconocedor=new SpeechRecognition();
function inicio(){
    document.getElementById("textbox").innerHTML="";
    reconocedor.inicio();
}
reconocedor.onresult=function(event){
    console.log(event);
var content=event.results[0][0].transcript;
console.log(content);
document.getElementById("textbox").innerHTML=content;
}