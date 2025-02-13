const openModalsBtns = document.querySelectorAll("[data-action='modal']");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector("#closeModal");
const modalBody = document.querySelector(".modal__body");

const openModal = () => {
    modal.classList.add("modal--open");
    document.body.classList.add("no-scroll");
};

const closeModal = () => {
    modal.classList.remove("modal--open");
    document.body.classList.remove("no-scroll");
};

// Открытие модалки
openModalsBtns.forEach((item) => item.addEventListener("click", openModal));

// Закрытие модалки по кнопке, оверлею и Escape
modalCloseBtn.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => e.key == "Escape" && closeModal());

// Запрет всплытия события
modalBody.addEventListener("click", (e) => e.stopPropagation());
