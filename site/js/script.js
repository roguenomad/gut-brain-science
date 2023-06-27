const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelector(".slider-wrapper i");

let isDragging = false, startX, startScrollLeft;

const dragStart = () => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; //if isDragging is false return from here
    //Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);