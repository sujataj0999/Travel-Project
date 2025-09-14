        document.addEventListener('DOMContentLoaded', function() {
            const searchInput = document.getElementById('searchInput');
            const searchIcon = document.querySelector('.fa-search');
            const suggestionsDropdown = document.getElementById('suggestionsDropdown');
            
            // Show suggestions when clicking input or icon
            searchInput.addEventListener('focus', function() {
                suggestionsDropdown.style.display = 'block';
            });
            
            searchIcon.addEventListener('click', function() {
                searchInput.focus();
                suggestionsDropdown.style.display = 'block';
            });
            
            // Hide suggestions when clicking outside
            document.addEventListener('click', function(event) {
                if (!searchInput.contains(event.target) && 
                    !searchIcon.contains(event.target) && 
                    !suggestionsDropdown.contains(event.target)) {
                    suggestionsDropdown.style.display = 'none';
                }
            });
            
            // Populate search field when suggestion is clicked
            document.querySelectorAll('.suggestion-item').forEach(item => {
                item.addEventListener('click', function() {
                    searchInput.value = this.textContent;
                    suggestionsDropdown.style.display = 'none';
                    // You could trigger search here if desired
                });
            });
            
            // Optional: Filter suggestions based on input
            searchInput.addEventListener('input', function() {
                const filter = this.value.toLowerCase();
                const items = document.querySelectorAll('.suggestion-item');
                
                items.forEach(item => {
                    const text = item.textContent.toLowerCase();
                    if (text.includes(filter)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });


// odisha top places 1st carousal Swiper js slider

//Initialize Swiper

    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
    //   spaceBetween: 30,
    //   centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      autoplay: {delay: 2000}
    //   //on: {
    //     autoplayTimeLeft(s, time, progress) {
    //       progressCircle.style.setProperty("--progress", 1 - progress);
    //       progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    //     }//
      
    });


            // Odisha Most Searchable Places Carousel
        document.addEventListener('DOMContentLoaded', function() {
            const odishaMostSearchablePlacesSlide = document.querySelector('.odisha-most-searchable-places-slide');
            const odishaMostSearchablePlacesGroups = document.querySelectorAll('.odisha-most-searchable-places-group');
            const odishaMostSearchablePlacesDots = document.querySelectorAll('.odisha-most-searchable-places-dot');
            const odishaMostSearchablePlacesPrevBtn = document.querySelector('.odisha-most-searchable-places-carousel .prev');
            const odishaMostSearchablePlacesNextBtn = document.querySelector('.odisha-most-searchable-places-carousel .next');
            
            if (odishaMostSearchablePlacesSlide && odishaMostSearchablePlacesGroups.length > 0 && odishaMostSearchablePlacesPrevBtn && odishaMostSearchablePlacesNextBtn) {
                let currentOdishaMostSearchablePlacesIndex = 0;
                const totalOdishaMostSearchablePlacesSlides = odishaMostSearchablePlacesGroups.length;
                
                function updateOdishaMostSearchablePlacesCarousel() {
                    odishaMostSearchablePlacesSlide.style.transform = `translateX(-${currentOdishaMostSearchablePlacesIndex * 100}%)`;
                    
                    if (odishaMostSearchablePlacesDots.length > 0) {
                        odishaMostSearchablePlacesDots.forEach((dot, index) => {
                            dot.classList.toggle('active', index === currentOdishaMostSearchablePlacesIndex);
                        });
                    }
                }
                
                // Next button
                odishaMostSearchablePlacesNextBtn.addEventListener('click', () => {
                    currentOdishaMostSearchablePlacesIndex = (currentOdishaMostSearchablePlacesIndex + 1) % totalOdishaMostSearchablePlacesSlides;
                    updateOdishaMostSearchablePlacesCarousel();
                });
                
                // Previous button
                odishaMostSearchablePlacesPrevBtn.addEventListener('click', () => {
                    currentOdishaMostSearchablePlacesIndex = (currentOdishaMostSearchablePlacesIndex - 1 + totalOdishaMostSearchablePlacesSlides) % totalOdishaMostSearchablePlacesSlides;
                    updateOdishaMostSearchablePlacesCarousel();
                });
                
                // Dot navigation
                odishaMostSearchablePlacesDots.forEach(dot => {
                    dot.addEventListener('click', () => {
                        const slideIndex = parseInt(dot.getAttribute('data-slide'));
                        if (!isNaN(slideIndex)) {
                            currentOdishaMostSearchablePlacesIndex = slideIndex;
                            updateOdishaMostSearchablePlacesCarousel();
                        }
                    });
                });
                
                // Optional auto-advance
                let odishaMostSearchablePlacesAutoSlide = setInterval(() => {
                    currentOdishaMostSearchablePlacesIndex = (currentOdishaMostSearchablePlacesIndex + 1) % totalOdishaMostSearchablePlacesSlides;
                    updateOdishaMostSearchablePlacesCarousel();
                }, 5000);
                
                // Pause on hover
                const odishaMostSearchablePlacesCarousel = document.querySelector('.odisha-most-searchable-places-carousel');
                if (odishaMostSearchablePlacesCarousel) {
                    odishaMostSearchablePlacesCarousel.addEventListener('mouseenter', () => {
                        clearInterval(odishaMostSearchablePlacesAutoSlide);
                    });
                    
                    odishaMostSearchablePlacesCarousel.addEventListener('mouseleave', () => {
                        odishaMostSearchablePlacesAutoSlide = setInterval(() => {
                            currentOdishaMostSearchablePlacesIndex = (currentOdishaMostSearchablePlacesIndex + 1) % totalOdishaMostSearchablePlacesSlides;
                            updateOdishaMostSearchablePlacesCarousel();
                        }, 5000);
                    });
                }
                
                // Cleanup
                window.addEventListener('beforeunload', () => {
                    clearInterval(odishaMostSearchablePlacesAutoSlide);
                });
            }
        });

      