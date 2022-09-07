const tabs = document.querySelectorAll(".tabs h4");
const section = document.querySelectorAll(".section");

function handleTab(event) {
  event.preventDefault();
  for (let i = 0; i < 3; i++) {
    section[i].classList.add("hidden");
    tabs[i].classList.remove("active");
    event.target.classList.add("active");
  }
  event.target.classList.remove("hidden");
  const index = event.target.classList[0];
  document.getElementById(`${index}`).classList.remove("hidden");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", handleTab);
});

const gridBtn = document.querySelectorAll(".grid_btn");

function handleGrid() {
  event.preventDefault();
  const grid_container = document.querySelectorAll(".grid_container");
  for (let i = 0; i < gridBtn.length; i++) {
    grid_container[i].classList.toggle("hidden");
  }
  console.log(gridBtn.length);
  console.log(grid_container);
}

gridBtn.forEach((btn) => {
  btn.addEventListener("click", handleGrid);
});
