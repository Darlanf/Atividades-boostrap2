const liveAlert = document.getElementById('liveAlert');
const alertModal = new bootstrap.Modal("#alertStaticBackdrop");

const btnAlertYes = document.getElementById('btn-alert-sim').addEventListener("click", yes);
const btnAlertNo = document.getElementById('btn-alert-nao').addEventListener("click", no);

function closeAlertModal () {
  alertModal.hide()
};

function closeAlert () {
  liveAlert.innerHTML = "";
};

function yes() {
  closeAlertModal();
  allAlert("Exclusão dos dados confirmada!", "success");
  setTimeout(() => {
    closeAlert();
  }, 3000);
};

function no() {
  closeAlertModal();
  allAlert("Exclusão dos dados não confirmada!", "danger");
  setTimeout(() => {
    closeAlert();
  }, 3000);
};

const allAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  liveAlert.append(wrapper);
};
