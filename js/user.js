let user=document.querySelector("#user")
let userinfo=document.querySelector("#user_info")
let links=document.querySelector("#links")

if(localStorage.getItem("username")){
    links.remove()
    userinfo.style.display="flex"

    user.innerHTML=localStorage.getItem("username")
}

let logOutBtn=document.querySelector("#logout")

logOutBtn.addEventListener("click",function(){
    localStorage.clear();
    setTimeout(() => {
        window.location="login.html"
    },1500);
})