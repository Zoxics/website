
// Scroll function for the "Enter dossier" button
function scrollToSection() {
    const targetSection = document.getElementById('target-section');
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Jukebox scroll functionality
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".jukebox-container");
    const track = document.querySelector(".jukebox-track");

    if (container && track) {
        container.addEventListener("mousemove", (e) => {
            const rect = container.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const percent = mouseX / rect.width;
            const maxScroll = track.scrollWidth - container.clientWidth;
            const scrollX = maxScroll * percent;

            container.scrollLeft = scrollX;
        });
    }
});
