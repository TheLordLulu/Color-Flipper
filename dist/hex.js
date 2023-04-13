// array of hex numbers
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//getting the html elements with document
const btn = document.getElementById("btn");
const color = document.querySelector("#color");

//event listener to make color change with button click
btn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * 16)];
  }
  color.textContent = hexColor;
  document.body.style.background = hexColor;
});
