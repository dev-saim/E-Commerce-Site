const to = document.querySelector(".to-top")
window.addEventListener("scroll", ()=>{
    if(window.pageYOffset>100)
    {
        to.classList.add("active");
    }
    else
    {
        to.classList.remove("active");
    }
})
let slideIndex = 1;
    
    showSlides(slideIndex);

    function plusSlides(n) 
    {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) 
    {
        showSlides(slideIndex = n);
    }

    function showSlides(n) 
    {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) 
        {
             slideIndex = 1 
        }
        if (n < 1)
        {
            slideIndex = slides.length 
        }
        for (i = 0; i < slides.length; i++) 
        {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) 
        {
            dots[i].className = dots[i].className.replace(" active", "");
        }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
    }

let menu = document.querySelector('.bar');
let side = document.querySelector('.side-bar');    
 
window.onresize = () =>
{
    side.classList.remove('active');
} 
window.onscroll= () =>
{
    side.classList.remove('active');
}


var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
