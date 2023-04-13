//array of colors
const colors = ["green", "red", "rgb(133,122,200)", "#f15025"]; // array of colors
//getting the html elements with document
const btn = document.getElementById("btn");
const color = document.querySelector("#color");
//event listener to make color change with button click
btn.addEventListener("click", () => {
  // get random number between 0-3
  const randomNumber = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
