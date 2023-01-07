const add = document.getElementById("add");
// console.log(add);
const ulB = document.querySelector(".ulb");
// console.log(ulB)
const targetBlock = document.getElementById("bar-wrapper");
// console.log(targetBlock);

targetBlock.addEventListener("click", modify);

function modify(e) {
  ulB.classList.toggle("flex");
  //   ulB.style.display = "flex";
  add.classList.toggle("none");
}
