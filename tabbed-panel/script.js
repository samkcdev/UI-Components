let tabs = document.querySelectorAll(".tabs li a");
let panels = document.querySelectorAll(".panel-content");

function operatePanels(e) {
  console.log(panels);
  //find which tab i have clicked on
  let selectedTab = e.target;

  document
    .querySelector(".tabs li a.active-tab")
    .classList.remove("active-tab");

  document.querySelector(".open").classList.remove("open");

  selectedTab.classList.add("active-tab");

  const panel = [...panels].filter(
    (ele) => ele.getAttribute("id") === selectedTab.hash.replace("#", "")
  );

  console.log(panel);

  panel[0].classList.add("open");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", operatePanels);
});
