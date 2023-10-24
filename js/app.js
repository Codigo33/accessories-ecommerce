/*===== MENU SHOW =====*/ 
const overlay = document.getElementById('nav-overlay');

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav && overlay) {
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show');
            overlay.style.display = nav.classList.contains('show') ? 'block' : 'none';
        });
    }
}
showMenu('nav-toggle', 'nav-menu');

/*===== REMOVE MENU MOBILE WHEN CLICK OPTION =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    // Active Link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    // Remove menu mobile
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
    overlay.style.display = "none";
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* ===== REMOVE MENU FROM OVERLAY ===== */
overlay.addEventListener('click', () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
    overlay.style.display = "none";
})