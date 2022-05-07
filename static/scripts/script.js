// JavaScript Document


//replace image in main container with image clicked on
const img1 = document.getElementById('image-1');
const img2 = document.getElementById('image-2');
const img3 = document.getElementById('image-3');
const img4 = document.getElementById('image-4');
const mainImage = document.getElementById('main-image');
/*
//Load page with 1st image in 'main-image div'
window.onload = function () {
	let image1 = document.createElement("img");
	image1.setAttribute("src","static/images/image-product-1.jpg");
	mainImage.innerHTML('image1');
}*/

let image1 = document.createElement("img");
image1.setAttribute("height", "340");
image1.setAttribute("width", "340");
image1.setAttribute("alt", "main image");
image1.style.borderRadius = ('10px');
image1.style.marginRight = ('10px');
//image1.setAttribute("border-radius", "10");
//image1.setAttribute("margin-right", "10");

document.getElementById("main-image").appendChild(image1);

image1.src = 'static/images/image-product-1.jpg';

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
/*
#full-size-1 {
		width: 375px;
		height: 275px;
		object-fit: cover;
		text-align: center;
		border-radius: 0px;
	}*/