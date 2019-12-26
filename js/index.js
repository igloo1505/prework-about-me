// Getting height of header element
let h = document.getElementById('masthead').offsetHeight;
let offSet = (h / 2) - (16 * 8);
// turning number to a string and including px to insert into css
let offSetpx = `${offSet}px`;
document.getElementById('wrap').style.top = offSetpx;

let wit = document.body.clientWidth;

    document.getElementById('masthead').style.width = `${wit}px`;
document.getElementById('body').style.width = `${wit}px`;




// Cheesy Fade-in/out effects
document.onscroll = () =>  {
var scrollTop  = window.pageYOffset;
var opacHeader = (h - scrollTop) / h;
document.getElementById('masthead').style.opacity = opacHeader;


var winHeight = window.innerHeight;
var footHeight = document.getElementById('footer').offsetHeight;
var opacFooter = scrollTop + winHeight + footHeight;
var showFooter = opacFooter - document.getElementById('body').clientHeight;



var footer = document.getElementById('footer');

if (showFooter > 60) {   
    footer.style.opacity = 1;
    footer.style.transition = 'opacity 1s';
    footer.style.width = `${wit}px`;
} 



}




