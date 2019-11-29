// Getting height of header element
let h = document.getElementById('masthead').offsetHeight;
// Half of header height - half of 1rem * 8rem,  heading height + intro height
let offSet = (h / 2) - (16 * 4);
// turning number to a string and including px to insert into css
let offSetpx = `${offSet}px`;
document.getElementById('wrap').style.top = offSetpx;

document.onscroll = () =>  {
var scrollTop  = window.pageYOffset;
var opac = (h - scrollTop) / h;
document.getElementById('masthead').style.opacity = opac;
}