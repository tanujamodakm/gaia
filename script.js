document.addEventListener("DOMContentLoaded", () => {
    const topBtn = document.getElementById("topBtn");
    if (topBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                topBtn.classList.add("show");
            } else {
                topBtn.classList.remove("show");
            }
        });

        topBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    const cards = document.querySelectorAll(
        ".welcome-card, .quote, .what-box"
    );

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-8px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });
    });

    const sections = document.querySelectorAll(
        ".hero, .map-section, .downloads, .description, .dashboard-section, .network-section, .contact-section"
    );

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(40px)";
        section.style.transition = "all .8s ease";
    });

    function revealSections() {
        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    revealSections();
    window.addEventListener("scroll", revealSections);
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.boxShadow =
                "0 8px 25px rgba(0,0,0,.12)";
        } else {
            header.style.boxShadow =
                "0 5px 18px rgba(0,0,0,.08)";
        }
    });

    const map = document.querySelector(".gaia-map");
    if (map) {
        map.addEventListener("mouseenter", () => {
            map.style.transform = "scale(1.015)";
        });
        map.addEventListener("mouseleave", () => {
            map.style.transform = "scale(1)";
        });
    }

    const buttons = document.querySelectorAll(
        ".download-btn, .contact-btn, .resource-btn"
    );

    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "translateY(-4px)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "translateY(0)";
        });
    });
});

console.log(
    "%cGAIA Website Loaded Successfully",
    "color:#11b5ae;font-size:18px;font-weight:bold;"
);
