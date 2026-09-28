/* =========================
   LOADING SCREEN
========================= */

window.addEventListener("load", function () {

    setTimeout(function () {

        document
            .getElementById("loader")
            .classList.add("hide");

    }, 2200);

});


/* =========================
   TYPING EFFECT
========================= */

const words = [
    "Frontend Developer",
    "RPL Student",
    "Web Developer",
    "Creative Coder"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typingEffect() {

    const word = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            word.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === word.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;
        }

    } else {

        typing.textContent =
            word.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typingEffect,
        deleting ? 50 : 100
    );
}

typingEffect();


/* =========================
   PARTICLES
========================= */

const particles =
    document.getElementById("particles");

for (let i = 0; i < 40; i++) {

    const particle =
        document.createElement("div");

    particle.className = "particle";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (4 + Math.random() * 8) + "s";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    particle.style.opacity =
        Math.random();

    particles.appendChild(particle);
}


/* =========================
   CURSOR GLOW
========================= */

const cursorGlow =
    document.getElementById("cursorGlow");

document.addEventListener(
    "mousemove",
    function (e) {

        cursorGlow.style.left =
            e.clientX + "px";

        cursorGlow.style.top =
            e.clientY + "px";

    }
);


/* =========================
   NAVBAR SCROLL
========================= */

const navbar =
    document.getElementById("navbar");

window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }
);


/* =========================
   MOBILE MENU
========================= */

const menuButton =
    document.getElementById("menuButton");

const navMenu =
    document.getElementById("navMenu");

menuButton.addEventListener(
    "click",
    function () {

        navMenu.classList.toggle("show");

    }
);


document
    .querySelectorAll(".nav-menu a")
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navMenu.classList.remove("show");

            }
        );

    });


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach(
        function (element) {

            const position =
                element.getBoundingClientRect().top;

            if (
                position <
                window.innerHeight - 80
            ) {

                element.classList.add("show");

            }

        }
    );

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =========================
   SKILL PROGRESS
========================= */

let skillsStarted = false;

function skillAnimation() {

    const skills =
        document.getElementById("skills");

    if (!skills) return;

    const position =
        skills.getBoundingClientRect().top;

    if (
        position <
        window.innerHeight - 100 &&
        !skillsStarted
    ) {

        document
            .querySelectorAll(".progress")
            .forEach(function (bar) {

                const width =
                    bar.getAttribute("data-width");

                bar.style.width =
                    width + "%";

            });

        skillsStarted = true;

    }

}

window.addEventListener(
    "scroll",
    skillAnimation
);


/* =========================
   3D TILT
========================= */

document
    .querySelectorAll(".tilt")
    .forEach(function (card) {

        card.addEventListener(
            "mousemove",
            function (e) {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    e.clientX - rect.left;

                const y =
                    e.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    ((y - centerY) / centerY) * -5;

                const rotateY =
                    ((x - centerX) / centerX) * 5;

                card.style.transform =
                    `
                    perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-5px)
                    `;

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform =
                    "perspective(1000px) rotateX(0) rotateY(0)";

            }
        );

    });


/* =========================
   IMAGE MODAL
========================= */

function openImage(image, name) {

    const modal =
        document.getElementById("imageModal");

    const modalImage =
        document.getElementById("modalImage");

    const modalName =
        document.getElementById("modalName");

    modalImage.src = image;

    modalName.textContent = name;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeImage() {

    document
        .getElementById("imageModal")
        .classList.remove("show");

    document.body.style.overflow = "auto";

}


/* =========================
   PROJECT MODAL
========================= */

function openProject(
    title,
    image,
    description
) {

    const modal =
        document.getElementById("projectModal");

    document.getElementById(
        "projectTitle"
    ).textContent = title;

    document.getElementById(
        "projectImage"
    ).src = image;

    document.getElementById(
        "projectDescription"
    ).textContent = description;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeProject() {

    document
        .getElementById("projectModal")
        .classList.remove("show");

    document.body.style.overflow = "auto";

}


/* =========================
   CLOSE MODAL
========================= */

document.addEventListener(
    "keydown",
    function (e) {

        if (e.key === "Escape") {

            closeImage();
            closeProject();

        }

    }
);


document
    .getElementById("imageModal")
    .addEventListener(
        "click",
        function (e) {

            if (e.target === this) {
                closeImage();
            }

        }
    );


document
    .getElementById("projectModal")
    .addEventListener(
        "click",
        function (e) {

            if (e.target === this) {
                closeProject();
            }

        }
    );


/* =========================
   BACK TO TOP
========================= */

const topButton =
    document.getElementById("topButton");

window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 500) {

            topButton.classList.add("show");

        } else {

            topButton.classList.remove("show");

        }

    }
);


topButton.addEventListener(
    "click",
    function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);