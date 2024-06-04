let username=document.querySelector("#username")
let password=document.querySelector("#password")
let btnsignin=document.querySelector("#Sign_in")


let  getusername=localStorage.getItem("username")
let getpassword=localStorage.getItem("password")

btnsignin.addEventListener("click" ,function(w){
w.preventDefault()

if(username.value===""||password.value==="")
{
    alert("please fill data")
}else{
if(getusername&&getusername.trim()===username.value.trim()&&getpassword&&getpassword.trim()===password.value.trim())
{

    setTimeout(()=>{
        window.location="index.html"
    },1500);
}
else{
    alert("username or password are wrong")
}
}
})