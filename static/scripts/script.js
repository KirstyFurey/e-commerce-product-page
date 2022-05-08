// JavaScript Document
//CREATE IMAGE ELEMENT FOR MAIN PRODUCT IMAGE
let image1 = document.createElement("img");
image1.setAttribute("id", "main-1");
image1.setAttribute("height", "340");
image1.setAttribute("width", "340");
image1.setAttribute("alt", "main image");
image1.style.borderRadius = ('10px');
image1.style.marginRight = ('10px');

//ADD THE CREATED IMAGE TO THE DIV
document.getElementById("main-image").appendChild(image1);

//SOURCE FOR THE PRODUCT IMAGEs
image1.src = 'static/images/image-product-1.jpg';

//MEDIA QUERY TO CHANGE IMAGE SIZE ON MOBILE
function imageFunction(x) {
  if (x.matches) { // If media query matches
    image1.style.width = ('375px');
    image1.style.height = ('275px');
    image1.style.objectFit = ('cover');
    image1.style.borderRadius = ('0px');
  } else {
    return;
  }
}

const x = window.matchMedia("(max-width: 375px)")
imageFunction(x) // Call listener function at run time
x.addListener(imageFunction) // Attach listener function on state changes

//replace image in main container with image clicked on
const img1 = document.getElementById('image-1');
const img2 = document.getElementById('image-2');
const img3 = document.getElementById('image-3');
const img4 = document.getElementById('image-4');
const mainImage = document.getElementById('main-image');

img2.onclick = function () {
	document.getElementById("main-1").src = 'static/images/image-product-2.jpg';
}

img3.onclick = function () {
	document.getElementById("main-1").src = 'static/images/image-product-3.jpg';
}

img4.onclick = function () {
	document.getElementById("main-1").src = 'static/images/image-product-4.jpg';
}

img1.onclick = function () {
	document.getElementById("main-1").src = 'static/images/image-product-1.jpg';
}