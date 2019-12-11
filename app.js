const Hero = document.querySelector('.Hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const Jhin = document.querySelector('.Jhin');
const headline = document.querySelector('.headline');

const t1 = new TimelineMax();

t1.fromTo(Hero,1,{height : "0%"},{height : "90%",ease: Power2.easeInOut})
.fromTo(Hero,1.2,{width : "100%"},{width : "80%",ease: Power2.easeInOut})
.fromTo(slider,1.2,{x: '-100%',},{x: '0%',ease: Power2.easeInOut})
