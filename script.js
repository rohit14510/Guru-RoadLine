$(document).ready(function(){
    $(".mobile-menuicon").click(function(){
        $(".mobile-menu").css("left", "0");  // Menu को दिखाने के लिए
    });

    $(".close-menu").click(function(){
        $(".mobile-menu").css("left", "-100%");  // Menu को छुपाने के लिए
    });

    // Menu के बाहर क्लिक करने पर भी बंद करने का ऑप्शन
    $(document).click(function(event) {
        if (!$(event.target).closest('.mobile-menu, .mobile-menuicon').length) {
            $(".mobile-menu").css("left", "-100%");
        }
    });
});
// Hero Section Slider
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-slider', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        interval: 2000,
        arrows: true,
        pagination: false,
    }).mount();
});

// About Section Counter 
document.addEventListener("DOMContentLoaded", function () {
    function startCounter(counterElement) {
        const target = +counterElement.getAttribute("data-target");
        let count = 0;
        const speed = target / 100; // Adjust speed

        function updateCount() {
            if (count < target) {
                count += speed;
                counterElement.innerText = Math.floor(count);
                requestAnimationFrame(updateCount);
            } else {
                counterElement.innerText = target;
            }
        }
        updateCount();
    }

    function checkVisibility() {
        document.querySelectorAll(".about-counter").forEach(counter => {
            const rect = counter.getBoundingClientRect();
            if (rect.top < window.innerHeight && !counter.classList.contains("started")) {
                counter.classList.add("started");
                startCounter(counter);
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});
// circle progress
document.addEventListener("DOMContentLoaded", function () {
    function startCounter(element) {
        let target = +element.parentElement.getAttribute("data-percentage");
        let count = 0;
        let interval = setInterval(() => {
            if (count < target) {
                count++;
                element.innerText = count;
                element.parentElement.style.background = `conic-gradient(#e32222 ${count * 3.6}deg, #f3f3f3 0deg)`;
            } else {
                clearInterval(interval);
            }
        }, 20);
    }

    function checkScroll() {
        document.querySelectorAll(".counter").forEach(counter => {
            const rect = counter.getBoundingClientRect();
            if (rect.top < window.innerHeight && !counter.classList.contains("started")) {
                counter.classList.add("started");
                startCounter(counter);
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

//client slider
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#client-slider', {
        type    : 'loop',
        perPage : 5,   // Desktop में 5 इमेज
        perMove : 1,
        autoplay: true,
        interval: 2000,
        arrows: false,
        pagination: false,
        breakpoints: {
            768: { perPage: 1 } // Mobile में 1 इमेज
        }
    }).mount();
});
//Testimonials
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#Testimonials_splide', {
        type: 'loop',
        perPage: 3, // डेस्कटॉप पर 3 आइटम
        autoplay: true,
        arrows: false,
        pagination: false,
        breakpoints: {
            768: {
                perPage: 1, // मोबाइल स्क्रीन पर 1 आइटम
            }
        }
    }).mount();
});