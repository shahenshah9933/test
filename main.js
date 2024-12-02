var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  const faqs = document.querySelectorAll(".faq-item"); // Select all FAQ items

  faqs.forEach(faq => {
    faq.addEventListener('click', () => { 
      const icon = faq.querySelector('.faq_icon i'); // Select the icon within the clicked FAQ item
      faq.classList.toggle('open'); // Toggle the 'open' class on the clicked FAQ item
      
      // Check if the icon has the 'fa-plus' class
      if (icon.classList.contains('fa-plus')) {
        icon.classList.remove('fa-plus'); // Remove the plus icon
        icon.classList.add('fa-minus'); // Add the minus icon
      } else {
        icon.classList.remove('fa-minus'); // Remove the minus icon
        icon.classList.add('fa-plus'); // Add the plus icon
      }
    });
  });
  