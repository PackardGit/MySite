let size = 100;
let increasing = true;
let container = document.getElementById('home');
let moriImgNr = 1;
let lubgIngNr = 1;
let fadingTime = 300;
let slideTime = 3000

setInterval(() => {
    if (increasing) {
        size += 2;
        if (size >= 140) {
            increasing = false;
        }
    } else {
        size -= 1;
        if (size <= 100) {
            increasing = true;
        }
    }
    container.style.backgroundSize = `${size}% ${size}%`;
}, 100); 

document.addEventListener('mousemove', (e) => {
    
    let workGrad = document.querySelector('.works');
    let posXWork = e.clientX / workGrad.offsetWidth * 100;
    let posYWork = e.clientY / workGrad.offsetHeight * 100;
    workGrad.style.background = `radial-gradient(circle at ${posXWork}% ${posYWork}%, rgba(221, 155, 90, 0.1), transparent)`;

    let projGrad = document.querySelector('.projects');
    let posXProj = e.clientX / workGrad.offsetWidth * 100;
    let posYProj = e.clientY / workGrad.offsetHeight * 100;
    projGrad.style.background = `radial-gradient(circle at ${posXProj}% ${posYProj}%, rgba(221, 155, 90, 0.1), transparent)`;
});

let lastScrollTop = 0;
let navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});

function fadingOut(){
    $("#mori").fadeOut(fadingTime);
    $("#lung").fadeOut(fadingTime);
}

function changeSlide(){
    
    moriImgNr ++; if (moriImgNr>10) moriImgNr=1;
    let moriFile = "<img src=\"images/mori/mori" + moriImgNr + ".png\" alt=\"Mori game\"/>"
    document.getElementById("mori").innerHTML = moriFile;
    $("#mori").fadeIn(fadingTime);
    

    lubgIngNr ++; if (lubgIngNr>2) lubgIngNr=1;
    let lungFile = "<img src=\"images/lung/lung" + lubgIngNr + ".png\" alt=\"Lung app\"/>"
    document.getElementById("lung").innerHTML = lungFile;
    $("#lung").fadeIn(fadingTime);

    setTimeout("changeSlide()", slideTime);
    setTimeout("fadingOut()", slideTime-fadingTime);
}

function start(){
    changeSlide()
}