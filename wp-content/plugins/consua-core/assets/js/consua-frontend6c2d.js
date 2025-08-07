;(function($) {
    'use strict';
    $(window).on( 'elementor/frontend/init', function() {

        /* ==================================================
            # Project Carousel
        ===============================================*/
        elementorFrontend.hooks.addAction('frontend/element_ready/consua_project.default',function($scope) {
            const projectStyleOneCarousel = new Swiper(".project-style-one-carousel", {
                // Optional parameters
                direction: "horizontal",
                loop: true,
                grabCursor: true,
                autoplay: false,
                // If we need pagination
                pagination: {
                    el: '.project-pagination',
                    type: 'fraction',
                    clickable: true,
                },

                // Navigation arrows
                navigation: {
                    nextEl: ".project-button-next",
                    prevEl: ".project-button-prev"
                }

                // And if we need scrollbar
                /*scrollbar: {
                el: '.swiper-scrollbar',
              },*/
            });


            const galleryFour = new Swiper(".gallery-style-four-carousel", {
                // Optional parameters
                loop: true,
                freeMode: true,
                grabCursor: true,
                slidesPerView: 1,
                spaceBetween: 50,
                autoplay: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                breakpoints: {
                    991: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3.5,
                        centeredSlides: true,
                    },
                },
            });


        });

        /* ==================================================
            # banner Carousel
        ===============================================*/
        elementorFrontend.hooks.addAction('frontend/element_ready/consua_banner.default',function($scope) {
            const bannerFade = new Swiper(".banner-fade", {
                // Optional parameters
                direction: "horizontal",
                loop: true,
                autoplay: true,
                effect: "fade",
                fadeEffect: {
                    crossFade: true
                },
                speed: 3000,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },

                // Navigation arrows
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }

                // And if we need scrollbar
                /*scrollbar: {
                el: '.swiper-scrollbar',
              },*/
            });

            
            /* ==================================================
                # Banner Carousel
             ===============================================*/
            const bannerStyleTwo = new Swiper(".banner-style-two-carousel", {
                // Optional parameters
                direction: "horizontal",
                loop: true,
                autoplay: true,
                effect: "fade",
                fadeEffect: {
                    crossFade: true
                },
                speed: 3000,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },

                // Navigation arrows
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }

                // And if we need scrollbar
                /*scrollbar: {
                el: '.swiper-scrollbar',
              },*/
            });
        });

        /* ==================================================
            # Team Carousel
        ===============================================*/
        elementorFrontend.hooks.addAction('frontend/element_ready/consua_team.default',function($scope) {
            const teamCarousel = new Swiper(".team-carousel", {
                // Optional parameters
                loop: true,
                slidesPerView: 1,
                spaceBetween: 15,
                autoplay: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                // Navigation arrows
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    }
                },
            });
        });

          /* ==================================================
            # Team Carousel
        ===============================================*/
        elementorFrontend.hooks.addAction('frontend/element_ready/consua_testimoanial_carousel.default',function($scope) {
            const testimonialCarousel = new Swiper(".testimonial-carousel", {
                // Optional parameters
                direction: "horizontal",
                loop: true,
                autoplay: true,

                // And if we need scrollbar
                /*scrollbar: {
                el: '.swiper-scrollbar',
              },*/
            });
        });

        /* ==================================================
            # Contact
        ===============================================*/
        elementorFrontend.hooks.addAction('frontend/element_ready/consua_contact_form.default',function($scope) {
            jQuery('select').niceSelect();
        });
     
    });
}(jQuery));