
let bag=[];
let cartitems=JSON.parse(localStorage.getItem("cartproducts")) || [];
fetch("db2.json")
.then((res)=>res.json())
.then((data)=>{
    console.log(data)
    bag=data;
    displaycard(data);
});
function search(){
    let q=document.querySelector("#search").value;
    let newdata=bag.filter(function(elem){
        return elem.title.toLowerCase().includes(q.toLocaleLowerCase());
    });
    displaycard(newdata);
}
let cartarr=[];
function displaycard(data){
    document.querySelector("#right-div").innerHTML="";
    data.forEach(function (elem){
    let div=document.createElement("div");
    let imageprod=document.createElement("img");
    imageprod.setAttribute("src",elem.avatar);

    let title=document.createElement("h6");
    title.innerText=elem.title;

    let author=document.createElement("p");
    author.setAttribute("class","ptag")
    author.innerText=elem.author;

    let price=document.createElement("p");
    price.setAttribute("class","ptag")
    price.innerText=elem.price;

    let rating=document.createElement("p");
    rating.setAttribute("class","ptag")
    rating.innerText=elem.rating;

    let btn=document.createElement("button")
    btn.setAttribute("class","cart-btn")
    btn.innerText="Add To Cart";
    btn.addEventListener("click",function(){
        flag=true;
        for(let i=0;i<cartarr.length;i++){
            if(cartarr[i].id==elem.id){
                flag=false;
                break;
            }
        }
        if(flag){
            cartarr.push(elem)
            localStorage.setItem("cart",JSON.stringify(cartarr));
            alert("Product Added To Cart")
        }else{
            alert("Product Already In Cart");
        }
        });

    div.append(imageprod,title,author,price,rating,btn);
    document.querySelector("#right-div").append(div);
    });
}