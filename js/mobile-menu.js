const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const menuLinks = document.querySelectorAll('.mobile-menu__link');

const toggleMenu = () => {
    const isOpen = mobileMenu.classList.contains('is-open');

    if (isOpen) {
        // Відновлення прокрутки при закритті меню
        document.body.style.overflow = 'auto';
    } else {
        // Заборона прокрутки при відкритті меню
        document.body.style.overflow = 'hidden';
    }

    mobileMenu.classList.toggle('is-open');
};

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

// Додайте обробник події для кожного посилання
menuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});
