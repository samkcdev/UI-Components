let tabs = document.querySelectorAll(".tabs li a");
let panels = document.querySelectorAll(".panel-content");
console.log(tabs);

let activetab = () => {
  for (let tab of tabs) {
    if (tab.classList.contains("active-tab")) {
      return tab;
    }
  }
};

let activePanel = () => {
  for (let panel of panels) {
    if (panel.classList.contains("open")) {
      return panel;
    }
  }
};

function operatePanels(e) {
  //find which tab i have clicked on
  console.log(e);
  let selectedTab = e.target;
  let currentTab = activetab();
  let currentPanel = activePanel();

  panels.forEach((panel) => {
    if (selectedTab.hash.replace(/[#]/gi, "") === panel.id) {
      panel.classList.add("open");
      currentPanel.classList.remove("open");
    }
  });

  //* logic for the tabs
  currentTab.classList.remove("active-tab");
  selectedTab.classList.add("active-tab");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", operatePanels);
});
