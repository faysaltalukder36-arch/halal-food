// ==========================================================================
// Central product database.
// Every product on the site is listed here once. The dynamic product.html
// page reads from this file to build the product detail page and the
// "related products" section.
//
// To add a NEW product:
//   1. Add real product images to /images/<category>/
//   2. Copy one object block below, change slug, category, name, price,
//      image and description.
//   3. Also add a matching product-card in the relevant categories/*.html
//      page (see the comment inside that file) and link it to
//      product.html?cat=<category>&slug=<slug>
//
// "slug" must be unique within its category and should match the image
// file name (without extension) for consistency.
// ==========================================================================

const PRODUCTS = [
  // ---------------- Dates ----------------
  { cat: "dates", catLabel: "Dates", slug: "ajwa-dates", name: "Premium Ajwa Dates",
    price: "৳ 850 / kg", image: "images/dates/ajwa-dates.jpg",
    description: "Placeholder description. Soft, rich Ajwa dates imported and packed fresh — replace with your real product description." },
  { cat: "dates", catLabel: "Dates", slug: "medjool-dates", name: "Medjool Dates",
    price: "৳ 900 / kg", image: "images/dates/medjool-dates.jpg",
    description: "Placeholder description. Replace with your real product description." },
  { cat: "dates", catLabel: "Dates", slug: "safawi-dates", name: "Safawi Dates",
    price: "৳ 800 / kg", image: "images/dates/safawi-dates.jpg",
    description: "Placeholder description. Replace with your real product description." },
  { cat: "dates", catLabel: "Dates", slug: "date-syrup", name: "Date Syrup",
    price: "৳ 350 / bottle", image: "images/dates/date-syrup.jpg",
    description: "Placeholder description. Replace with your real product description." },

  // ---------------- Dry Food ----------------
  { cat: "dry-food", catLabel: "Dry Food", slug: "basmati-rice", name: "Basmati Rice",
    price: "৳ 850 / kg", image: "images/dry-food/basmati-rice.jpg",
    description: "Placeholder description. Replace with your real product description." },
  { cat: "dry-food", catLabel: "Dry Food", slug: "chickpeas", name: "Chickpeas",
    price: "৳ 900 / kg", image: "images/dry-food/chickpeas.jpg",
    description: "Placeholder description. Replace with your real product description." },
  { cat: "dry-food", catLabel: "Dry Food", slug: "red-lentils", name: "Red Lentils",
    price: "৳ 800 / kg", image: "images/dry-food/red-lentils.jpg",
    description: "Placeholder description. Replace with your real product description." },
  { cat: "dry-food", catLabel: "Dry Food", slug: "roasted-chana", name: "Roasted Chana",
    price: "৳ 350 / bottle", image: "images/dry-food/roasted-chana.jpg",
    description: "Placeholder description. Replace with your real product description." },

  // ---------------- Fresh Meat ----------------
  { cat: "fresh-meat", catLabel: "Fresh Meat", slug: "beef-cuts", name: "Fresh Beef Cuts",
    price: "৳ 850 / kg", image: "images/fresh-meat/beef-cuts.jpg",
    description: "Placeholder description. Replace with your real product description." },
  { cat: "fresh-meat", catLabel: "Fresh Meat", slug: "beef-boneless", name: "Beef Boneless",
    price: "৳ 900 / kg", image: "images/fresh-meat/beef-boneless.jpg",
    description: "Placeholder description. Replace with your real product description." },
  { cat: "fresh-meat", catLabel: "Fresh Meat", slug: "beef-curry-cut", name: "Beef Curry Cut",
    price: "৳ 800 / kg", image: "images/fresh-meat/beef-curry-cut.jpg",
    description: "Placeholder description. Replace with your real product description." },
  { cat: "fresh-meat", catLabel: "Fresh Meat", slug: "fresh-mutton", name: "Fresh Mutton",
    price: "৳ 350 / bottle", image: "images/fresh-meat/fresh-mutton.jpg",
    description: "Placeholder description. Replace with your real product description." },

  // ---------------- Honey ----------------
  { cat: "honey", catLabel: "Honey", slug: "wild-forest-honey", name: "Wild Forest Honey",
    price: "৳ 850 / kg", image: "images/honey/wild-forest-honey.jpg",
    description: "Placeholder description. Raw, unprocessed honey collected from natural forest hives." },
  { cat: "honey", catLabel: "Honey", slug: "black-seed-honey", name: "Black Seed Honey",
    price: "৳ 900 / kg", image: "images/honey/black-seed-honey.jpg",
    description: "Placeholder description. Replace with your real product description." },
  { cat: "honey", catLabel: "Honey", slug: "litchi-honey", name: "Litchi Honey",
    price: "৳ 800 / kg", image: "images/honey/litchi-honey.jpg",
    description: "Placeholder description. Replace with your real product description." },
  { cat: "honey", catLabel: "Honey", slug: "mustard-flower-honey", name: "Mustard Flower Honey",
    price: "৳ 350 / bottle", image: "images/honey/mustard-flower-honey.jpg",
    description: "Placeholder description. Replace with your real product description." },

  // ---------------- Mix Food ----------------
  { cat: "mix-food", catLabel: "Mix Food", slug: "garlic-honey-mix", name: "Garlic & Honey Mix",
    price: "৳ 850 / kg", image: "images/mix-food/garlic-honey-mix.jpg",
    description: "Placeholder description. A traditional blend of aged garlic in pure honey." },
  { cat: "mix-food", catLabel: "Mix Food", slug: "honey-nut-mix", name: "Honey Nut Mix",
    price: "৳ 900 / kg", image: "images/mix-food/honey-nut-mix.jpg",
    description: "Placeholder description. Replace with your real product description." },
  { cat: "mix-food", catLabel: "Mix Food", slug: "date-nut-mix", name: "Date & Nut Mix",
    price: "৳ 800 / kg", image: "images/mix-food/date-nut-mix.jpg",
    description: "Placeholder description. Replace with your real product description." },
  { cat: "mix-food", catLabel: "Mix Food", slug: "dry-fruit-mix", name: "Dry Fruit Mix",
    price: "৳ 350 / bottle", image: "images/mix-food/dry-fruit-mix.jpg",
    description: "Placeholder description. Replace with your real product description." },

  // ---------------- Nuts & Seeds ----------------
  { cat: "nuts-seeds", catLabel: "Nuts & Seeds", slug: "mixed-roasted-nuts", name: "Mixed Roasted Nuts",
    price: "৳ 850 / kg", image: "images/nuts-seeds/mixed-roasted-nuts.jpg",
    description: "Placeholder description. Replace with your real product description." },
  { cat: "nuts-seeds", catLabel: "Nuts & Seeds", slug: "almonds", name: "Almonds",
    price: "৳ 900 / kg", image: "images/nuts-seeds/almonds.jpg",
    description: "Placeholder description. Replace with your real product description." },
  { cat: "nuts-seeds", catLabel: "Nuts & Seeds", slug: "cashews", name: "Cashews",
    price: "৳ 800 / kg", image: "images/nuts-seeds/cashews.jpg",
    description: "Placeholder description. Replace with your real product description." },
  { cat: "nuts-seeds", catLabel: "Nuts & Seeds", slug: "pumpkin-seeds", name: "Pumpkin Seeds",
    price: "৳ 350 / bottle", image: "images/nuts-seeds/pumpkin-seeds.jpg",
    description: "Placeholder description. Replace with your real product description." },

  // ---------------- Special Masala ----------------
  { cat: "special-masala", catLabel: "Special Masala", slug: "house-biryani-masala", name: "House Biryani Masala",
    price: "৳ 850 / kg", image: "images/special-masala/house-biryani-masala.jpg",
    description: "Placeholder description. Replace with your real product description." },
  { cat: "special-masala", catLabel: "Special Masala", slug: "beef-masala", name: "Beef Masala",
    price: "৳ 900 / kg", image: "images/special-masala/beef-masala.jpg",
    description: "Placeholder description. Replace with your real product description." },
  { cat: "special-masala", catLabel: "Special Masala", slug: "chicken-masala", name: "Chicken Masala",
    price: "৳ 800 / kg", image: "images/special-masala/chicken-masala.jpg",
    description: "Placeholder description. Replace with your real product description." },
  { cat: "special-masala", catLabel: "Special Masala", slug: "fish-masala", name: "Fish Masala",
    price: "৳ 350 / bottle", image: "images/special-masala/fish-masala.jpg",
    description: "Placeholder description. Replace with your real product description." },

  // ---------------- Tea ----------------
  { cat: "tea", catLabel: "Tea", slug: "classic-black-tea", name: "Classic Black Tea",
    price: "৳ 850 / kg", image: "images/tea/classic-black-tea.jpg",
    description: "Placeholder description. Replace with your real product description." },
  { cat: "tea", catLabel: "Tea", slug: "green-tea", name: "Green Tea",
    price: "৳ 900 / kg", image: "images/tea/green-tea.jpg",
    description: "Placeholder description. Replace with your real product description." },
  { cat: "tea", catLabel: "Tea", slug: "ginger-tea", name: "Ginger Tea",
    price: "৳ 800 / kg", image: "images/tea/ginger-tea.jpg",
    description: "Placeholder description. Replace with your real product description." },
  { cat: "tea", catLabel: "Tea", slug: "herbal-tea", name: "Herbal Tea",
    price: "৳ 350 / bottle", image: "images/tea/herbal-tea.jpg",
    description: "Placeholder description. Replace with your real product description." },
];

function findProduct(cat, slug) {
  return PRODUCTS.find((p) => p.cat === cat && p.slug === slug);
}

function relatedProducts(product, limit = 4) {
  const sameCategory = PRODUCTS.filter(
    (p) => p.cat === product.cat && p.slug !== product.slug
  );
  return sameCategory.slice(0, limit);
}
