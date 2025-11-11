// Smooth fade-in for founder section
document.addEventListener("DOMContentLoaded", () => {
  const founderSection = document.querySelector(".founder-section");
  founderSection.style.opacity = 0;
  founderSection.style.transform = "translateY(60px)";

  setTimeout(() => {
    founderSection.style.transition = "opacity 1s ease, transform 1s ease";
    founderSection.style.opacity = 1;
    founderSection.style.transform = "translateY(0)";
  }, 400);
});

// Highlight animations for list items
document.querySelectorAll(".founder-highlights li").forEach(item => {
  item.addEventListener("mouseenter", () => {
    item.style.color = "#d62828";
    item.style.transform = "translateX(5px)";
    item.style.transition = "all 0.3s ease";
  });

  item.addEventListener("mouseleave", () => {
    item.style.color = "#222";
    item.style.transform = "translateX(0)";
  });
});

// Typing effect for founder quote
const quote = document.querySelector(".founder-quote");
if (quote) {
  const text = quote.textContent;
  quote.textContent = "";
  let index = 0;

  const typing = () => {
    if (index < text.length) {
      quote.textContent += text[index];
      index++;
      setTimeout(typing, 35);
    }
  };

  setTimeout(typing, 800);
}

// Contact form submission simulation
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const status = document.getElementById("formStatus");
  status.textContent = "Sending message...";
  status.style.color = "#555";

  setTimeout(() => {
    status.textContent = "✅ Message sent successfully!";
    status.style.color = "green";
  }, 1500);
});