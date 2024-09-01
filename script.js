document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Regular expressions for validation
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const pincodeRegex = /^\d{6}$/;

    // Input elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const pincode = document.getElementById('pincode');
    const checkin = document.getElementById('checkin');
    const checkout = document.getElementById('checkout');
    const guests = document.getElementById('guests');
    const room = document.getElementById('room');
    const fileUpload = document.getElementById('fileUpload');

    // Error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const pincodeError = document.getElementById('pincodeError');
    const checkinError = document.getElementById('checkinError');
    const checkoutError = document.getElementById('checkoutError');
    const guestsError = document.getElementById('guestsError');
    const roomError = document.getElementById('roomError');
    const fileUploadError = document.getElementById('fileUploadError');

    // Validation flags
    let isValid = true;

    // Name validation
    if (!nameRegex.test(name.value)) {
        nameError.textContent = 'Please enter a valid name.';
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Email validation
    if (!emailRegex.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Phone validation
    if (!phoneRegex.test(phone.value)) {
        phoneError.textContent = 'Please enter a valid 10-digit phone number.';
        phoneError.style.display = 'block';
        isValid = false;
    } else {
        phoneError.style.display = 'none';
    }

    // Pincode validation
    if (!pincodeRegex.test(pincode.value)) {
        pincodeError.textContent = 'Please enter a valid 6-digit pincode.';
        pincodeError.style.display = 'block';
        isValid = false;
    } else {
        pincodeError.style.display = 'none';
    }

    // Check-in and Check-out date validation
    if (checkin.value === '' || checkout.value === '') {
        checkinError.textContent = 'Please select both check-in and check-out dates.';
        checkinError.style.display = 'block';
        checkoutError.style.display = 'block';
        isValid = false;
    } else if (new Date(checkout.value) <= new Date(checkin.value)) {
        checkinError.textContent = 'Check-out date must be after check-in date.';
        checkinError.style.display = 'block';
        checkoutError.style.display = 'block';
        isValid = false;
    } else {
        checkinError.style.display = 'none';
        checkoutError.style.display = 'none';
    }

    // Guests validation
    if (guests.value < 1) {
        guestsError.textContent = 'Please enter a valid number of guests.';
        guestsError.style.display = 'block';
        isValid = false;
    } else {
        guestsError.style.display = 'none';
    }

    // Room type validation
    if (room.value === '') {
        roomError.textContent = 'Please select a room type.';
        roomError.style.display = 'block';
        isValid = false;
    } else {
        roomError.style.display = 'none';
    }

    // File upload validation
    if (fileUpload.files.length === 0) {
        fileUploadError.textContent = 'Please upload an ID proof.';
        fileUploadError.style.display = 'block';
        isValid = false;
    } else {
        fileUploadError.style.display = 'none';
    }

    // If form is valid
    if (isValid) {
        // Hide the form and show the success message
        document.getElementById('formContainer').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
        // Reset form
        document.getElementById('registrationForm').reset();
    }
});
