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


