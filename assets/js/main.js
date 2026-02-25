// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }
    
    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    const formMessages = document.getElementById('form-messages');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            
            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Submit to Formspree
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    formMessages.textContent = 'Thank you! Your message has been sent successfully.';
                    formMessages.className = 'success';
                    contactForm.reset();
                } else {
                    return response.json().then(data => {
                        if (data.errors) {
                            formMessages.textContent = data.errors.map(error => error.message).join(', ');
                        } else {
                            formMessages.textContent = 'Oops! There was a problem submitting your form. Please try again.';
                        }
                        formMessages.className = 'error';
                    });
                }
            })
            .catch(error => {
                formMessages.textContent = 'Oops! There was a problem submitting your form. Please try again.';
                formMessages.className = 'error';
            })
            .finally(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            });
        });
    }
});