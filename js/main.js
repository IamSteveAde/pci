/*  ---------------------------------------------------
    Theme Name: Staging
    Description: Staging bootstrap tamplate
    Author: Colorib
    Author URI: https://www.colorib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Canvas Menu
    $(".canvas__open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("active");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("active");
        $(".offcanvas-menu-overlay").removeClass("active");
    });


    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });
    document.addEventListener("DOMContentLoaded", function () {
        const hamburger = document.querySelector(".hamburger");
        const mobileMenu = document.querySelector(".mobile-menu");
        const dropdown = document.querySelector(".has-dropdown");
    
        // Toggle Mobile Menu
        hamburger.addEventListener("click", function () {
            mobileMenu.classList.toggle("active");
            hamburger.classList.toggle("active");
        });
    
        // Toggle Dropdown
        dropdown.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });
    

    document.addEventListener('DOMContentLoaded', function () {
        const counters = document.querySelectorAll('.counter');
      
        counters.forEach(counter => {
          const updateCount = () => {
            const target = +counter.getAttribute('data-count');
            const current = +counter.innerText;
            const increment = target / 100;
      
            if (current < target) {
              counter.innerText = Math.ceil(current + increment);
              setTimeout(updateCount, 10);
            } else {
              counter.innerText = target;
            }
          };
      
          updateCount();
        });
      });



      
      

    /*-----------------------
        Hero Slider
    ------------------------*/
    $(".hero__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'><i/>", "<i class='fa fa-angle-right'><i/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1500,
        autoHeight: false,
        autoplay: true,
        mouseDrag: false,
        onInitialized: function (e) {
            var a = this.items().length;
            $("#snh-1").html("<span>01</span><span>" + "0" + a + "</span>");
            var presentage = Math.round((100 / a));
            $('.slider__progress span').css("width", presentage + "%");
        }
    }).on("changed.owl.carousel", function (e) {
        var b = --e.item.index,
            a = e.item.count;
        $("#snh-1").html("<span> " + "0" + (1 > b ? b + a : b > a ? b - a : b) + "</span><span>" + "0" + a + "</span>");

        var current = e.page.index + 1;
        var presentage = Math.round((100 / e.page.count) * current);
        $('.slider__progress span').css("width", presentage + "%");
    });

    /*--------------------------
        Project Slider
    ----------------------------*/
    $(".project__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        dots: false,
        nav: true,
        navText: ["<span class='arrow_carrot-left'><span/>", "<span class='arrow_carrot-right'><span/>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false,
        responsive: {
            320: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    /*-----------------------------
        Testimonial Slider
    -------------------------------*/
    $('.testimonial__carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        // autoplay:true,
        asNavFor: '.testimonial__client',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"><i></i></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"><i></i></i></button>',
      });
      $('.testimonial__client').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.testimonial__carousel',
        arrows: false,
        variableWidth: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false
              }
            }
          ]
        
      });

    /*---------------------------------
        Logo Carousel
    ----------------------------------*/
    $(".logo__carousel").owlCarousel({
        loop: true,
        margin: 80,
        items: 5,
        dots: false,
        nav: false,
        smartSpeed: 5000,
        autoplayTimeout: 1500,
        autoplaySpeed: 500,
        autoHeight: false,
        autoplay: true,
        responsive: {
            320: {
                items: 2
            },
            576: {
                items: 3
            },
            992: {
                items: 5
            },
        }
    });

    /*------------------
        Counter
    --------------------*/
  

    document.addEventListener("DOMContentLoaded", function() {
        let observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.5 }); // Trigger when 50% of element is visible
    
        document.querySelectorAll(".fade-in").forEach((item) => {
            observer.observe(item);
        });
    });
    
    document.addEventListener("DOMContentLoaded", () => {
        const counters = document.querySelectorAll(".count");
        const speed = 200;
    
        const startCounting = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = +entry.target.getAttribute("data-target");
                    const increment = target / speed;
    
                    let count = 0;
                    const updateCount = () => {
                        count += increment;
                        if (count < target) {
                            entry.target.innerText = Math.ceil(count);
                            requestAnimationFrame(updateCount);
                        } else {
                            entry.target.innerText = target;
                        }
                    };
                    updateCount();
                    observer.unobserve(entry.target);
                }
            });
        };
    
        const observer = new IntersectionObserver(startCounting, {
            threshold: 0.5
        });
    
        counters.forEach(counter => {
            observer.observe(counter);
        });
    });
    

})(jQuery);

const tabButtons = document.querySelectorAll('.wobbly-tab-btn');
const tabPanels = document.querySelectorAll('.wobbly-tab-panel');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active classes
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanels.forEach(panel => panel.classList.remove('active'));

    // Add active class to clicked button and matching panel
    button.classList.add('active');
    const target = button.getAttribute('data-target');
    document.getElementById(target).classList.add('active');
  });
});
  document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-lemon');
    const statusFilter = document.getElementById('status-cherry');
    const solutionFilter = document.getElementById('solution-banana');
    const regionFilter = document.getElementById('region-avocado');
    const cards = document.querySelectorAll('.card-unicorn');
    const noResults = document.getElementById('no-results-snake');
  
    function filterCompanies() {
      const searchText = searchInput.value.toLowerCase();
      const statusValue = statusFilter.value.toLowerCase();
      const solutionValue = solutionFilter.value.toLowerCase();
      const regionValue = regionFilter.value.toLowerCase();
  
      let visibleCount = 0;
  
      cards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        const status = card.dataset.status.toLowerCase();
        const solution = card.dataset.solution.toLowerCase();
        const region = card.dataset.region.toLowerCase();
  
        const matchesSearch = name.includes(searchText);
        const matchesStatus = statusValue === 'all' || status === statusValue;
        const matchesSolution = solutionValue === 'all' || solution === solutionValue;
        const matchesRegion = regionValue === 'all' || region === regionValue;
  
        if (matchesSearch && matchesStatus && matchesSolution && matchesRegion) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });
  
      if (visibleCount === 0) {
        noResults.classList.remove('hidden-snake');
        document.getElementById('video-background').style.display = 'block';
      } else {
        noResults.classList.add('hidden-snake');
        document.getElementById('video-background').style.display = 'none';
      }
    }
  
    searchInput.addEventListener('input', filterCompanies);
    statusFilter.addEventListener('change', filterCompanies);
    solutionFilter.addEventListener('change', filterCompanies);
    regionFilter.addEventListener('change', filterCompanies);
  });
  const toggleButtons = document.querySelectorAll('.toggle-parrot');

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const description = button.parentElement.nextElementSibling;
  
      if (description.style.display === 'block') {
        description.style.display = 'none';
        button.innerHTML = 'Details ▼';
      } else {
        description.style.display = 'block';
        button.innerHTML = 'Hide ▲';
      }
    });
  });
      
  document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-lemon');
    const statusFilter = document.getElementById('status-cherry');
    const solutionFilter = document.getElementById('solution-banana');
    const regionFilter = document.getElementById('region-avocado');
    const cards = document.querySelectorAll('.card-unicorn');
    const noResults = document.getElementById('no-results-snake');
  
    // Modal Elements
    const modal = document.getElementById('modal-profile');
    const closeModalBtn = document.getElementById('close-modal');
    const companyNameElement = document.getElementById('company-name');
    const companyLogoElement = document.getElementById('company-logo');
    const companyDescriptionElement = document.getElementById('company-description');
  
    // Open Modal and Populate Data
    function openModal(card) {
      const companyName = card.dataset.name;
      const companyLogo = card.querySelector('img').src;
      const companyDescription = card.querySelector('.company-description').innerHTML;
  
      companyNameElement.textContent = companyName;
      companyLogoElement.src = companyLogo;
      companyDescriptionElement.innerHTML = companyDescription;
  
      modal.classList.add('active-falcon');
    }
  
    // Close Modal
    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active-falcon');
    });
  
    // Filter Companies based on Input
    function filterCompanies() {
      const searchText = searchInput.value.toLowerCase();
      const statusValue = statusFilter.value.toLowerCase();
      const solutionValue = solutionFilter.value.toLowerCase();
      const regionValue = regionFilter.value.toLowerCase();
  
      let visibleCount = 0;
  
      cards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        const status = card.dataset.status.toLowerCase();
        const solution = card.dataset.solution.toLowerCase();
        const region = card.dataset.region.toLowerCase();
  
        const matchesSearch = name.includes(searchText);
        const matchesStatus = statusValue === 'all' || status === statusValue;
        const matchesSolution = solutionValue === 'all' || solution === solutionValue;
        const matchesRegion = regionValue === 'all' || region === regionValue;
  
        // Show or hide the card based on filter matches
        if (matchesSearch && matchesStatus && matchesSolution && matchesRegion) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });
  
      // Show or hide 'No Results' message
      if (visibleCount === 0) {
        noResults.classList.remove('hidden-snake');
      } else {
        noResults.classList.add('hidden-snake');
      }
    }
  
    // Event listeners for inputs and filters
    searchInput.addEventListener('input', filterCompanies);
    statusFilter.addEventListener('change', filterCompanies);
    solutionFilter.addEventListener('change', filterCompanies);
    regionFilter.addEventListener('change', filterCompanies);
  
    // Event listener for the toggle button
    cards.forEach(card => {
      const toggleButton = card.querySelector('.toggle-parrot');
      toggleButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default action
        openModal(card); // Open the modal with the card's data
      });
    });
  });

  // Form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const reason = document.getElementById('reason').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if (!name || !reason || !message) {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = 'red';
        return;
      }
  
      // Simulate sending an email
      // In real life, you would connect to a service like Formspree, EmailJS, or your backend
      console.log("Sending email to adediranstephen2000@gmail.com:");
      console.log("Name:", name);
      console.log("Reason:", reason);
      console.log("Message:", message);
  
      formMessage.textContent = "Thank you for contacting us! We will get back to you shortly.";
      formMessage.style.color = 'green';
  
      form.reset();
    });
  });

  
  //insight page
  const grid = document.getElementById('zx7-grid');
const loadMoreBtn = document.getElementById('loadMoreBtn');

// Example content array
const articles = [
  { title: "AI in 2025", desc: "Where AI is heading globally.", img: "https://via.placeholder.com/600x400" },
  { title: "Green Energy", desc: "Sustainability in tech companies.", img: "https://via.placeholder.com/600x400" },
  { title: "Women in Tech", desc: "Empowering female leaders.", img: "https://via.placeholder.com/600x400" },
  { title: "Remote Work Trends", desc: "How businesses are adapting.", img: "https://via.placeholder.com/600x400" },
  { title: "Cybersecurity 101", desc: "Protecting your online data.", img: "https://via.placeholder.com/600x400" },
  { title: "Next-Gen Software", desc: "Tech companies to watch.", img: "https://via.placeholder.com/600x400" },
  { title: "Diversity Matters", desc: "Building inclusive workspaces.", img: "https://via.placeholder.com/600x400" },
  { title: "Web3 Explained", desc: "Future of decentralized internet.", img: "https://via.placeholder.com/600x400" },
];

// Load batch size
let batch = 4;
let current = 0;

// Function to load cards
function loadCards() {
  const slice = articles.slice(current, current + batch);
  slice.forEach((article, index) => {
    const card = document.createElement('div');
    card.className = 'zx7-card' + (index % 5 === 0 ? ' large' : '');
    card.innerHTML = `
      <img src="${article.img}" alt="${article.title}">
      <div class="zx7-card-content">
        <h3>${article.title}</h3>
        <p>${article.desc}</p>
      </div>
    `;
    grid.appendChild(card);
  });
  current += batch;
  
  if (current >= articles.length) {
    loadMoreBtn.style.display = 'none';
  }
}



// Load first cards
loadCards();

// Button click
loadMoreBtn.addEventListener('click', loadCards);



