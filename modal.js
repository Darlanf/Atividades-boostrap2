const myModal = new bootstrap.Modal("#staticBackdrop");

const btnYes = document.getElementById('btn-sim').addEventListener("click", yes);
const btnNo = document.getElementById('btn-nao').addEventListener("click", no);


function closeModal () {
    myModal.hide()
};

function yes() {
    closeModal();
    console.log(`Exclusão dos dados confirmada!`);
};

function no() {
    closeModal();
    console.log(`Exclusão dos dados não confirmada!`);
};


