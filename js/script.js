let currentSlide = 0;
const slides = document.querySelectorAll('.slide-image');
const slideshowContainer = document.getElementById('slideshow');
let startX = 0;
let isDragging = false;
let slideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function startAutoSlide() {
  slideInterval = setInterval(nextSlide, 3000);
}

function restartAutoSlide() {
  clearInterval(slideInterval);
  startAutoSlide();
}

// Swipe Events
slideshowContainer.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
}, { passive: true });

slideshowContainer.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const diff = e.touches[0].clientX - startX;

  if (Math.abs(diff) > 50) {
    isDragging = false;
    if (diff < 0) {
      nextSlide();
    } else {
      prevSlide();
    }
    restartAutoSlide();
  }
}, { passive: true });

slideshowContainer.addEventListener('touchend', () => {
  isDragging = false;
});

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
  startAutoSlide();

  document.querySelector('.next').addEventListener('click', () => {
    nextSlide();
    restartAutoSlide();
  });

  document.querySelector('.prev').addEventListener('click', () => {
    prevSlide();
    restartAutoSlide();
  });
});


document.getElementById("corporateGiftForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      document.getElementById("formSuccess").style.display = "block";
      form.reset();
      setTimeout(() => {
        document.getElementById("formSuccess").style.display = "none";
      }, 3000);
    } else {
      alert("Error submitting form. Please try again.");
    }
  } catch (error) {
    alert("Network error. Please try again later.");
  }
});






  const toggleBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('main-nav');
  let isOpen = false;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    toggleBtn.innerHTML = isOpen
      ? '<i class="bi bi-list"></i>'
      : '<i class="bi bi-x-lg"></i>';
    isOpen = !isOpen;
  });




  document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
          slide.classList.add("active");
        }
      });
    }

    // Show first slide initially
    showSlide(currentSlide);

    // Next button
    window.nextSlide = function () {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    };

    // Previous button
    window.prevSlide = function () {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
    };
  });

const videos = document.querySelectorAll('.video-thumb video');

videos.forEach(video => {
  video.addEventListener('play', () => {
    videos.forEach(other=>{
      if (other !== video) {
        other.pause();
        other.classList.remove('playing');
      } 
    });
    video.classList.add('playing');
  });

  // when a video is paused
  video.addEventListener('pause', () => {
    video.currentTime = 0;
    video.classList.remove('playing');
  });

  video.addEventListener('ended', () => {
    video.currentTime = 0;
    video.classList.remove('playing');
  });
});




  document.querySelectorAll('.custom-play-btn').forEach(button => {
    const videoId = button.getAttribute('data-video');
    const video = document.getElementById(videoId);

    // Play video and hide custom button when clicked
    button.addEventListener('click', () => {
      if (video) {
        video.play();
        button.style.display = 'none';
      }
    });

    // Show play button again when video is paused
    video.addEventListener('pause', () => {
      button.style.display = 'block';
    });

    // Also hide play button when video starts playing (e.g., from native controls)
    video.addEventListener('play', () => {
      button.style.display = 'none';
    });
  });



