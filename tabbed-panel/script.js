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

  let clickedTab = e.srcElement;
  let activeTab = activetab();
  let currentactivePanel = activePanel();

  panels.forEach((panel) => {
    if (clickedTab.hash.replace(/[#]/gi, "") === panel.id) {
      panel.classList.add("open");
      currentactivePanel.classList.remove("open");
    }
  });

  //* logic for the tabs
  activeTab.classList.remove("active-tab");
  clickedTab.classList.add("active-tab");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", operatePanels);
});
