const input_email=document.getElementById('input-email');
const input_password=document.getElementById('input-password');
const login_btn=document.getElementById('submit');

login_btn.addEventListener('click',()=>{
    let local_email=localStorage.getItem('email');
    let local_password=localStorage.getItem('password');
    (local_email==input_email.value && local_password==input_password.value)?alert("Welcome"):alert("The account is not available");
})