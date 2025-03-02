let currentIndex = 0;
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slider img");
    const totalSlides = slides.length;
        
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
    }
        
    setInterval(nextSlide, 4000); // Change slide every 4 seconds
        
    let currentIndex1 = 0;
    const slider1 = document.querySelector(".slider");
    const slides1 = document.querySelectorAll(".slider img");
    const totalSlides1 = slides.length;
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    function updateSlide() {
        slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlide();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlide();
    }

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

