// function successfull() {
//     alert("Account Created Successfully!");
// }

// To show a Pop-up
function showPopup() {
    let popup = document.getElementById("popup");
    let popupBox = document.getElementById("popupBox");

    popup.style.display = "flex";  // Show the overlay
    setTimeout(() => {
        popupBox.classList.add("popup-active"); // Start animation
    }, 10); // Small delay to trigger transition
}

function closePopup() {
    let popup = document.getElementById("popup");
    let popupBox = document.getElementById("popupBox");

    popupBox.classList.remove("popup-active"); // Shrink animation before hiding
    setTimeout(() => {
        popup.style.display = "none"; // Hide after animation
    }, 400); // Matches transition duration
}

window.onload = function () {
    document.getElementById("popup").style.display = "none"; // Hide the popup on load
};
  

// For toggle button 
$('#menu').click(function() {
    $('nav .navigation ul').addClass('active');
})

$('#menu-close').click(function() {
      $('nav .navigation ul').removeClass('active');
})

/*------------------ Back to top Button ----------------- */
// window.onscroll = function() {
//     var button = document.getElementById("backToTop");
//     if (document.documentElement.scrollTop > 3000) {
//         button.style.display = "block"; // Show when scrolled down
//     } else {
//         button.style.display = "none"; // Hide when at the top
//     }
// };

// function scrollToTop() {
//     window.scrollTo({ top: 0, behavior: "smooth" });
// }

/* OR for taking value of : scroll > value */


//  For & Tablet & Mobile
// Default scroll threshold
// var scrollThreshold = 500; // Fallback default

// // Allow each page to set its own scroll threshold
// if (typeof customScrollThreshold !== "undefined") {
//     scrollThreshold = customScrollThreshold;
// }

// // Detect screen width and adjust the threshold accordingly, 
// // but only if the HTML page did not explicitly set it
// if (window.innerWidth <= 768 && typeof customScrollThreshold === "undefined") {
//     // Tablet view
//     scrollThreshold = 300;
// }
// if (window.innerWidth <= 480 && typeof customScrollThreshold === "undefined") {
//     // Mobile view
//     scrollThreshold = 200;
// }

// // Show/hide the button based on scroll position
// window.onscroll = function() {
//     var button = document.getElementById("backToTop");
//     if (document.documentElement.scrollTop > scrollThreshold) {
//         button.style.display = "block";
//     } else {
//         button.style.display = "none";
//     }
// };

// function scrollToTop() {
//     window.scrollTo({ top: 0, behavior: "smooth" });
// }


// OR : Wihout Defining the scroll limit dial. ect whenever the footer reach, it will directly show the back to top Button

document.addEventListener("DOMContentLoaded", function () {
    var backToTopButton = document.getElementById("backToTop");
    var footer = document.getElementById("footer");

    // Hide button initially
    backToTopButton.style.display = "none";

    // Create an Intersection Observer to detect when footer is visible
    var observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
            backToTopButton.style.display = "block"; // Show button when footer is in view
        } else {
            backToTopButton.style.display = "none"; // Hide button when footer is out of view
        }
    }, { threshold: 0.1 }); // Trigger when at least 10% of footer is visible

    // Observe the footer
    observer.observe(footer);
});

// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}


