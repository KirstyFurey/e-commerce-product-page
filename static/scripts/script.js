// JavaScript Document

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


//GET THE IDS TO REPLACE IMAGES ON CLICK OF THUMBNAIL
const thumb1 = document.getElementById('image-1');
const thumb2 = document.getElementById('image-2');
const thumb3 = document.getElementById('image-3');
const thumb4 = document.getElementById('image-4');
const prod = document.getElementById('prod-img')


//REPLACE IMAGE ON THUMBNAIL CLICK
function replaceImage1() {
	prod.src = "static/images/image-product-1.jpg";
	
	/*thumb1.style.opacity = ('0.5');
	thumb1.style.boxSizing = ('border-box');
    thumb1.style.borderStyle = ('solid');
    thumb1.style.borderWidth = ('thin');
    thumb1.style.borderRadius = ('10px');
    thumb1.style.borderColor = ('color', 'hsl(26, 100%, 55%)');*/
}

thumb1.onclick = replaceImage1;

function replaceImage2() {
	prod.src = "static/images/image-product-2.jpg";
	/*thumb2.style.opacity = ('0.5');
	thumb2.style.boxSizing = ('border-box');
    thumb2.style.borderStyle = ('solid');
    thumb2.style.borderWidth = ('thin');
    thumb2.style.borderRadius = ('10px');
    thumb2.style.borderColor = ('color', 'hsl(26, 100%, 55%)');*/
}

thumb2.onclick = replaceImage2;

function replaceImage3() {
	prod.src = "static/images/image-product-3.jpg";
	/*thumb3.style.opacity = ('0.5');
	thumb3.style.boxSizing = ('border-box');
    thumb3.style.borderStyle = ('solid');
    thumb3.style.borderWidth = ('thin');
    thumb3.style.borderRadius = ('10px');
    thumb3.style.borderColor = ('color', 'hsl(26, 100%, 55%)');*/
}

thumb3.onclick = replaceImage3;

function replaceImage4() {
	prod.src = "static/images/image-product-4.jpg";
	/*thumb4.style.opacity = ('0.5');
	thumb4.style.boxSizing = ('border-box');
    thumb4.style.borderStyle = ('solid');
    thumb4.style.borderWidth = ('thin');
    thumb4.style.borderRadius = ('10px');
    thumb4.style.borderColor = ('color', 'hsl(26, 100%, 55%)');*/
}

thumb4.onclick = replaceImage4;

//CHANGE IMAGE ON MOBILE

//GET THE NEXT AND PREVIOUS BUTTONS
const prev = document.getElementById('prev-img');
const mobIm = document.getElementById('prod-img');
const mobIm4 = document.getElementById('mobile-4');







/*
function replaceMobIm() {
	mobIm.src = "static/images/image-product-4.jpg";
}

prev.onclick = replaceMobIm;*/
/*
function replaceMobIm() {
	if (mobIm.src == "static/images/image-product-1.jpg") {
        mobIm.innerHTML.src = "static/images/image-product-4.jpg"
	} else if (mobIm.src == "static/images/image-product-2.jpg") {
        mobIm.src = "static/images/image-product-1.jpg"
	} else if (mobIm.src == "static/images/image-product-3.jpg") {
        mobIm.src = "static/images/image-product-2.jpg"
	} else if (mobIm.src == "static/images/image-product-4.jpg") {
        mobIm.src = "static/images/image-product-3.jpg"
	} else {
		return;
	}
}

prev.onclick = replaceMobIm;
*/
/*

function replaceMobIm() {
	mobIm.setAttribute('id', 'mobile-1');
	if (mobIm.id == 'mobile-1') {
		mobIm.src = "static/images/image-product-4.jpg";
		mobIm.setAttribute('id', 'mobile-4');
	} else if (mobIm4.id == 'mobile-4') {
		mobIm4.src = "static/images/image-product-3.jpg"
		mobIm4.setAttribute('id', 'mobile-3');
	} else {
		return;
	}
}
prev.onclick = replaceMobIm;

*/















	