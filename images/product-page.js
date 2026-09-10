document.addEventListener("DOMContentLoaded", () => {
  const detailBox = document.querySelector("#product-detail");
  if (!detailBox) return; // not on product.html

  const params = new URLSearchParams(window.location.search);
  const cat = params.get("cat");
  const slug = params.get("slug");
  const product = (cat && slug) ? findProduct(cat, slug) : null;

  if (!product) {
    detailBox.innerHTML = `
      <p>Sorry, we couldn't find that product.</p>
      <p><a class="btn-secondary" href="index.html">Back to Home</a></p>
    `;
    return;
  }

  document.title = `${product.name} — Halal Food`;

  const breadcrumb = document.querySelector("#product-breadcrumb");
  if (breadcrumb) {
    breadcrumb.innerHTML = `
      <a href="index.html">Home</a> &gt;
      <a href="index.html#categories">Categories</a> &gt;
      <a href="categories/${product.cat}.html">${product.catLabel}</a> &gt;
      ${product.name}
    `;
  }

  const orderUrl = `order.html?product=${encodeURIComponent(product.name)}`;

  detailBox.innerHTML = `
    <div class="product-detail-grid">
      <div class="product-detail-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-detail-info">
        <span class="tag">${product.catLabel}</span>
        <h1>${product.name}</h1>
        <p class="product-detail-price">${product.price}</p>
        <div class="product-detail-actions">
          <a class="btn-primary" href="${orderUrl}">Order Now</a>
          <a class="btn-secondary" href="#" data-whatsapp="${product.name}">Message Us</a>
          <a class="btn-secondary" href="tel:+8801842031164">Call Us</a>
        </div>
        <h3 class="product-detail-desc-title">Description</h3>
        <p class="product-detail-desc">${product.description}</p>
      </div>
    </div>
  `;

  // Re-run the WhatsApp link builder for the newly injected buttons,
  // since main.js already ran its DOMContentLoaded pass before this
  // content existed.
  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    if (typeof whatsappLink === "function") {
      link.href = whatsappLink(link.dataset.whatsapp || "");
      link.target = "_blank";
      link.rel = "noopener";
    }
  });

  // Related products (same category)
  const related = relatedProducts(product, 4);
  const relatedSection = document.querySelector("#related-section");
  const relatedGrid = document.querySelector("#related-grid");
  if (related.length && relatedSection && relatedGrid) {
    relatedGrid.innerHTML = related.map((p) => {
      const detailUrl = `product.html?cat=${p.cat}&slug=${p.slug}`;
      return `
      <article class="product-card">
        <a href="${detailUrl}" class="product-image-link">
          <div class="product-image"><img src="${p.image}" alt="${p.name}"></div>
        </a>
        <div class="product-body">
          <span class="tag">${p.catLabel}</span>
          <a href="${detailUrl}" class="product-name-link"><h3>${p.name}</h3></a>
          <div class="product-foot">
            <span class="price">${p.price}</span>
            <a class="order-btn" href="order.html?product=${encodeURIComponent(p.name)}">Order Now</a>
          </div>
        </div>
      </article>
    `;
    }).join("");
    relatedSection.style.display = "block";
  }
});
