window.onload = function() {
  const panels = document.querySelectorAll(".panel");

  console.log("panels length", panels.length);

  function showPanelAnimation(event) {
    this.classList.toggle("grow");
    this.classList.toggle("show");
  }

  panels.forEach(panel => {
    panel.addEventListener("click", showPanelAnimation);
  });
};
