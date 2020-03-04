const slides=document.querySelectorAll(".slide");
const next=document.querySelector("#next");
const prev=document.querySelector("#prev");
const auto = true; // Auto scroll
const intervalTime = 7000;
let slideInterval;

const nextSlide=()=> {
	const currentSlide=document.querySelector(".current");
	currentSlide.classList.remove("current");
	if(currentSlide.nextElementSibling){
		currentSlide.nextElementSibling.classList.add("current");
	} else{
		slides[0].classList.add("current");
	}
	setTimeout(()=>currentSlide.classList.remove("current"));
};


const prevSlide=()=> {
	const currentSlide=document.querySelector(".current");
	currentSlide.classList.remove("current");
	if(currentSlide.previousElementSibling){
		currentSlide.previousElementSibling.classList.add("current");
	} else{
		slides[slides.length - 1].classList.add("current");
	}
	setTimeout(()=>currentSlide.classList.remove("current"));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}