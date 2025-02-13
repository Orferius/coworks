const topics = document.querySelectorAll(".topic");

topics.forEach((topic) => {
    topic.addEventListener("click", (e) => {
        if (e.target.closest(".topic__btn")) {
            const content = topic.querySelector(".topic__content");
            const icon = topic.querySelector(".topic__icon");
            const isOpened = topic.classList.toggle("topic--open");

            if (isOpened) {
                icon.src = "./img/icons/btn-minus.svg";
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                icon.src = "./img/icons/btn-plus.svg";
                content.style.maxHeight = '0px';
            }
        }
    });
});
