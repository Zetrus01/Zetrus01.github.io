// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    const timeline = gsap.timeline({ paused: true, reversed: true }), // Use gsap.timeline
          $circle = document.querySelector(".circle"),
          $stick = document.querySelector(".stick"),
          $close = document.querySelector(".close"),
          $searchField = document.querySelector(".field"),
          transitionSpeed = 0.5;

    // Animation timeline
    timeline.to($circle, transitionSpeed, {
        className: "+=active"
    }, 0)
    .to($stick, transitionSpeed, {
        className: "+=active"
    }, 0)
    .to($searchField, transitionSpeed, {
        width: "200px", // Expand the width of the input field
        opacity: 1,
        display: "block"
    }, 0)
    .to($close, 0.2, {
        display: "block",
        opacity: 1,
        zIndex: 3
    });

    // Click event handler for the circle
    $circle.addEventListener("click", function() {
        if (timeline.reversed()) {
            timeline.play();
        } else {
            timeline.reverse();
        }
    });

    // Click event handler for the close button
    $close.addEventListener("click", function() {
        timeline.reverse();
    });
});


