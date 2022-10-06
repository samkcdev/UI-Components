let mbutton = document.getElementById("modal-btn");
let nameInput = document.querySelector("input[id='name']");
let ageInput = document.querySelector("input[id='age']");
let discountButton = document.getElementById("discount-btn");

function getInputValues() {
  mbutton.style.display = "block";
  let p = document.createElement("p");
  let userName = nameInput.value;
  let userAge = ageInput.value;
  let msg = document.querySelector(".msg");
  msg.innerHTML = `<h1>Welcome ${userName}</h1>`;
  if (userAge > 18 && userAge < 30) {
    p.textContent = `You are eligible for 5%`;
  } else {
    p.textContent = `You are eligible for 10%`;
  }
  msg.append(p);
  return userName;
}

function openModal() {
  return createModalElement();
}

function createModalElement() {
  let modalheading = document.createElement("h1");
  let modalBody = document.createElement("div");
  let closeBtn = document.createElement("button");
  modalBody.classList.add("modal-body");
  closeBtn.classList.add("modal-btn");

  modalheading.textContent = `Hello There! ${getInputValues()}`;
  closeBtn.textContent = "Close";

  closeBtn.addEventListener("click", closeModal);
  modalBody.appendChild(modalheading);
  modalBody.appendChild(closeBtn);
  document.body.appendChild(modalBody);
}

function closeModal() {
  let modalBody = this.parentElement;
  document.body.removeChild(modalBody);
}

discountButton.addEventListener("click", getInputValues);
mbutton.addEventListener("click", openModal);

// function betterThanAverage(classPoints, yourPoints) {
//   // Your code here
//   let avgPoints = classPoints.reduce((pPoint, cPoint) => {
//     return pPoint + cPoint;
//   }, yourPoints);
//   if (yourPoints >= avgPoints / classPoints.length) {
//     return true;
//   } else {
//     return false;
//   }
// }

// betterThanAverage([2, 3], 5);
