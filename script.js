document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const sidebar = document.querySelector(".sidebar");
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    menuBtn.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    // Set the initial dark mode state to true (defaulting to dark mode)
    updateTheme(true);

    darkModeToggle.addEventListener("change", function () {
        const isDarkMode = darkModeToggle.checked;
        updateTheme(isDarkMode);
    });

    // Function to update the theme based on dark mode status
    function updateTheme(isDarkMode) {
        const body = document.body;
        const sidebar = document.querySelector(".sidebar");
        const topHeader = document.querySelector(".top-header");
        const colorDots = document.querySelector(".color-dots");
        const headerButtons = document.querySelector(".header-buttons");
        const content = document.querySelector(".content");

        if (isDarkMode) {
            body.classList.add("dark-mode");
            sidebar.classList.add("dark-mode");
            topHeader.classList.add("dark-mode");
            colorDots.classList.add("dark-mode");
            headerButtons.classList.add("dark-mode");
            content.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
            sidebar.classList.remove("dark-mode");
            topHeader.classList.remove("dark-mode");
            colorDots.classList.remove("dark-mode");
            headerButtons.classList.remove("dark-mode");
            content.classList.remove("dark-mode");
        }
    }
});




document.addEventListener("DOMContentLoaded", function() {
    const typedText = document.getElementById("typed-text");
    const words = ["web developer", "android developer"];
    let wordIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < words[wordIndex].length) {
            typedText.textContent += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100); // Adjust typing speed here
        } else {
            setTimeout(erase, 1000); // Wait before erasing
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedText.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50); // Adjust erasing speed here
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500); // Wait before typing next word
        }
    }

    // Start the typing animation
    type();
});


//function for projects row

document.addEventListener("DOMContentLoaded", function () {
    const projectContainer = document.querySelector(".project-container");

    let isMouseDown = false;
    let startX;
    let scrollLeft;

    projectContainer.addEventListener("mousedown", (e) => {
        isMouseDown = true;
        startX = e.pageX - projectContainer.offsetLeft;
        scrollLeft = projectContainer.scrollLeft;
    });

    projectContainer.addEventListener("mouseup", () => {
        isMouseDown = false;
    });

    projectContainer.addEventListener("mouseleave", () => {
        isMouseDown = false;
    });

    projectContainer.addEventListener("mousemove", (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - projectContainer.offsetLeft;
        const walk = (x - startX) * 2; // Adjust the multiplier for faster/slower scrolling
        projectContainer.scrollLeft = scrollLeft - walk;
    });
});

//for other projects
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


  //form validation

  function sendEmail() {
    // Reset error messages
    clearErrorMessages();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (!name) {
        showError("Please enter your name.", "name");
        return;
    }

    if (!isValidEmail(email)) {
        showError("Please enter a valid email address.", "email");
        return;
    }

    if (!message) {
        showError("Please enter your message.", "message");
        return;
    }

    var subject = "New message from your website";
    var body = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;

    // Continue with your email sending logic
    // For demonstration purposes, let's log the values to the console
    console.log("Subject:", subject);
    console.log("Body:", body);
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(errorMessage, fieldId) {
    var errorElement = document.createElement("div");
    errorElement.className = "error";

    var inputField = document.getElementById(fieldId);
    var parentElement = inputField.parentNode;
    parentElement.appendChild(errorElement);

    // Highlight the input field with an error style
    inputField.classList.add("error-input");
}

function clearErrorMessages() {
    var errorElements = document.getElementsByClassName("error");
    while (errorElements.length > 0) {
        errorElements[0].parentNode.removeChild(errorElements[0]);
    }

    // Remove error styles from input fields
    var errorInputs = document.getElementsByClassName("error-input");
    while (errorInputs.length > 0) {
        errorInputs[0].classList.remove("error-input");
    }
}

// Attach the sendEmail function to the form's submit event
document.getElementById("contactForm").addEventListener("submit", sendEmail);



  