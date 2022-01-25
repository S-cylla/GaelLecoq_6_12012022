const sortLabel = document.getElementById("sort-label"); // Label du menu déroulant

function dropdown() {
  sortLabel.addEventListener("click", () => {
    activeToggle("Popularité");
  });
}

dropdown();

export default function activeToggle(value) {
  sortLabel.classList.toggle("active");
  if (!sortLabel.classList.contains("active")) {
    sortLabel.textContent = value;
  }
}
