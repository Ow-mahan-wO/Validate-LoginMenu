const email_input=document.getElementById('input-email');
const password_input=document.getElementById('input-password');
const repassword_input=document.getElementById('repass');
const submit_btn=document.getElementById('submit-btn');
let repassword_validator=document.getElementById('repassword-validate');
let password_validator=document.getElementById('password-validete');
let sign_up=false;
password_input.addEventListener('input',()=>{
   if(password_input.value.length>=5){
    password_validator.style.width=46+'%';
    password_validator.style.backgroundColor="orange";
   }else{
    password_validator.style.backgroundColor="red";
    password_validator.style.width=2+'%';
   }
   if(password_input.value.length>=8){
    password_validator.style.width=92+'%';
    password_validator.style.backgroundColor="green";
   }
})
repassword_input.addEventListener('input',()=>{
  if(repassword_input.value==password_input.value){
  repassword_validator.style.width=password_validator.style.width;
  repassword_validator.style.backgroundColor=password_validator.style.backgroundColor;
  submit_btn.style.display='inline-block'
  sign_up=true;
  }else{
    repassword_validator.style.width=2+'%';
    repassword_validator.style.backgroundColor='red';
    submit_btn.style.display='none';
  }
 })
 submit_btn.addEventListener('click',()=>{
    if(password_input.value==""){
        submit_btn.style.display='none';
    }
    if(sign_up==true){
        alert("sign up successfully welcome");
        localStorage.setItem('email',email_input.value);
        localStorage.setItem('password',password_input.value);
    }
 })
