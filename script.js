

/* --- Change Coffee images --- */

document.addEventListener("DOMContentLoaded", () => {
    // Select all images in the 'our-coffees' section
    const coffeeImages = document.querySelectorAll(".coffees-pictures");

    // Add click event listener to each image
    coffeeImages.forEach((image) => {
        image.addEventListener("click", () => {
            // Get the current `src` of the image
            const currentSrc = image.src;

            // Check if the image is already "clicked"
            if (currentSrc.includes("CLICKED")) {
                // Replace '.CLICKED.png' with '.png' to revert to the original image
                image.src = currentSrc.replace(".CLICKED.png", ".png");
            } else {
                // Add '.CLICKED' before the file extension to switch to clicked image
                image.src = currentSrc.replace(".png", ".CLICKED.png");
            }
        });
    });
});


