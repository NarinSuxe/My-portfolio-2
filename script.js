
// FIND THE HEADER ELEMENT IN THE HTML AND STORE IT IN A VARIABLE "header" 
const header = document.querySelector('header');

// ADD AN EVENT LISTENER TO THE WINDOW OBJECT THAT LISTENS FOR THE "scroll" EVENT
window.addEventListener('scroll', () => {
    // CHECK IF THE USER HAS SCROLLED MORE THAN 50 PIXELS DOWN THE PAGE. IF SO, ADD THE "scrolled" CLASS TO THE HEADER ELEMENT. OTHERWISE, REMOVE THE "scrolled" CLASS.
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// FIND THE "READ MORE" BUTTON ELEMENT IN THE HTML AND STORE IT IN A VARIABLE "readMoreButton"
const readMoreButton = document.querySelector('.read-more-button');

// FIND ALL THE ELEMENTS WITH THE CLASS "about-more" AND STORE THEM IN A VARIABLE "aboutMore"
const aboutMore = document.querySelectorAll('.about-more');

// ADD AN EVENT LISTENER TO THE "READ MORE" BUTTON THAT LISTENS FOR THE "click" EVENT
readMoreButton.addEventListener('click', () => {

aboutMore.forEach((paragaph) => {
     paragaph.classList.toggle('show');
});   
     if (aboutMore[0].classList.contains('show')) {
        readMoreButton.textContent = 'Read less';
    } else {
        readMoreButton.textContent = 'Read more';
    }
});