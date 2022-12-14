let projectsJSON = [
    {    
        "description": "Multilanguage portfolio for photographer",
        "previewURL": "photographer.jpg",
        "sourceURL": "https://advoryan.github.io/rss-portfolio/portfolio/",
    },
    {    
        "description": "Virtual keyboard for Windows",
        "previewURL": "virtual-kboard.jpg",
        "sourceURL": "https://advoryan.github.io/Vitual-Keyboard/",
    },
    {    
        "description": "Unsplash API for images search",
        "previewURL": "unsplash-search.jpg",
        "sourceURL": "https://advoryan.github.io/rss-portfolio/image-galery/",
    },
    {    
        "description": "Shelter for Pest. Pagination + endless salider",
        "previewURL": "shelter.jpg",
        "sourceURL": "https://advoryan.github.io/pets-shelter/shelter/pages/main/",
    },
    {    
        "description": "Pure and simple CSS-Slider",
        "previewURL": "css-meme-slider.jpg",
        "sourceURL": "https://advoryan.github.io/cssMemSlider/",
    },
    {    
        "description": "Tic-Tac-Toe game for two with TOP-Score",
        "previewURL": "tic-tac-toe.jpg",
        "sourceURL": "https://advoryan.github.io/rss-portfolio/tic-tac-toe/",
    },
    {    
        "description": "Custom video player (DOM, JS+CSS)",
        "previewURL": "custom-video.jpg",
        "sourceURL": "https://advoryan.github.io/rss-portfolio/custom-video/",
    },
]

console.log(JSON.stringify(projectsJSON))

const carousel = document.querySelector(".carousel");
const framesWrapper = carousel.querySelector(".carousel__frames-wrapper");
const slideLeftBtn = carousel.querySelector(".carousel__btn_slide-left");
const slideRightBtn = carousel.querySelector(".carousel__btn_slide-right");
const about = document.querySelector(".about-slide__text");

const getShiftedSlidesArr = (direction) => {
    let arr = [
        0, 
        projectsJSON.length < 2 ? 0 : 1, 
        projectsJSON.length < 3 ? 0 : 2,
    ];
    return function(direction) {
        if (direction === "slide-left") {
            return (arr = arr.map( element => {
                return element === 0 ? element = projectsJSON.length - 1 : --element
            }))
        } else if (direction === "slide-right") {
            return (arr = arr.map( element => {
                return element === projectsJSON.length - 1 ? element = 0 : ++element
                }))
        } else {
            return arr
        }
    }
}
    
let shiftSlidesArr = getShiftedSlidesArr("slide-left");
    
const createSlide = (slideNbr) => {
    let newFrame = document.createElement("div");
    newFrame.className = "carousel__frame";
    newFrame.innerHTML = `
    <a href="${projectsJSON[slideNbr].sourceURL}" target="_blank">
        <img src="./assets/images/carousel/${projectsJSON[slideNbr].previewURL}" 
            alt="${projectsJSON[slideNbr].description}"
            width="100%">
    </a>`;
    framesWrapper.append(newFrame);
}

//init: creates 3 slides if projectsJSON has at leat 1 item
shiftSlidesArr().forEach( slideNbr => {
    createSlide(slideNbr);
})
about.innerHTML = projectsJSON[1].description;

const slides = carousel.querySelectorAll(".carousel__frame");

const modifySlide = () => {
    for (let i = 0; i < slides.length; i++) {
        slides[i].innerHTML = `
        <a href="${projectsJSON[shiftSlidesArr()[i]].sourceURL}" target="_blank">
            <img src="./assets/images/carousel/${projectsJSON[shiftSlidesArr()[i]].previewURL}" 
                alt="${projectsJSON[shiftSlidesArr()[i]].description}"
                width="100%">
        </a>`;
    }
    about.innerHTML = projectsJSON[shiftSlidesArr()[1]].description;
}

const modifyAllSlides = () => {
    shiftSlidesArr().forEach(slideNbr => {
        createSlide(slideNbr)
    });
}

const getPreviousSlide = () => {
    framesWrapper.classList.add("slide-left");
    shiftSlidesArr("slide-left");
}

const getNextSlide = () => {
    framesWrapper.classList.add("slide-right");
    shiftSlidesArr("slide-right");
}

slideLeftBtn.addEventListener('click', getPreviousSlide);
slideRightBtn.addEventListener('click', getNextSlide);

framesWrapper.addEventListener('animationstart', () => {
    slideLeftBtn.removeEventListener('click', getPreviousSlide);
    slideRightBtn.removeEventListener('click', getNextSlide);    
})

framesWrapper.addEventListener('animationend', () => {
    modifySlide();
    framesWrapper.classList.remove("slide-left");
    framesWrapper.classList.remove("slide-right");
    slideLeftBtn.addEventListener('click', getPreviousSlide);
    slideRightBtn.addEventListener('click', getNextSlide);
})