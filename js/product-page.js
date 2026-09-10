document.addEventListener("DOMContentLoaded", () => {
  const detailBox = document.querySelector("#product-detail");
  if (!detailBox) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const product = Array.isArray(PRODUCTS_DATA)
    ? PRODUCTS_DATA.find((item) => item.slug === slug)
    : null;

  if (!product) {
    detailBox.innerHTML = `
      <div class="product-not-found">
        <h1>Product not found</h1>
        <p>Sorry, we couldn't find that product.</p>
        <a class="btn-secondary" href="index.html">Back to Home</a>
      </div>
    `;
    return;
  }

  document.title = `${product.name} — Halal Food`;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.content = product.shortDescription;

  const breadcrumb = document.querySelector("#product-breadcrumb");
  if (breadcrumb) {
    breadcrumb.innerHTML = `
      <a href="index.html">Home</a> &gt;
      <a href="index.html#categories">Categories</a> &gt;
      <a href="categories/${product.categorySlug}.html">${product.category}</a> &gt;
      ${product.name}
    `;
  }

  const orderUrl = `order.html?product=${encodeURIComponent(product.name)}`;
  const message = encodeURIComponent(`আমি ${product.name} অর্ডার করতে চাই`);
  const whatsappUrl = `https://wa.me/8801842031164?text=${message}`;

  detailBox.innerHTML = `
    <div class="product-detail-grid">
      <div class="product-detail-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-detail-info">
        <span class="tag">${product.category}</span>
        <h1>${product.name}</h1>
        <p class="product-detail-price">${product.price}</p>
        <div class="product-detail-actions">
          <a class="btn-primary" href="${orderUrl}">Order Now</a>
          <a class="btn-secondary" href="${whatsappUrl}" target="_blank" rel="noopener">Message Us</a>
          <a class="btn-secondary" href="tel:+8801842031164">Call Us</a>
        </div>
        <div class="product-detail-description">
          <h2>Description</h2>
          <!-- Replace the placeholder full description below with the real product details later. -->
          <p>${product.fullDescription}</p>
          <p>This is placeholder product-detail content. Replace it later with your real product information while keeping the product name, price, and image filename unchanged.</p>
        </div>
      </div>
    </div>
  `;

  const related = PRODUCTS_DATA
    .filter((item) => item.categorySlug === product.categorySlug && item.slug !== product.slug)
    .slice(0, 3);

  const relatedSection = document.querySelector("#related-section");
  const relatedGrid = document.querySelector("#related-grid");

  if (related.length && relatedSection && relatedGrid) {
    relatedGrid.innerHTML = related.map((item) => {
      const url = `product.html?slug=${encodeURIComponent(item.slug)}`;
      const order = `order.html?product=${encodeURIComponent(item.name)}`;
      return `
        <article class="product-card">
          <a href="${url}" class="product-image-link">
            <div class="product-image"><img src="${item.image}" alt="${item.name}"></div>
          </a>
          <div class="product-body">
            <span class="tag">${item.category}</span>
            <a href="${url}" class="product-name-link"><h3>${item.name}</h3></a>
            <p>${item.shortDescription}</p>
            <div class="product-foot">
              <span class="price">${item.price}</span>
              <a class="order-btn" href="${order}">Order Now</a>
            </div>
          </div>
        </article>
      `;
    }).join("");
    relatedSection.style.display = "block";
  }
});
