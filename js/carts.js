let productsInCart =localStorage.getItem("productsInCart")
let allproducts =document.querySelector(".products")

let I

if(productsInCart)
{
I=JSON.parse(productsInCart)
drawCartProducts(I)
}

function drawCartProducts(products){
   
    let y=products.map((item)=>{
        const x= `
        <div class="product-item">
        <img  class="product-item-image" src="${item.imageUrl}" alt="">
        <div class="product-item-desc">
          <h4>${item.title}</h4>
          <p style="font-size:15px">the new mobile from iphone company 6-2022</p>
          <span>${item.color}</span>
        </div>
        <div class="product-item-action">
           <div></div>
          <button class="add-to-cart " onClick="removeFromCart(${item.id})" style="width:155px">Remove From Cart</button>
         </div>
      </div>
      `
      allproducts.innerHTML +=x;
    })
   
}


function removeFromCart(id){
  let removeItem= I.findIndex((e)=>{
    return e.id===id;
  })
    if(removeItem!==-1)
    {
      I.splice(removeItem,1)
      allproducts.innerHTML=""
      drawCartProducts(I)
      localStorage.setItem("productsInCart",JSON.stringify(I))
    }
}


 