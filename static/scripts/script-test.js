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

//SOURCE FOR THE PRODUCT IMAGE
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
const mainImage = document.getElementById('main-1');


//CHANGE THE MAIN IMAGE ON CLICK OF A THUMBNAIL
img2.onclick = function () {
	document.getElementById("main-1").src = 'static/images/image-product-2.jpg';
	img2.style.opacity = ('0.5');
	img2.style.boxSizing = ('border-box');
    img2.style.borderStyle = ('solid');
    img2.style.borderWidth = ('thin');
    img2.style.borderRadius = ('10px');
    img2.style.borderColor = ('color', 'hsl(26, 100%, 55%)');
	img1.style.opacity = ('1');
	img1.style.borderStyle= ('none');
	img3.style.opacity = ('1');
	img3.style.borderStyle= ('none');
	img4.style.opacity = ('1');
	img4.style.borderStyle= ('none');
}

img3.onclick = function () {
	document.getElementById("main-1").src = 'static/images/image-product-3.jpg';
    img3.style.opacity = ('0.5');
	img3.style.boxSizing = ('border-box');
    img3.style.borderStyle = ('solid');
    img3.style.borderWidth = ('thin');
    img3.style.borderRadius = ('10px');
    img3.style.borderColor = ('color', 'hsl(26, 100%, 55%)');
	img1.style.opacity = ('1');
	img1.style.borderStyle= ('none');
	img2.style.opacity = ('1');
	img2.style.borderStyle= ('none');
	img2.style.opacity = ('1');
	img2.style.borderStyle= ('none');
}

img4.onclick = function () {
	document.getElementById("main-1").src = 'static/images/image-product-4.jpg';
	img4.style.opacity = ('0.5');
	img4.style.boxSizing = ('border-box');
    img4.style.borderStyle = ('solid');
    img4.style.borderWidth = ('thin');
    img4.style.borderRadius = ('10px');
    img4.style.borderColor = ('color', 'hsl(26, 100%, 55%)');
	img1.style.opacity = ('1');
	img1.style.borderStyle= ('none');
	img3.style.opacity = ('1');
	img3.style.borderStyle= ('none');
	img2.style.opacity = ('1');
	img2.style.borderStyle= ('none');
}

img1.onclick = function () {
	document.getElementById("main-1").src = 'static/images/image-product-1.jpg';
	img1.style.opacity = ('0.5');
	img1.style.boxSizing = ('border-box');
    img1.style.borderStyle = ('solid');
    img1.style.borderWidth = ('thin');
    img1.style.borderRadius = ('10px');
    img1.style.borderColor = ('color', 'hsl(26, 100%, 55%)');
	img2.style.opacity = ('1');
	img2.style.borderStyle= ('none');
	img3.style.opacity = ('1');
	img3.style.borderStyle= ('none');
	img4.style.opacity = ('1');
	img4.style.borderStyle= ('none');
}

let previous = document.getElementById('prev-chev');

previous.onClick = () => {
	
}