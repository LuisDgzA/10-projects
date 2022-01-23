const body = document.body;
const openModal = document.getElementById('openModal')
// const openModal2 = document.getElementById('openModal2')

const modal1 = document.getElementById('modal1')
// const modal2 = document.getElementById('modal2')

const closeModals = document.getElementsByClassName('close-modal')


openModal.addEventListener('click', () => {
    body.classList.add('body-active')
    modal1.style.display = "flex"
})
// openModal2.addEventListener('click', () => {
//     body.classList.add('body-active')
//     modal2.style.display = "flex"
// })

// Array.from(closeModals).map(elem => {
//     elem.addEventListener('click', function () {
//         body.classList.remove('body-active')
//         this.closest('.modal').style.display = "none";
//     })
// }) 
