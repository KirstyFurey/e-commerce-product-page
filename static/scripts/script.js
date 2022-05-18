// JavaScript Document
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

const mobileNav = document.getElementById('mobile-menu');
const mNav = document.getElementById('m-nav');
const close = document.getElementById('close');

function openMobileNav() {
	mNav.style.display = ('block');
}

function closeMobileNav() {
	mNav.style.display = ('none');
}

mobileNav.onclick = openMobileNav;
close.onclick = closeMobileNav;






thumb2.onclick = replaceImage2;