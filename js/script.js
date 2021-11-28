// import { products } from "./products";


function setCartProductsNum() {
  cartProductsNum.textContent = `Numero prodotti: ${cartList.length}`;
}

function createProduct(parent, imgUrl, productTitle, textPrice, idProduct) {
  const product = document.createElement("div");
  product.className = "product";
  product.setAttribute("id", idProduct);

  createImg(product, imgUrl, productTitle);
  createText(product, productTitle, textPrice);
  parent.appendChild(product);

  product.addEventListener("click", (e) => {
    const localStorageValue = localStorage.getItem("totCartitems");
    if (localStorageValue) {
      cartList = JSON.parse(localStorageValue);
    }

    cartList.push(
      productsList.find(
        (product) => parseInt(e.currentTarget.id) === product.id
      )
    );
    setCartProductsNum();
    // alert(`Prodotto aggiunto al carrello, numero prodotti: ${cartList.length}`);
    // Nel caso in cui volessimo aggiungere una interazione col LocalStorage

    const modal = document.querySelector(".modal");
    
    modal.classList.toggle("modal2");

    setTimeout(() => {
      modal.classList.toggle("modal2");
    },1200)


    localStorage.setItem("totCartitems", JSON.stringify(cartList));

    // console.log("LOCAL STORAGE ==>", localStorageValue);
  });
}

function createImg(parent, imgUrl, productTitle) {
  const image = document.createElement("img");
  image.src = imgUrl;
  image.alt = productTitle;

  parent.appendChild(image);
}

function createText(parent, productTitle, textPrice) {
  const title = document.createElement("h4");
  title.textContent = productTitle;

  const price = document.createElement("strong");
  price.textContent = `${textPrice} $`;

  parent.append(title, price);
}

function renderProducts(listItems) {
  listItems.map((product) => {
    createProduct(
      wrapperProducts,
      product.image,
      product.title,
      product.price,
      product.id
    );
  });
}

function handleShowCartBtn() {
  // showCartBtn.setAttribute("disabled", true);
  wrapper.removeChild(showCartBtn);
  wrapperProducts.classList.add("sideViewAnim");

  document
    .querySelectorAll(".product")
    .forEach((product) => wrapperProducts.removeChild(product));

  renderProducts(JSON.parse(localStorageTot) || cartList);

  setTimeout(() => {
    wrapperProducts.classList.remove("sideViewAnim");
  }, 1000);
}


// Async await
const getProductsList = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  productsList = data;

  // Nella eventualità di aggiungere una quantità per prodotto
  // productsList = data.map((product) => {
  //   product.quantity = 0;
  //   return product;
  // });

  return renderProducts(data);
};

let productsList = [];
const wrapperProducts = document.querySelector(".wrapper__products");
const wrapper = document.querySelector(".wrapper");
// Parte inerente alla logica del carrello
let cartList = [];

const localStorageTot = localStorage.getItem("totCartitems");
const cartBtn = document.querySelector(".cartBtn");
const cartProductsNum = document.querySelector(".cartProductsNum");
const clearCartBtn = document.querySelector(".clearCart");
const showCartBtn = document.querySelector(".showCartBtn");

// Flusso generale
const parsedTotCardItemsLen =
  JSON.parse(localStorage.getItem("totCartitems"))?.length || 0;

cartProductsNum.textContent = `Numero prodotti: ${parsedTotCardItemsLen || 0}`;
getProductsList();

clearCartBtn.addEventListener("click", () => {
  cartList.length = 0;
  localStorage.removeItem("totCartitems");
  setCartProductsNum();
});

showCartBtn.addEventListener("click", handleShowCartBtn);

// funzione slideshow Hero

function slideshow (){
setTimeout(() => {
  document.querySelector(".overlay").className="overlayDue"

setTimeout(() => {
  document.querySelector(".overlayDue").className="overlayTre"

setTimeout(() => {
  document.querySelector(".overlayTre").className="overlay"
},3000);
},3000);
},3000);
};

window.onload = setInterval(function(){slideshow();}, 9000);




let reviews = new Array();
reviews[0] = "Il miglior ecommerce in circolazione!";
reviews[1] ="Eccezionale! Tutto a portata di click!";
reviews[2] = "Peccato non averlo scoperto prima";
reviews[3] = "Ottimo rapporto qualità prezzo! Consigliatissimo";

let counter = 0;
function loop() {
  if (counter > 2) counter = 0;
  document.getElementById("text__review").firstElementChild.innerHTML =
    reviews[counter];
  counter++;
  setTimeout(loop, 2000);
}
loop();






