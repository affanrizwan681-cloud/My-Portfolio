    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
    
    // Form Submission
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // In a real application, you would send this data to a server
      // For this demo, we'll just show an alert
      alert(`Thank you, ${name}! Your message has been sent. I'll get back to you at ${email} as soon as possible.`);
      
      // Reset form
      contactForm.reset();
    });
    
    // Add smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId); 
        if(targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Project card hover effect enhancement
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mouseenter', function() {
        const links = this.querySelectorAll('.project-links .btn');
        links.forEach(link => {
          link.style.transform = 'translateY(0)';
        });
      });
      
      card.addEventListener('mouseleave', function() {
        const links = this.querySelectorAll('.project-links .btn');
        links.forEach(link => {
          link.style.transform = '';
        });
      });
    });

    // Gmail Compose Window Opener
    document.addEventListener('DOMContentLoaded', function() {
      // Handle all email links on the page
      document.querySelectorAll('.email-link').forEach(emailLink => {
        emailLink.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Get email address from data-email attribute
          const email = this.getAttribute('data-email');
          
          // Open Gmail compose window in a new tab
          const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
          window.open(gmailUrl, '_blank');
        });
      });
    });