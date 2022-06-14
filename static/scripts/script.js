// JavaScript Document

// ARRAY FOR PRODUCT PRICES - AS THOUGH IT WERE A FULL CATALOGUE - SO THE CART CAN ACCESS THESE DYNAMICALLY
const prices = [
	{
		name: 'Fall Limited Edition Sneakers',
		price: 125,
	},
	{
		name: 'Summer Limited Edition Sneakers',
		price: 250,
	}
]

//OPEN AND CLOSE MULTIPLE MODALS
const btns = document.getElementsByClassName('btn');
const close = document.getElementsByClassName('close');
const modals = document.getElementsByClassName('modal');

[...btns].forEach((btn, ind) => {
  btn.onclick = () => (modals[ind].style.display = 'block');
});

[...close].forEach((close, ind) => {
  close.onclick = () => (modals[ind].style.display = 'none');
});


//WORKS BY ADDING THE CLASS 'MODAL' TO THE CONTAINER ELEMENT HOLDING THE ELEMENT WITH THE MODAL CONTENT, AND SETTING THIS TO THE FULL SIZE OF THE PAGE, SO CLICKING ANYWHERE OUTSIDE OF THE ELEMENT WITH THE MODAL CONTENT IS CLICKING ON THE ELEMENT WITH THE CLASS OF MODAL
window.onclick = (e) => {
  [...modals].forEach((modals) => {
    if (e.target === modals) {
      modals.style.display = 'none';
    }
  });
};

// LIGHTBOX
let lbSlideIndex = 1;
lbShowSlides(lbSlideIndex);

// Next/previous controls
function lbPlusSlides(n) {
  lbShowSlides(lbSlideIndex += n);
}

// Thumbnail image controls
function lbCurrentSlide(n) {
  lbShowSlides(lbSlideIndex = n);
}

function lbShowSlides(n) {
  let i;
  let lbSlides = document.getElementsByClassName("lb-mySlides");
  let lbThumb = document.getElementsByClassName("lb-thumbnail");
  if (n > lbSlides.length) {lbSlideIndex = 1}
  if (n < 1) {lbSlideIndex = lbSlides.length}
  for (i = 0; i < lbSlides.length; i++) {
    lbSlides[i].style.display = "none";
  }
  for (i = 0; i < lbThumb.length; i++) {
    lbThumb[i].className = lbThumb[i].className.replace(" active", "");
  }
  lbSlides[lbSlideIndex-1].style.display = "block";
  lbThumb[lbSlideIndex-1].className += " active";
}

// IMAGES
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let thumb = document.getElementsByClassName("thumbnail");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < thumb.length; i++) {
    thumb[i].className = thumb[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  thumb[slideIndex-1].className += " active";
}

//INCREMENT THE COUNTER ON ADD / REMOVE CLICK
const qty = document.getElementById("quantity");
let qClick = 0;

function addQty() {
	qClick +=1;
	qty.innerHTML = qClick;
}

function removeQty() {
	if (qClick === 0) {
		return
    } else {
		qClick -=1;
		qty.innerHTML = qClick;
		}
	
}

const addToCart = document.getElementById("add-to-cart");
const cartRoundal = document.getElementById("cart-roundal");

function addCart() {
	if (qClick >= 1) {
		if (document.getElementById("added")) {
			let newQty = document.getElementById("cart-qty").innerHTML;
			let addQty = document.getElementById("cart-qty");
			addQty.innerHTML = +newQty + +qClick;
			cartRoundal.innerHTML = +newQty + +qClick;
			let newPrice = document.getElementById("new-price");
			newPrice.innerHTML = " $" + prices[0].price * +addQty.innerHTML;
			qClick = 0;
			qty.innerHTML = qClick;
		} else {
		updateCart();
		qClick = 0;
		qty.innerHTML = qClick;
		}
	}
}

//POPULATE THE CART WITH PRODUCT PAGE INFO - DONE THIS WAY AS ON A REAL SITE WITH MULTIPLE PAGES THE CART INFO NEEDS TO POPULATE DYNAMICALLY WITH MULTIPLE PRODUCTS
function updateCart() {
	// HIDE THE CART EMPTY MESSAGE
	let emptyMsg = document.getElementById("empty-msg");
	emptyMsg.style.display = "none";
	// CREATE THE DIV TO HOLD CART INFO. APPEND TO CART MODAL
	let cartCreateProd = document.createElement("div");
	cartCreateProd.setAttribute("id", "added");
	const getCart = document.getElementById("cart-cont");
	getCart.appendChild(cartCreateProd);
    cartCreateProd.style.margin = ('20px');
	cartCreateProd.style.display = "flex";
	cartCreateProd.style.justifyContent = "space-between";
	cartCreateProd.style.alignItems = "center";
	// CREATE AND APPEND THE PRODUCT THUMBNAIL
	let cartIm = document.createElement("img");
	cartCreateProd.appendChild(cartIm);
	cartIm.setAttribute("src", "static/images/image-product-1-thumbnail.jpg");
    cartIm.setAttribute("height", "50");
    cartIm.setAttribute("width", "50");
    cartIm.setAttribute("alt", "cart image");
    cartIm.style.borderRadius = ('3px');
	// CREATE DIV TO HOUSE PRODUCT INFO PRICE & QUANTITY, APPEND TO CART MODAL
	let cartContainer = document.createElement("div");
	cartContainer.setAttribute("id", "cart-container");
	cartCreateProd.appendChild(cartContainer);
	cartContainer.style.height = "45px";
	cartContainer.style.width = "160px";
	cartContainer.style.marginRight = "40px";
	cartContainer.style.color = "hsl(219, 9%, 45%)";
	// CREATE AND APPEND DIV FOR THE PRODUCT TITLE
	let title = document.createElement("div");
	cartContainer.appendChild(title);
	title.innerHTML = prices[0].name;
	title.style.overflow = "hidden";
	title.style.whiteSpace = "nowrap";
	title.style.textOverflow = "ellipsis"
	// ADD DIV TO HOUSE PRICE AND QUANTITY
	let cartPriceCont = document.createElement("div");
	cartPriceCont.setAttribute("id", "price-container");
	cartContainer.appendChild(cartPriceCont);
	// CREATE AND APPEND THE PRODUCT PRICE
	let getPrice = document.getElementById("price");
	let cartPrice = document.createElement("span");
	cartPriceCont.appendChild(cartPrice);
	cartPrice.innerHTML = getPrice.innerHTML + " x";
	// CREATE AND APPEND ITEM QUANTITY
	let prodQty = document.createElement("span");
	prodQty.setAttribute("id", "cart-qty");
	cartPriceCont.appendChild(prodQty);
	prodQty.innerHTML = qClick;
	// CREATE AND APPEND TOTAL BASKET PRICE
	let totalPrice = document.createElement("span");
	totalPrice.setAttribute("id", "new-price");
	cartPriceCont.appendChild(totalPrice);
	totalPrice.innerHTML = " $" + prices[0].price * qClick;
	totalPrice.style.fontWeight = "700";
	totalPrice.style.color = "black";
	empty.style.display = "block";
	cartCreateProd.appendChild(empty);
	cartRoundal.style.display = "block";
	cartRoundal.innerHTML = qClick;
}

// EMPTY THE CART AND RESET ALL VALUES
const empty = document.getElementById("empty");

empty.onclick = () => {
        let emptyCart = document.getElementById("added");
        if (confirm("Are you sure you want to remove this item from your basket?")) {
			emptyCart.remove();
            let emptyMsg = document.getElementById("empty-msg");
            emptyMsg.style.display = "block";
			cartRoundal.innerHTML = "";
			cartRoundal.style.display = "none";
		} else {
            return;
	}
	
}









