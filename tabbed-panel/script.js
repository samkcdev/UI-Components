let tabs = document.querySelectorAll(".tabs li a");

console.log(tabs);

let activetab = () => {
  for (tab of tabs) {
    if (tab.classList.contains("active-tab")) {
      return tab;
    }
  }
};

function operatePanels(e) {
  //find which tab i have clicked on
  let clickedTab = e.srcElement;
  let href = clickedTab.href;
  let activeTab = activetab();
  console.log(clickedTab.hash);

  activeTab.classList.remove("active-tab");
  clickedTab.classList.add("active-tab");

  console.log(href);

  //get the classname if open then remove and add closed else reverse
  //also get the tab which has open class (find active tab) remove that class and add closed
}

tabs.forEach((tab) => {
  tab.addEventListener("click", operatePanels);
});
