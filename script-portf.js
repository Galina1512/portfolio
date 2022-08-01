// const container = document.querySelectorAll(".container");
const div1 = document.querySelectorAll(".card1");
const div2 = document.querySelectorAll(".card2");

document.querySelectorAll('.card1').forEach(item => {
    item.addEventListener('click', event => {
    div1.style="display: none";
    div2.style = "display:flex";
        // div1.style.display = "none";
        // div2.style.display = "flex";

})
  })
