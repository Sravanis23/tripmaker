function filterCategory(category) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterDestinations() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function submitForm(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get the success message element
    const successMessage = document.getElementById("successMessage");

    // Show the success message
    successMessage.classList.add("show");

    // Optionally, reset the form
    document.getElementById("contactForm").reset();

    // Hide the message after a few seconds (optional)
    setTimeout(() => {
        successMessage.classList.remove("show");
    }, 3000); // 3 seconds
}
