const menuBtn = document.querySelector('.menu-btn');
let openMenu = false;

menuBtn.addEventListener('click', () => {
    if(!openMenu) {
        menuBtn.classList.add('open');
        openMenu = true;
    } else {
        menuBtn.classList.remove('open');
        openMenu = false;
    }
});


function myFunction() {
    var x = document.getElementById('myLink');
    if(x.className === 'nav-link') {
        x.className += ' responsive';
    } else {
        x.className = 'nav-link';
    }
}