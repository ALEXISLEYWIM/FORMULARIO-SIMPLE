document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const confirmation = document.getElementById('confirmation');
    const resetBtn = document.getElementById('resetBtn');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    const confirmName = document.getElementById('confirmName');
    const confirmEmail = document.getElementById('confirmEmail');
    const confirmMessage = document.getElementById('confirmMessage');
    
    let messages = [];
    
    function validateForm() {
        let isValid = true;

        const name = document.getElementById('name').value.trim();    
        const email = document.getElementById('email').value.trim(); 
        const message = document.getElementById('message').value.trim(); 

        if (name === '') {
            nameError.style.display = 'block';
            isValid = false;
        } else { 
            nameError.style.display = 'none';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }

        if (message === '') {
            messageError.style.display = 'block';
            isValid = false;
        } else {
            messageError.style.display = 'none';
        }
        
        return isValid;
    }

    function showConfirmation(name, email, message) {
        confirmName.textContent = name;
        confirmEmail.textContent = email;
        confirmMessage.textContent = message;
        
        contactForm.style.display = 'none';
        confirmation.style.display = 'block';
    }

    function resetForm() {
        contactForm.reset();
        confirmation.style.display = 'none';
        contactForm.style.display = 'block';
        
        nameError.style.display = 'none';
        emailError.style.display = 'none';
        messageError.style.display = 'none';
    }

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        if (validateForm()) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const messageText = document.getElementById('message').value.trim(); 
            
            const newMessage = {
                id: Date.now(),
                name: name,
                email: email,
                message: messageText,
                date: new Date().toISOString()
            };
            
            messages.push(newMessage);
            showConfirmation(name, email, messageText);
            
            console.log('MENSAJE ENVIADO: ', newMessage);
            console.log('TODOS LOS MENSAJES: ', messages);
        }    
    });

    resetBtn.addEventListener('click', resetForm);
});