// localStorage.setItem("first name","Ahmed")
// localStorage.setItem("second name","Zakaria")
// console.log(localStorage.getItem("first name"))
// localStorage.removeItem("second name")
// localStorage.setItem("first name","Ahmed")
// localStorage.setItem("second name","Zakaria")
// localStorage.clear()
/////////////////////////////////////////////////////////////

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

let allproducts =document.querySelector(".products")
let products =[ 
    {
        id:1,
        title:"oppo reno 7",
        color:"black",
        imageUrl:"images/oppo.webp"

    },
    {
        id:2,
        title:"i phone 13",
        color:"red",
        imageUrl:"images/IPhone-13.jpg"

    },
    {
        id:3,
        title:"Watch2",
        color:"blue",
        imageUrl:"images/w32.jpg"

    },
    {
        id:4,
        title:"i phone XS",
        color:"gray",
        imageUrl:"images/product-item1.jpg"

    },
    {
      id:5,
      title:"smart watch",
      color:"white",
      imageUrl:"images/product-item6.jpg"

    },
    {
      id:6,
      title:"Air Pods",
      color:"white",
      imageUrl:"images/air pods.jpg"

    },
    {
      id:7,
      title:"iphone 12",
      color:"gray",
      imageUrl:"images/iphone 12pro max.jpg"

    },
    {
      id:8,
      title:"car19",
      color:"gray",
      imageUrl:"images/img1.png"

    },
    {
      id:9,
      title:"oppo reno 7",
      color:"black",
      imageUrl:"images/oppo.webp"

    },
    {
        id:10,
        title:"i phone 13",
        color:"red",
        imageUrl:"images/IPhone-13.jpg"

    },
    {
        id:11,
        title:"Watch2",
        color:"blue",
        imageUrl:"images/w32.jpg"

    },
    {
        id:12,
        title:"i phone XS",
        color:"gray",
        imageUrl:"images/product-item1.jpg"

    },
    {
      id:13,
      title:"smart watch",
      color:"white",
      imageUrl:"images/product-item6.jpg"

    },
    {
      id:14,
      title:"Air Pods",
      color:"white",
      imageUrl:"images/air pods.jpg"

    },
    {
      id:15,
      title:"iphone 12",
      color:"gray",
      imageUrl:"images/iphone 12pro max.jpg"

    },

]

function drawItem(){
    let y=products.map((item)=>{
         const x = `
        <div class="product-item">
        <img  class="product-item-image" src="${item.imageUrl}" alt="">
        <div class="product-item-desc">
          <h4>${item.title}</h4>
          <p style="font-size:15px">the new mobile from iphone company 6-2022</p>
          <span>${item.color}</span>
        </div>
        <div class="product-item-action">
        <i class="far fa-heart fav"></i>
        <button class="add-to-cart " onClick="addToCart(${item.id})"> Add To Cart</button>
        </div>
      </div> 
      `
      allproducts.innerHTML += x ;
    })
}
drawItem()
 
let cartProductDiv =document.querySelector(".carts_products div")
let badge=document.querySelector(".badge")
        
      let addedItem=localStorage.getItem("productsInCart")?JSON.parse(localStorage.getItem("productsInCart")): [];
      if(addedItem)
      {
        addedItem.map((Item)=>{
        cartProductDiv.innerHTML+=`<div>${Item.title}</div> `
        })
        badge.style.display="block"
        badge.innerHTML=addedItem.length
      }

    if(localStorage.getItem=("username"))
    {
        function addToCart(id){
            let choosenItem =products.find((item)=>item.id ===id)
            cartProductDiv.innerHTML+=`<div>${choosenItem.title}</div>`
            addedItem=[...addedItem,choosenItem]

            localStorage.setItem("productsInCart",JSON.stringify(addedItem))

            let cartsproductslen=document.querySelectorAll(".carts_products div div")
            badge.style.display="block"
            badge.innerHTML=cartsproductslen.length
        
          }
     }
    else{
        window.location="login.html"
    }

let shoppingCartIcon=document.querySelector(".shopping_cart")
let cartsProducts=document.querySelector(".carts_products")

shoppingCartIcon.addEventListener("click", opencart)

function opencart(){
if(cartProductDiv.innerHTML!="" )
{
  if(cartsProducts.style.display=="block")
  {
    cartsProducts.style.display="none"
  }
  else{
    cartsProducts.style.display="block"
  }
}
}