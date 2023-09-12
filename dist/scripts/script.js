const burger = document.getElementById('burger-on');
const burger2 = document.getElementById('burger-off');
const navLinks = document.querySelector('.header-nav');



// OPEN-CLICK //
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active__nav-list');
    burger.style.display = "none";
    burger2.style.display = "block";
})

// CLOSE-CLICK //
burger2.addEventListener('click', () => {
    navLinks.classList.toggle('active__nav-list');
    burger.style.display = "block";
    burger2.style.display = "none";
})

