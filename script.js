function openTab(evt, tabId) {
  const contents = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tab-buttons button");

  contents.forEach(c => c.classList.remove("active"));
  buttons.forEach(b => b.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  evt.currentTarget.classList.add("active");
}
