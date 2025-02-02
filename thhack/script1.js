document.addEventListener("DOMContentLoaded", function () {
    // Login Form Validation
    const loginForm = document.querySelector("form");
    const loginButton = document.querySelector(".btn"); // Log in button
    const signInButton = document.querySelectorAll(".btn")[1]; // Sign in button

    // Function for form validation
    function validateForm(event) {
        const username = document.querySelector("input[name='username']").value;
        const password = document.querySelector("input[name='password']").value;

        // Basic validation
        if (!username || !password) {
            alert("Please fill in both fields.");
            event.preventDefault(); // Prevent form submission if validation fails
        }
    }

    // Attach the validation function to the login form
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            validateForm(event);
        });
    }

    // Add click event for the login button
    if (loginButton) {
        loginButton.addEventListener("click", function (event) {
            validateForm(event);
        });
    }

    // Add click event for the sign-in button (just for demo purposes)
    if (signInButton) {
        signInButton.addEventListener("click", function (event) {
            // Redirect or perform actions for sign-in
            window.location.href = "page2.html"; // This could be changed based on your needs
        });
    }

    // Navigation Buttons and Search Functionality
    const homeButton = document.getElementById("h");
    const accountButton = document.getElementById("a");
    const contactButton = document.getElementById("c");
    const searchInput = document.querySelector("input[type='text']");

    // Redirect when buttons are clicked
    if (homeButton) {
        homeButton.addEventListener("click", function () {
            window.location.href = "home.html"; // Replace with your actual Home page URL
        });
    }

    if (accountButton) {
        accountButton.addEventListener("click", function () {
            window.location.href = "account.html"; // Replace with your actual Account page URL
        });
    }

    if (contactButton) {
        contactButton.addEventListener("click", function () {
            window.location.href = "contact.html"; // Replace with your actual Contact page URL
        });
    }

    // Search functionality (basic version)
    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const query = searchInput.value.toLowerCase();
            // You can implement dynamic filtering of scholarship entries or perform an actual search request here
            const scholarshipTitles = document.querySelectorAll(".sch h2");

            scholarshipTitles.forEach(function (title) {
                const text = title.textContent.toLowerCase();
                if (text.includes(query)) {
                    title.parentElement.style.display = "block"; // Show matching entry
                } else {
                    title.parentElement.style.display = "none"; // Hide non-matching entry
                }
            });
        });
    }
});