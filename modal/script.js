let button = document.getElementById("modal-btn");

function openModal() {
  return createModalElement();
}

function createModalElement() {
  let modalBody = document.createElement("div");
  let closeBtn = document.createElement("button");
  modalBody.classList.add("modal-body");
  closeBtn.classList.add("modal-btn");

  modalBody.textContent = "Hello There!";
  closeBtn.textContent = "Close";

  closeBtn.addEventListener("click", closeModal);
  modalBody.appendChild(closeBtn);
  document.body.appendChild(modalBody);
}

function addTextToModal(str) {}

function closeModal() {
  let modalBody = this.parentElement;
  document.body.removeChild(modalBody);
}

button.addEventListener("click", openModal);
