const boxes  = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);


checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight /5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
};







//Open and Close Navigation

const open = document.getElementById('open')
        const close = document.getElementById('close')
        const container = document.querySelector('.container')

        open.addEventListener('click', () => container.classList.add('show-nav'))

        close.addEventListener('click', () => container.classList.remove('show-nav'))

        















