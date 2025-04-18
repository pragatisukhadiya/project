
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // In a real app, you would send this data to a server
            console.log(`Contact form submitted by ${name} (${email}) about ${subject}: ${message}`);

            // Show confirmation message
            alert('Thank you for your message! We will get back to you soon.');

            // Reset form
            contactForm.reset();
        });
    }


