window.onload = () => {
    document.body.style.animation = "fadeIn 1s ease-out forwards"; // Trigger fade-in animation on body load

    // Optionally, you can add more interactive animations like scaling or fading in elements gradually
    let elements = document.querySelectorAll('header, section, footer');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.3}s`; // Stagger the animation by delay for smooth entry
    });
};
