let cube = document.querySelector(".image-cube");
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");

let rotation = 0;

btnNext.addEventListener("click", () => {
    rotation -= 90;
    cube.style.transform = `rotateY(${rotation}deg)`;
});

btnPrev.addEventListener("click", () => {
    rotation += 90;
    cube.style.transform = `rotateY(${rotation}deg)`;
});
