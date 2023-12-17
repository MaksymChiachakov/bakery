const modal = document.querySelector('.backdrop');
const modalBtnOpens = document.querySelectorAll('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpens.forEach((modalBtnOpen) => {
    modalBtnOpen.addEventListener('click', toggleModal);
});

modalBtnClose.addEventListener('click', toggleModal);
