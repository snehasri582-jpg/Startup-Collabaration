// ================= FAQ TOGGLE =================
function toggleFaq(element) {
  const faqItem = element.parentElement;
  
  // Close other open FAQs
  document.querySelectorAll(".faq-item").forEach(item => {
    if (item !== faqItem) {
      item.classList.remove("active");
    }
  });
  
  // Toggle current FAQ
  faqItem.classList.toggle("active");
}

// ================= NAV ACTIVE =================
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage || (currentPage === "" && link.getAttribute("href") === "index.html")) {
      link.classList.add("active");
    }
  });
});

console.log("FAQ Page Loaded");
