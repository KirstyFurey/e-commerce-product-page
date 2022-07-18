# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Repository Link](#repository-link)
  - [Website Live View](#website-live-view)
  - [Deployment](#deployment)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it
- View the total price for number of items in the cart


### Repository Link ###
The site remote repository can be located here:
</br>
*https://github.com/KirstyFurey/e-commerce-product-page*

### Website Live View ###
The site can be accessed live via:
</br>
*https://kirstyfurey.github.io/e-commerce-product-page/*

### Deployment ###
To host the site on GitHub Pages, I followed the steps below:
1. Loaded Terminal
2. Created a local Git repository for the project using the command `git init` 
3. Added all files to the local repository using the command `git add .`
4. Commited files to the local repository using the command `git commit -m "commit comment"`
5. Create a remote repository on GitHub matching the name of my project
6. Copied the remote repository link and added to the command `git remote add origin (link)` in Terminal
7. Run command `git-remote -v` to ensure remote and local repositories are linked (returns push and fetch messages if they are)
8. Run command `git push origin master`
9. Repeat steps 3, 4, and 8 regularly throughout the project to keep repositories up to date and enable rollback, testing, and updates.
10. Navigated to my project repository on GitHub, then to 'Settings' and 'Pages'
11. Selected the master branch and saved to create the live link via GitHub pages.

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

How to open and close multiple modals using JavaScript:

js
```
[...btns].forEach((btn, ind) => {
  btn.onclick = () => (modals[ind].style.display = 'block');
});

[...close].forEach((close, ind) => {
  close.onclick = () => (modals[ind].style.display = 'none');
});

window.onclick = (e) => {
 [...modals].forEach((modals) => {
    if (e.target == modals) {
      modals.style.display = 'none';
    }
  });
};
}
```
Click thumbnails to replace main image and click main image to open a lightbox:

html
```
<section>
        <!-- IMAGE GALLERY CONTAINER -->
        <div class="container">

          <!-- FULL SIZE IMAGES -->
          <div class="btn main-contain">
            <div class="mySlides">
              <img class="main-images btn" src="static/images/image-product-1.jpg" onclick="currentSlide(1)" alt="main1">
            </div>

            <div class="mySlides">
              <img class="main-images btn image234" src="static/images/image-product-2.jpg" onclick="currentSlide(2)" alt="main2">
            </div>

            <div class="mySlides">
              <img class="main-images btn image234" src="static/images/image-product-3.jpg" onclick="currentSlide(3)" alt="main3">
            </div>

            <div class="mySlides">
              <img class="main-images btn image234" src="static/images/image-product-4.jpg" onclick="currentSlide(4)" alt="main4">
            </div>
          </div>

          <!-- NEXT AND PREVIOUS BUTTONS -->
          <div id="prev-img" onclick="plusSlides(-1)">
            <button id="prev-chev">
              <img src="static/images/icon-previous.svg" alt="prev" id="previous">
            </button>
          </div>
          <div id="next-img" onclick="plusSlides(1)">
            <button id="next-chev">
              <img src="static/images/icon-next.svg" alt="next" id="next">
            </button>
          </div>

          <!-- THUMBNAILS -->
          <div class="thumb-contain">
            <div class="thumb">
              <img id="thumb-1" class="thumbnail"  src="static/images/image-product-1-thumbnail.jpg" onclick="currentSlide(1)" alt="thumb1">
            </div>
            <div class="thumb">
              <img class="thumbnail" src="static/images/image-product-2-thumbnail.jpg" onclick="currentSlide(2)" alt="thumb2">
            </div>
            <div class="thumb">
              <img class="thumbnail" src="static/images/image-product-3-thumbnail.jpg" onclick="currentSlide(3)" alt="thumb3">
            </div>
            <div class="thumb">
              <img class="thumbnail" src="static/images/image-product-4-thumbnail.jpg" onclick="currentSlide(4)" alt="thumb4s">
            </div>
          </div>
        </div>
      </section>
```

css
```
main {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
}

.container {
  /*width: 40vw;*/
  margin-right: 50px;
}

.main-contain {
  display: flex;
  justify-content: flex-end;

}

/* Hide the images by default */
.mySlides {
  display: none;
  height: 340px;
  width: 340px;
  padding-right: 10px;
}

.main-images {
  height: 100%;
  width: 100%;
  border-radius: 10px;
}

#prev-img, #next-image, #prev-chev, #next-chev {
  display: none;
}

.thumb-contain {
  display: flex;
  justify-content: flex-end;
}

.thumbnail {
  margin: 20px 10px;
  height: 70px;
  width: 70px;
  border-radius: 10px;
}

.thumb-contain:after {
  content: "";
  display: table;
  clear: both;
}

/* Six columns side by side */
.thumb {
  display: flex;
  justify-content: flex-end;
}

.active,
.thumbnail:hover {
  opacity: 0.5;
  cursor: pointer;
  transition: all 0.2s ease;
}

.active {
  box-sizing: border-box;
  border-style: solid;
  border-width: thin;
  border-radius: 10px;
  color: hsl(26, 100%, 55%);
  cursor: pointer;
  transition: all 0.2s ease;
}
```

js
```

// IMAGES
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
const plusSlides = (n) => {
  showSlides(slideIndex += n);
  lbShowSlides(lbSlideIndex += n);
}

// Thumbnail image controls
const currentSlide = (n) => {
  showSlides(slideIndex = n);
  lbShowSlides(lbSlideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const thumb = document.getElementsByClassName("thumbnail");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < thumb.length; i++) {
    thumb[i].className = thumb[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  thumb[slideIndex-1].className += " active";
}
```

Use JavaScript to add and remove items from the cart, and update quantities and prices:

html
```
<div id="cart-option">
          <div id="add-remove">
            <button class="cart-btn" id="remove">
              <span>
                <img src="static/images/icon-minus.svg" alt="remove" id="remove-icon">
              </span>
            </button>
            <span id="quantity">1</span>
            <button class="cart-btn" id="add">
              <span>
                <img src ="static/images/icon-plus.svg" alt="add">
              </span>
            </button>
          </div>
          <button id="add-to-cart">
            <span id="add-cart-logo">
              <svg id="cart-logo" width="35" height="16" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="currentColor" fill-rule="nonzero"/></svg>
            </span>
            <span id="add-cart">Add to cart</span>
          </button>
        </div>
```

css
```
#price-discount {
  line-height: 22px;
}

#price {
  font-size: 26px;
  font-weight: 700;
  padding-right: 10px;
  display: inline-block;
  vertical-align: middle;
}

#discount {
  color: hsl(26, 100%, 55%);
  background-color: hsl(25, 100%, 94%);
  padding: 0px 8px;
  font-size: 12px;
  font-weight: 700;
  display: inline-block;
  vertical-align: middle;
  border-radius: 5px;
}

#was-price {
  text-decoration: line-through;
  color: hsl(219, 9%, 45%);
}

#cart-option {
  display: flex;
  align-items: center;
}

#add-remove {
  display: flex;
  align-items: center;
  width: 180px;
  height: 55px;
  justify-content: space-between;
  /*padding: 16px 0px;*/
  background-color: hsl(223, 64%, 98%);
  border-radius: 12px;
  margin-right: 20px;
}

#quantity {
  font-weight: 700;
  padding: 0px 25px;
}

.cart-btn {
  background-color: hsl(223, 64%, 98%);
}

#remove {
  padding: 0px 15px;
  display: flex;
}

#remove-icon {
  align-items: center;
}

#add {
  padding: 0px 15px;
}

#remove:hover, #add:hover {
  cursor: pointer;
  transition: all 0.2s ease;
}

#cart-logo {
  color: white;
}

#add-to-cart {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 55px;
  /*padding: 15px 70px;*/
  background-color: hsl(26, 100%, 55%);
  border-radius: 12px;
  color: white;
  font-weight: 700;
}

#add-to-cart:hover {
  opacity: 0.65;
  cursor: pointer;
  transition: all 0.2s ease;
}
```

js
```
//INCREMENT THE COUNTER ON ADD / REMOVE CLICK
let qClick = 1;

const addQtyFtn = () => {
  qClick +=1;
  qty.innerHTML = qClick;
}

addQuantity.onclick = () => {
  addQtyFtn();
}

const removeQty = () => {
  if (qClick === 1) {
    return
  } else {
    qClick -=1;
    qty.innerHTML = qClick;
  }
}

removeQuantity.onclick = () => {
  removeQty();
}

const addCart = () => {
  if (qClick >= 1) {
    if (document.getElementById("added")) {
      const newQty = document.getElementById("cart-qty").innerHTML;
      const addQty = document.getElementById("cart-qty");
      addQty.innerHTML = +newQty + +qClick;
      cartRoundal.innerHTML = +newQty + +qClick;
      const newPrice = document.getElementById("new-price");
      newPrice.innerHTML = " $" + prices[0].price * +addQty.innerHTML;
      qClick = 1;
      qty.innerHTML = qClick;
    } else {
      updateCart();
      qClick = 1;
      qty.innerHTML = qClick;
    }
  }
}

addToCart.onclick = () => {
	addCart();
}
```

### Continued development

I've had some issues with functions working correctly when contained fully within the .js file - particulalrly arrow functions and onclick events, there are a lot of instances where the onclick event is within the html file, and there are functions written in the old style as opposed to as arrow functions. 

I've left these as is for now, as the code as a whole still works perfectly in all tests across devices, and browsers, but will look at amending these in future to see why moving the onclick events into the js file breaks it. 

I will also look at refactoring the code so that the ```updateCart()``` function is not so long - by creating separate functions for the different sections and calling them from the ```updateCart()``` function.

### Useful resources

- [Changing the colour of an SVG](https://stackoverflow.com/questions/22252472/how-to-change-the-color-of-an-svg-element#:~:text=You%20can't%20change%20the,or%20using%20inline.) - This helped me learn how to amend the fill state on an SVG file within a code editor to then allow me to change the colour depending on the icon state or use.
- [Changing the scale of an SVG](https://css-tricks.com/scale-svg/) - This article helped me in scaling the SVG file to fit required proportions.
- [Aligning an image to the right in a div](https://stackoverflow.com/questions/3254595/how-to-align-img-inside-the-div-to-the-right) - Stack Overflow answer on how to align a single image within a container div to the right of the div. Answer: `text-align: right;`
- [Align nested divs to the right](https://stackoverflow.com/questions/7693224/how-do-i-right-align-div-elements) - Stack Overlfow answer on how to align all nested divs to the right of their container div. Answer: `justify-content: center;`
- [Guide to Flexbox for aligning nav and content](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - I used this to help me align items to the correct loactions using flexbox.
- [Cursor styles](https://www.w3schools.com/cssref/pr_class_cursor.asp) - Guid to cursor options to change to pointer on hover.
- [Use media queries in JavaScript](https://www.w3schools.com/howto/howto_js_media_queries.asp) - This was helpful for how to change the styling of an element created in javascript for mobile users.
- [Placing one div above another](https://stackoverflow.com/questions/48474/how-do-i-position-one-image-on-top-of-another-in-html#:~:text=As%20the%20simplest%20solution.,left%20of%20the%20first%20image.) - Stack Overflow thread that helped me position the next and previous arrows over the main image div on mobile.
- [Add an ID to a newly created element](https://www.educative.io/edpresso/how-to-add-an-id-to-element-in-javascript) - How to add an ID to the main image  created via javascript.
- [Modal for mobile nav](https://www.w3schools.com/howto/howto_css_modals.asp) - Code for writing a modal to house the mobile nav that pops out on button click
- [Code for multiple modals](https://stackoverflow.com/questions/40645032/creating-multiple-modals-on-a-single-page) - I amended code from this Stackoverflow thread to allow me to open and close multiple modals on a page.
- [Image Gallery](https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp) - Create a slideshow gallery to move through images. I was initially trying to do this too much out of my own head without really knowing how, via JavaScript and losing functionality like hover states, and struggling to make the code re-usable to move through the images. Went back to basics and amended code from here and tried to learn what each part was achieving. 
- [Disable onclick event on mobile](https://localcoder.org/disable-anchor-menu-click-on-mobile-devices) - learned `pointer-events: none;` to disable the onclick function that opens the lightbox modal on mobile devices.


