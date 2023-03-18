const navbar = document.getElementById('nav'); // gets the navbar element

// if the user scrolls down the page the navbar will get a  black background color
function ScrollDown() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.style.background = '#1a1a1a';
    
        //if the user scrolls back to the top of the page it will return to the initial state
    } else {
        navbar.style.background = 'none'; 
    }
}

window.onscroll = function() {
    ScrollDown();
}
console.log('this is working');