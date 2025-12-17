// Form Validation

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservationForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            validateForm();
        });
    }
});

function validateForm() {
    // Clear previous errors
    clearErrors();
    
    // Get form values
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const room = document.getElementById('room').value;
    const guests = document.getElementById('guests').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    
    // Array to store errors
    const errors = [];
    
    // Validate full name
    if (!fullname) {
        errors.push({
            field: 'fullname',
            message: 'Full name is required.'
        });
    } else if (fullname.length < 3) {
        errors.push({
            field: 'fullname',
            message: 'Full name must have at least 3 characters.'
        });
    } else if (!/^[a-zA-Z\s]+$/.test(fullname)) {
        errors.push({
            field: 'fullname',
            message: 'Full name can only contain letters and spaces.'
        });
    }
    
    // Validate email
    if (!email) {
        errors.push({
            field: 'email',
            message: 'Email is required.'
        });
        // Validate email format
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push({
            field: 'email',
            message: 'Invalid email address (example: user@email.com).'
        });
    }
    
    // Validate room type
    if (!room) {
        errors.push({
            field: 'room',
            message: 'Please select a room type.'
        });
    }
    
    // Validate number of guests
    if (!guests) {
        errors.push({
            field: 'guests',
            message: 'Number of guests is required.'
        });
    } else if (guests < 1 || guests > 6) {
        errors.push({
            field: 'guests',
            message: 'Number of guests must be between 1 and 6.'
        });
    }
    
    // Validate check-in date
    if (!checkin) {
        errors.push({
            field: 'checkin',
            message: 'Check-in date is required.'
        });
    }
    
    // Validate check-out date
    if (!checkout) {
        errors.push({
            field: 'checkout',
            message: 'Check-out date is required.'
        });
    }
    
    // Validate that checkout is after checkin
    if (checkin && checkout) {
        const checkinDate = new Date(checkin);
        const checkoutDate = new Date(checkout);
        
        if (checkoutDate <= checkinDate) {
            errors.push({
                field: 'checkout',
                message: 'Check-out date must be after check-in date.'
            });
        }
    }
    
    // If there are errors, show them
    if (errors.length > 0) {
        showErrors(errors);
        return;
    }
    
    // If all is valid, show confirmation message with data
    showConfirmation({
        fullname,
        email,
        room,
        guests,
        checkin,
        checkout
    });
}

function showErrors(errors) {
    // Create error container
    const errorContainer = document.createElement('div');
    errorContainer.className = 'alert alert-danger alert-dismissible fade show';
    errorContainer.id = 'alertaErrores';
    errorContainer.role = 'alert';
    
    // Error header
    let htmlErrors = '<strong> Please correct the following errors:</strong><ul style="margin: 15px 0 0 0; padding-left: 20px;">';
    
    // Add each error
    errors.forEach(error => {
        htmlErrors += `<li>${error.message}</li>`;
        
        // Mark field with error and show message below
        const field = document.getElementById(error.field);
        if (field) {
            field.classList.add('is-invalid');
            field.style.borderColor = '#dc3545';
            field.style.borderWidth = '2px';
            field.style.backgroundColor = 'rgba(220, 53, 69, 0.05)';
            
            // Create error message below field
            const errorMessage = document.createElement('small');
            errorMessage.className = 'error-message';
            errorMessage.style.cssText = 'color: #dc3545; display: block; margin-top: 5px; font-weight: bold;';
            errorMessage.textContent = error.message;

        }
    });
    
    htmlErrors += '</ul>';
    htmlErrors += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
    
    errorContainer.innerHTML = htmlErrors;
    
    // Insert error alert at the beginning of the form
    const form = document.getElementById('reservationForm');
    form.parentElement.insertBefore(errorContainer, form);
    
    // Scroll to error alert
    errorContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function clearErrors() {
    // Remove error alert if exists
    const errorAlert = document.getElementById('alertaErrores');
    if (errorAlert) {
        errorAlert.remove();
    }
    
    // Remove error classes from all inputs
    const fields = document.querySelectorAll('input, select, textarea');
    fields.forEach(field => {
        field.classList.remove('is-invalid');
        field.style.borderColor = '';
        field.style.borderWidth = '';
        field.style.backgroundColor = '';
        
        // Remove error messages below each field
        const fieldContainer = field.parentElement;
        const errorMessages = fieldContainer.querySelectorAll('.error-message');
        errorMessages.forEach(message => message.remove());
    });
}

function showConfirmation(data) {
    // Room name mapping
    const roomNames = {
        'standard': 'Standard Room',
        'suite': 'Suite',
        'honeymoon': 'Honeymoon Suite'
    };
    
    // Format dates
    const checkinDate = new Date(data.checkin).toLocaleDateString('en-US');
    const checkoutDate = new Date(data.checkout).toLocaleDateString('en-US');
    
    // Get overlay from HTML
    const overlay = document.getElementById('overlay-confirmacion');
    
    // Fill data in modal
    document.getElementById('modal-nombre').textContent = data.fullname;
    document.getElementById('modal-email').textContent = data.email;
    document.getElementById('modal-habitacion').textContent = roomNames[data.room];
    document.getElementById('modal-huespedes').textContent = data.guests;
    document.getElementById('modal-checkin').textContent = checkinDate;
    document.getElementById('modal-checkout').textContent = checkoutDate;
    
    // Show modal
    overlay.style.display = 'flex';
}

function goToHome() {
    // Redirect to home
    window.location.href = 'index.html';
}

// Close modal when clicking outside of it
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay-confirmacion');
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                overlay.style.display = 'none';
            }
        });
    }
});
