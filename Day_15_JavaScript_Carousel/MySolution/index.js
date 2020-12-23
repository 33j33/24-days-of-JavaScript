// javascript

const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.card');

const prevButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");

let currentOffset = 0
const maxOffset = (images.length - 1) * (-220);
// Shift to next Image
nextButton.addEventListener("click", () => {
    const currentImg = document.querySelector('.current');
    currentImg.classList.remove("current");
    if (currentImg.nextElementSibling) {
        currentImg.nextElementSibling.classList.add("current");
        currentOffset -= 220;
        gallery.style.transform = `translateX(${currentOffset}px)`;
        makeDisabledOrNot();
    }
    // Add back current if the next Sibling doesn't exit
    else {
        currentImg.classList.add("current");
    }
})

// Shift to prev Image
prevButton.addEventListener("click", () => {
    const currentImg = document.querySelector('.current');
    currentImg.classList.remove("current");
    if (currentImg.previousElementSibling) {
        currentImg.previousElementSibling.classList.add("current");
        currentOffset += 220
        gallery.style.transform = `translateX(${currentOffset}px)`;
        makeDisabledOrNot();
    }
    // Add back current if the previos sibling doesn't exit
    else {
        currentImg.classList.add("current");
    }
})

// Make the buttons disabled or Not depending on whether the image is first or last image. 
function makeDisabledOrNot() {
    const currentImg = document.querySelector('.current');
    if (currentImg.isEqualNode(images[0])) {
        prevButton.classList.add("disabled");
    }
    else {
        prevButton.classList.remove("disabled");
    }
    if (currentImg.isEqualNode(images[images.length - 1])) {
        nextButton.classList.add("disabled");
    }
    else {
        nextButton.classList.remove("disabled");
    }
}