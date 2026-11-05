// ===== TYPING ANIMATION =====
const texts = [
    "Software Engineering Student",
    "Network Enthusiast",
    "Web Developer",
    "Cybersecurity Learner"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById("typing");

function type() {
    const current = texts[textIndex];

    if (isDeleting) {
        typingEl.textContent = current.slice(0, charIndex--);
    } else {
        typingEl.textContent = current.slice(0, charIndex++);
    }

    if (!isDeleting && charIndex === current.length + 1) {
        isDeleting = true;
        setTimeout(type, 1500);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(type, isDeleting ? 60 : 100);
}

type();


// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// ===== HAMBURGER MENU =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("open");
});

// Close menu when a link is clicked
navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("open");
    });
});


// ===== BACK TO TOP BUTTON =====
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// ===== SCROLL FADE-IN ANIMATION =====
const fadeEls = document.querySelectorAll(
    ".skill-card, .project-card, .about-content, .contact-wrapper, .section-header"
);

fadeEls.forEach(el => el.classList.add("fade-in"));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeEls.forEach(el => observer.observe(el));


// ===== CONTACT FORM =====
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formStatus.textContent = "Please fill in all required fields.";
        formStatus.style.color = "#f85149";
        return;
    }

    // Simulate sending (replace with actual backend or EmailJS later)
    const btn = contactForm.querySelector("button[type='submit']");
    btn.textContent = "Sending...";
    btn.disabled = true;

    setTimeout(() => {
        formStatus.textContent = "Message sent successfully! I'll get back to you soon.";
        formStatus.style.color = "#3fb950";
        contactForm.reset();
        btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
        btn.disabled = false;
    }, 1500);
});


// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);

        if (scrollPos >= top && scrollPos < top + height) {
            document.querySelectorAll(".nav-links a").forEach(a => a.style.color = "");
            if (link) link.style.color = "#0d6efd";
        }
    });
});
