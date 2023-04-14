const $=document;
const back_icon=$.getElementById('History_back');
const submit =$.getElementById('submit');
const inputValue=$.getElementById('floatingInputGroup1');
const copyicon=$.getElementById('copyicone');
let Password_Char="2342@#@4c234c@#$@v2c24@#c4c23$@c3C$@#Crttyge32!@rwe%3$@dfs3@#$erw#$#@s3$@dfs3@#$erw#$#@$@qwesdf!!@#sdfgd$%#$%dwef3$@dfs3@#$erw#$#@#!efwE$@#W$@#$e@#$e@#$2@#@4c234c@#$@v2c243$@dfs3@#$erw#$#@3$@dfs3@#$erw#$#@dfs3@#$erw#$#@gdfgd#$#@#$sdwe23$@Weq223$WE12#!weQ@#D2#$RER3@#R@$RR%R@#@#REWQ#2R@#@E#$RE@#$!gfgEWFSR3Erwedw23$@#$df23$FWED#$"

submit.addEventListener("click",function(){
let randomNumber=Math.floor(Math.random()*350)+10;
let Finaly_Password=Password_Char.slice(randomNumber,randomNumber+10);
inputValue.value=Finaly_Password;


inputValue.style.backgroundColor="green";
if(copyicon.addEventListener("click",function(){
    navigator.clipboard.writeText(Finaly_Password);
    alert("Password is copyed");
}));
})
back_icon.addEventListener("click",function(){
window.history.back();
})

