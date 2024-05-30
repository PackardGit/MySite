let size = 100;
let increasing = true;
let container = document.getElementById('home');
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

let workGrad = document.querySelector('.work');
document.addEventListener('mousemove', (e) => {
    
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