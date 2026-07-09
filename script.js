/* ==========================================
   GAIA WEBSITE
   script.js
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       Back To Top Button
    ========================================== */

    const topBtn = document.getElementById("topBtn");

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

    /* ==========================================
       Explore Map Button
    ========================================== */

    const mapBtn = document.querySelector(".map-btn");

    if (mapBtn) {

        mapBtn.addEventListener("click", () => {

            document.getElementById("dashboard").scrollIntoView({

                behavior: "smooth"

            });

        });

    }

    /* ==========================================
       Hero Card Hover Effect
    ========================================== */

    const cards = document.querySelectorAll(
        ".welcome-card, .quote, .what-box"
    );

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-8px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0px)";

        });

    });

    /* ==========================================
       Scroll Reveal Animation
    ========================================== */

    const reveals = document.querySelectorAll(
        ".hero, .signature, .map-section, .description, .dashboard-section, .network-section"
    );

    function reveal() {

        const windowHeight = window.innerHeight;

        reveals.forEach(section => {

            const top = section.getBoundingClientRect().top;

            if (top < windowHeight - 100) {

                section.style.opacity = "1";

                section.style.transform = "translateY(0)";

            }

        });

    }

    reveals.forEach(section => {

        section.style.opacity = "0";

        section.style.transform = "translateY(40px)";

        section.style.transition = "all .8s ease";

    });

    reveal();

    window.addEventListener("scroll", reveal);

    /* ==========================================
       Header Shadow
    ========================================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.boxShadow = "0 6px 18px rgba(0,0,0,.12)";

        } else {

            header.style.boxShadow = "0 2px 8px rgba(0,0,0,.08)";

        }

    });

    /* ==========================================
       Image Zoom Effect
    ========================================== */

    const map = document.querySelector(".gaia-map");

    if (map) {

        map.addEventListener("mouseenter", () => {

            map.style.transform = "scale(1.02)";

        });

        map.addEventListener("mouseleave", () => {

            map.style.transform = "scale(1)";

        });

    }

    /* ==========================================
       Mobile Menu
    ========================================== */

    const menuBtn = document.querySelector(".menu-btn");

    menuBtn.addEventListener("click", () => {

        alert(
            "Navigation menu can be added here later."
        );

    });

    /* ==========================================
       Button Ripple Effect
    ========================================== */

    const buttons = document.querySelectorAll("button");

    buttons.forEach(btn => {

        btn.addEventListener("click", function (e) {

            let circle = document.createElement("span");

            let diameter = Math.max(
                this.clientWidth,
                this.clientHeight
            );

            let radius = diameter / 2;

            circle.style.width = circle.style.height =
                `${diameter}px`;

            circle.style.left =
                `${e.clientX - this.offsetLeft - radius}px`;

            circle.style.top =
                `${e.clientY - this.offsetTop - radius}px`;

            circle.classList.add("ripple");

            const ripple = this.getElementsByClassName("ripple")[0];

            if (ripple) {

                ripple.remove();

            }

            this.appendChild(circle);

        });

    });

});

/* ==========================================
   Console Welcome
==========================================*/

console.log("%cGAIA Website Loaded Successfully",
    "color:#10b9b0;font-size:18px;font-weight:bold;");