// Your code goes here
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// Randomly change the color of "Fun Bus" and all text when you hover over it and change it
// back to black when you move away from it.
const h1 = document.querySelector('.logo-heading');
h1.addEventListener('pointerover', event => { 
    document.body.style.color = getRandomColor();
    h1.style.color = getRandomColor();
})
h1.addEventListener('pointerout', event => {
    document.body.style.color = 'black';
    h1.style.color = 'black';
})

// Change the image when its clicked.
const headerImage = document.querySelector('.intro');
headerImage.addEventListener('click', event => {         
    switch (headerImage.firstElementChild.src) {
        case 'http://127.0.0.1:5500/img/Fun bus 1.jpg':
        headerImage.firstElementChild.src = 'img/Fun Bus 2.jpg';
            break;

        case 'http://127.0.0.1:5500/img/Fun Bus 2.jpg':
        headerImage.firstElementChild.src = 'img/Fun Bus again.jpg';
            break;

        case 'http://127.0.0.1:5500/img/Fun Bus again.jpg':
        headerImage.firstElementChild.src = 'img/Fun bus 1.jpg';
            break;

        case 'http://127.0.0.1:5500/img/fun-bus.jpg':
        headerImage.firstElementChild.src = 'img/group-young-children-getting-on-450w-314871770.jpg';
            break;

        case 'http://127.0.0.1:5500/img/group-young-children-getting-on-450w-314871770.jpg':
        headerImage.firstElementChild.src = 'img/Less Fun Bus.jpg';
            break;

        case 'http://127.0.0.1:5500/img/Less Fun Bus.jpg':
        headerImage.firstElementChild.src = 'img/Fun Bus 2.jpg';
            break;

        default:
        headerImage.firstElementChild.src = 'img/fun-bus.jpg';
            break;

    }    
    
})
// Prevent the refreshing of the page from clicking the nav items
const navItems = document.querySelectorAll('.nav');
navItems[0].addEventListener('click', event => {
    event.preventDefault();
})

// On dblclick change the words of Home to Away and back again
let navA = document.querySelector('.nav-link');
navA.addEventListener('dblclick', event => {
    event.preventDefault();
    if (navA.firstChild.textContent === 'Home') {
        navA.firstChild.textContent = 'Away';        
    }
    else {
        navA.firstChild.textContent = 'Home';        
    }
})

// On right click suppress contextmenu and popu a warning
navA.addEventListener('contextmenu', event => {    
    event.preventDefault();
    alert('DONT CLICK ME!!');
})

// On mouse enter make the color of the text random
const signMeUpBtns = document.querySelectorAll('.btn');
signMeUpBtns[0].addEventListener('mouseenter', event => {    
    signMeUpBtns[0].style.color = getRandomColor();
})
signMeUpBtns[1].addEventListener('mouseenter', event => {
    signMeUpBtns[1].style.color = getRandomColor();
})
signMeUpBtns[2].addEventListener('mouseenter', event => {
    signMeUpBtns[2].style.color = getRandomColor();
})

// Change the size on the mousedown and back to normal on mouseup
signMeUpBtns[0].addEventListener('mousedown', event => {    
    console.log(signMeUpBtns[0].style)
    signMeUpBtns[0].style = 'width:100px';
})
signMeUpBtns[0].addEventListener('mouseup', event => {
    console.log(signMeUpBtns[0].style)
    signMeUpBtns[0].style = 'width:200px';
})
signMeUpBtns[1].addEventListener('mousedown', event => {    
    console.log(signMeUpBtns[0].style)
    signMeUpBtns[1].style = 'width:100px';
})
signMeUpBtns[1].addEventListener('mouseup', event => {
    console.log(signMeUpBtns[0].style)
    signMeUpBtns[1].style = 'width:200px';
})
signMeUpBtns[2].addEventListener('mousedown', event => {    
    console.log(signMeUpBtns[0].style)
    signMeUpBtns[2].style = 'width:100px';
})
signMeUpBtns[2].addEventListener('mouseup', event => {
    console.log(signMeUpBtns[0].style)
    signMeUpBtns[2].style = 'width:200px';
})

// Change the backcolor of the footer when mouseover
const footer = document.querySelector('.footer p');
footer.addEventListener('mouseover', event => {
    footer.textContent = 'Brought to you by, the letter L and the Number 2';
    footer.style.backgroundColor = 'grey';
})
footer.addEventListener('mouseleave', event => {
    footer.textContent = 'Copyright Fun Bus 2018';
    footer.style.backgroundColor = '#FFEBCD';
})

// Change the background color of the body of the page by clicking the navbar
const navDiv = document.querySelector('.main-navigation');
navDiv.addEventListener('auxclick', event => {
    document.body.style.backgroundColor = getRandomColor();
})

// return the background to white after supressing the context menu
navDiv.addEventListener('contextmenu', event => {
    event.preventDefault();
    document.body.style.backgroundColor = 'white';
})

