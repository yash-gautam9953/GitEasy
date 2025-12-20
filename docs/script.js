// Particles.js configuration
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#00d4ff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00d4ff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all feature cards, download cards, etc.
document
  .querySelectorAll(".feature-card, .download-card, .comparison-card, .step")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// Download button click tracking (optional - for analytics)
document.querySelectorAll(".btn[download]").forEach((btn) => {
  btn.addEventListener("click", function () {
    const filename = this.getAttribute("href").split("/").pop();
    console.log("Download started:", filename);
    // You can add analytics tracking here
    // Example: gtag('event', 'download', { 'file_name': filename });
  });
});

// Add typing animation to terminal
const terminalOutput = document.querySelector(".terminal .output");
if (terminalOutput) {
  const lines = terminalOutput.querySelectorAll("p");
  let delay = 0;

  lines.forEach((line, index) => {
    line.style.opacity = "0";
    setTimeout(() => {
      line.style.transition = "opacity 0.3s ease";
      line.style.opacity = "1";
    }, delay);
    delay += 200;
  });
}

// Header background on scroll
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    header.style.background = "rgba(10, 10, 15, 0.98)";
    header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.5)";
  } else {
    header.style.background = "rgba(10, 10, 15, 0.95)";
    header.style.boxShadow = "none";
  }

  lastScroll = currentScroll;
});

// Copy code snippets
document.querySelectorAll("code").forEach((code) => {
  code.style.cursor = "pointer";
  code.title = "Click to copy";

  code.addEventListener("click", function () {
    const text = this.textContent;
    navigator.clipboard.writeText(text).then(() => {
      // Show copied feedback
      const originalText = this.textContent;
      this.textContent = "✓ Copied!";
      this.style.background = "rgba(0, 255, 136, 0.2)";

      setTimeout(() => {
        this.textContent = originalText;
        this.style.background = "rgba(0, 212, 255, 0.1)";
      }, 2000);
    });
  });
});

// Mobile menu toggle (if needed in the future)
const createMobileMenu = () => {
  const nav = document.querySelector(".nav-links");
  const menuBtn = document.createElement("button");
  menuBtn.className = "mobile-menu-btn";
  menuBtn.innerHTML = "☰";
  menuBtn.style.display = "none";

  if (window.innerWidth <= 768) {
    menuBtn.style.display = "block";
    document.querySelector("nav").insertBefore(menuBtn, nav);

    menuBtn.addEventListener("click", () => {
      nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    });
  }
};

window.addEventListener("resize", createMobileMenu);
createMobileMenu();

// Easter egg - Konami code
let konamiCode = [];
const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

document.addEventListener("keydown", (e) => {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);

  if (konamiCode.join("") === konamiSequence.join("")) {
    document.body.style.animation = "rainbow 3s infinite";
    setTimeout(() => {
      document.body.style.animation = "";
    }, 10000);
  }
});

// Add rainbow animation for easter egg
const style = document.createElement("style");
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

console.log(
  "%c🚀 GitEasy - Made with ❤️ by Yash Gautam",
  "color: #00d4ff; font-size: 20px; font-weight: bold;"
);
console.log(
  "%cWant to contribute? https://github.com/yash-gautam9953/GIT-AUTOMATION-TOOL",
  "color: #7928ca; font-size: 14px;"
);
