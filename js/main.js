
// Google Apps Script Web App URL: paste your deployed URL between the quotes.
const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxRSL_vllPXEwa61UMiza9WbvLZ7U6FQvgMcwuy4t72xml3qChRA_G_EynAyA0_sW4x4Q/exec";

function whatsappLink(productName = "") {
  const message = productName
    ? `আমি ${productName} অর্ডার করতে চাই`
    : "আমি Halal Food থেকে অর্ডার করতে চাই";
  return `https://wa.me/8801842031164?text=${encodeURIComponent(message)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    link.href = whatsappLink(link.dataset.whatsapp || "");
    link.target = "_blank";
    link.rel = "noopener";
  });

  const toggle = document.querySelector(".search-toggle");
  const box = document.querySelector(".search-box");
  if (toggle && box) {
    toggle.addEventListener("click", () => {
      box.classList.toggle("open");
      if (box.classList.contains("open")) box.querySelector("input")?.focus();
    });
  }

  const params = new URLSearchParams(window.location.search);
  const productInput = document.querySelector("#product");
  if (productInput && params.get("product")) {
    productInput.value = params.get("product");
  }

  const form = document.querySelector("#order-form");
  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const success = document.querySelector("#form-success");
      const error = document.querySelector("#form-error");
      success.style.display = "none";
      error.style.display = "none";

      const submit = form.querySelector("button[type='submit']");
      submit.disabled = true;
      submit.textContent = "Sending...";

      const data = Object.fromEntries(new FormData(form).entries());

      try {
        if (!GOOGLE_APPS_SCRIPT_URL || GOOGLE_APPS_SCRIPT_URL.includes("PASTE_YOUR")) {
          throw new Error("Google Apps Script URL is not configured yet.");
        }
        await fetch(GOOGLE_APPS_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(data)
        });
        form.reset();
        success.style.display = "block";
      } catch (err) {
        error.textContent = "অর্ডার পাঠানো যায়নি। অনুগ্রহ করে সরাসরি যোগাযোগ করুন।";
        error.style.display = "block";
      } finally {
        submit.disabled = false;
        submit.textContent = "Submit Order";
      }
    });
  }
});
// Site favicon
(function () {
  const favicon = document.createElement("link");
  favicon.rel = "icon";
  favicon.type = "image/png";

  const siteRoot = "/halal-food/";
  favicon.href = siteRoot + "images/favicon.png";

  document.head.appendChild(favicon);
})();
