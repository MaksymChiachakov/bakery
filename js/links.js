const Links = document.querySelectorAll('.link-scroll');

Links.forEach(link => {
    // Додайте обробник події для кожного посилання
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Заборонити стандартну поведінку посилань

        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Викликати scrollIntoView з параметром behavior: 'smooth'
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});