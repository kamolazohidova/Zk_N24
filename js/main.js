const elDemoModalOpener = document.querySelector('.modal-opener');
const elDemoModal = document.querySelector('#demo-modal');
const elButtonOrange = document.getElementById("button-orange");

elDemoModalOpener.addEventListener('click', function() {
    elDemoModal.classList.add('modal-open');
});

elButtonOrange.addEventListener('click', function() {
    elDemoModal.classList.remove('modal-open')
});
