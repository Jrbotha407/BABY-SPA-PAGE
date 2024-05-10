document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        let featuresSection = document.getElementById("features-section");
        let featuresSectionPosition = featuresSection.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;
        
        if (featuresSectionPosition < screenHeight * 0.75) {
            featuresSection.style.opacity = "1";
            featuresSection.style.transform = "translateY(0)";
        }
    });
});
