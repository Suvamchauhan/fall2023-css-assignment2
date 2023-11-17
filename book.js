// Add your custom JavaScript code here

// Highlight active section in navigation on scroll
document.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('.mt-4'); // Adjust the class if needed
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
    sections.forEach((section, index) => {
      let topOffset = section.offsetTop - 50; // Adjust the offset if needed
  
      if (scrollPosition >= topOffset) {
        document.querySelectorAll('.nav-link').forEach((link) => {
          link.classList.remove('active');
        });
  
        document.querySelectorAll('.nav-link')[index].classList.add('active');
      }
    });
  });
  