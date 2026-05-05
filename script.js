document.addEventListener("DOMContentLoaded", function () {

    const hero = document.querySelector(".hero-section");
    const header = document.querySelector(".header-wrapper");

    if (!hero || !header) return;

    window.addEventListener("scroll", function () {
        const scroll = window.scrollY;
        const triggerPoint = hero.offsetHeight - 100;

        if (scroll > triggerPoint) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

});
  /*hero*/
 class HeroCarousel {
            constructor() {
                this.currentSlide = 0;
                this.totalSlides = 3;
                this.autoSlideInterval = 5000; // 5 detik
                this.autoSlideTimer = null;
                this.init();
            }

            init() {
                this.startAutoSlide();
                this.bindEvents();
            }

            bindEvents() {
                // Next/Prev buttons
                document.getElementById('nextSlide').addEventListener('click', () => this.nextSlide());
                document.getElementById('prevSlide').addEventListener('click', () => this.prevSlide());

                // Dots navigation
                document.querySelectorAll('.nav-dot').forEach((dot, index) => {
                    dot.addEventListener('click', () => this.goToSlide(index));
                });

                // Keyboard navigation
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'ArrowRight') this.nextSlide();
                    if (e.key === 'ArrowLeft') this.prevSlide();
                });
            }

            goToSlide(slideIndex) {
                this.clearAutoSlide();
                
                // Update classes
                document.querySelectorAll('.hero-slide').forEach((slide, index) => {
                    slide.classList.remove('active', 'prev', 'next');
                    
                    if (index === slideIndex) {
                        slide.classList.add('active');
                    } else if (index < slideIndex) {
                        slide.classList.add('prev');
                    } else {
                        slide.classList.add('next');
                    }
                });

                // Update dots
                document.querySelectorAll('.nav-dot').forEach((dot, index) => {
                    dot.classList.toggle('active', index === slideIndex);
                });

                this.currentSlide = slideIndex;
                this.startAutoSlide();
            }

            nextSlide() {
                const nextSlide = (this.currentSlide + 1) % this.totalSlides;
                this.goToSlide(nextSlide);
            }

            prevSlide() {
                const prevSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
                this.goToSlide(prevSlide);
            }

            startAutoSlide() {
                this.clearAutoSlide();
                this.autoSlideTimer = setInterval(() => {
                    this.nextSlide();
                }, this.autoSlideInterval);
            }

            clearAutoSlide() {
                if (this.autoSlideTimer) {
                    clearInterval(this.autoSlideTimer);
                }
            }
        }

        // Initialize carousel when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            new HeroCarousel();
        });

function scrollKiri() {
  const container = document.getElementById("eventScroll");
  container.scrollLeft -= 320;
}

function scrollKanan() {
  const container = document.getElementById("eventScroll");
  container.scrollLeft += 320;
}

//donation

function showButton(card) {
  let btn = card.querySelector("button");
  btn.classList.toggle("d-none");
}

{

function animateCounter(id, target) {
    let el = document.getElementById(id);
    let count = 0;

    let interval = setInterval(() => {
        count += Math.ceil(target / 100);

        if (count >= target) {
            el.innerText = target + "+";
            clearInterval(interval);
        } else {
            el.innerText = count;
        }
    }, 20);
}

function startAll() {
    animateCounter("beavers", 3600);
    animateCounter("funds", 513);
    animateCounter("volunteer", 713);
    animateCounter("days", 487);
}

function startCount() {
    animateCounter("beavers", 3600, 100);
}

}
//galeri

function openImage(el) {
  const img = el.closest('.gallery-item').querySelector('img').src;
  const lightbox = document.getElementById("lightbox");
  const lightImg = document.getElementById("lightbox-img");

  lightbox.style.display = "flex";
  lightImg.src = img;
}

function closeImage() {
  document.getElementById("lightbox").style.display = "none";
}



const counters = document.querySelectorAll('.counter');
let started = false;

function startCounter() {
  if (started) return;

  const section = document.querySelector('.achievement');
  const sectionTop = section.offsetTop;
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  if (scrollY + windowHeight > sectionTop) {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;

      const update = () => {
        const increment = target / 100;

        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count);
          setTimeout(update, 20);
        } else {
          counter.innerText = target;
        }
      };

      update();
    });

    started = true;
  }
}

window.addEventListener('scroll', startCounter);