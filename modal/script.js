let mbutton = document.getElementById("modal-btn");
let nameInput = document.querySelector("input[id='name']");
let ageInput = document.querySelector("input[id='age']");
let discountButton = document.getElementById("discount-btn");
let modalCont = document.querySelector(".modal-container");

let inputvalues = {
  userName: nameInput.value,
  userAge: ageInput.value,
  getUserName: function () {
    return this.userName;
  },
  getUserAge: function () {
    return this.userAge;
  },
  updateValues: function () {
    this.userName = nameInput.value;
    this.userAge = ageInput.value;
  },
};

function displayMessage() {
  inputvalues.updateValues();
  mbutton.style.display = "block";
  let p = document.createElement("p");
  let msg = document.querySelector(".msg");
  msg.innerHTML = `<h1>Welcome! ${inputvalues.getUserName()}</h1>`;
  if (inputvalues.getUserAge() >= 18 && inputvalues.getUserAge() <= 30) {
    p.textContent = `You are eligible for 5%`;
  } else {
    p.textContent = `You are eligible for 10%`;
  }
  msg.append(p);
}

function createModalElement() {
  let modalheading = document.createElement("h1");
  let modalBody = document.createElement("div");
  let closeBtn = document.createElement("button");
  modalCont.classList.add("open");
  modalBody.classList.add("modal-body");
  closeBtn.classList.add("modal-btn");

  modalheading.textContent = `Hello There! ${inputvalues.getUserName()}`;
  closeBtn.textContent = "Close";

  closeBtn.addEventListener("click", closeModal);
  modalBody.appendChild(modalheading);
  modalBody.appendChild(closeBtn);
  modalCont.appendChild(modalBody);
}

function closeModal() {
  modalCont.classList.remove("open");
}

function openModal() {
  return createModalElement();
}

discountButton.addEventListener("click", displayMessage);
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
