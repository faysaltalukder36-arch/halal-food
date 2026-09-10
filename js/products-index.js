
const PRODUCTS_INDEX = [
  ["Premium Ajwa Dates","https://faysaltalukder36-arch.github.io/halal-food/products/ajwa-dates.html"],
  ["Medjool Dates","https://faysaltalukder36-arch.github.io/halal-food/products/medjool-dates.html"],
  ["Safawi Dates","https://faysaltalukder36-arch.github.io/halal-food/products/safawi-dates.html"],
  ["Date Syrup","https://faysaltalukder36-arch.github.io/halal-food/products/date-syrup.html"],
  ["Basmati Rice","https://faysaltalukder36-arch.github.io/halal-food/products/basmati-rice.html"],
  ["Chickpeas","https://faysaltalukder36-arch.github.io/halal-food/products/chickpeas.html"],
  ["Red Lentils","https://faysaltalukder36-arch.github.io/halal-food/products/red-lentils.html"],
  ["Roasted Chana","https://faysaltalukder36-arch.github.io/halal-food/products/roasted-chana.html"],
  ["Wild Forest Honey","https://faysaltalukder36-arch.github.io/halal-food/products/wild-forest-honey.html"],
  ["Black Seed Honey","https://faysaltalukder36-arch.github.io/halal-food/products/black-seed-honey.html"],
  ["Litchi Honey","https://faysaltalukder36-arch.github.io/halal-food/products/litchi-honey.html"],
  ["Mustard Flower Honey","https://faysaltalukder36-arch.github.io/halal-food/products/mustard-flower-honey.html"],
  ["Garlic & Honey Mix","https://faysaltalukder36-arch.github.io/halal-food/products/garlic-honey-mix.html"],
  ["Honey Nut Mix","https://faysaltalukder36-arch.github.io/halal-food/products/honey-nut-mix.html"],
  ["Date & Nut Mix","https://faysaltalukder36-arch.github.io/halal-food/products/date-nut-mix.html"],
  ["Dry Fruit Mix","https://faysaltalukder36-arch.github.io/halal-food/products/dry-fruit-mix.html"],
  ["Mixed Roasted Nuts","https://faysaltalukder36-arch.github.io/halal-food/products/mixed-roasted-nuts.html"],
  ["Almonds","https://faysaltalukder36-arch.github.io/halal-food/products/almonds.html"],
  ["Cashews","https://faysaltalukder36-arch.github.io/halal-food/products/cashews.html"],
  ["Pumpkin Seeds","https://faysaltalukder36-arch.github.io/halal-food/products/pumpkin-seeds.html"],
  ["House Biryani Masala","https://faysaltalukder36-arch.github.io/halal-food/products/house-biryani-masala.html"],
  ["Beef Masala","https://faysaltalukder36-arch.github.io/halal-food/products/beef-masala.html"],
  ["Chicken Masala","https://faysaltalukder36-arch.github.io/halal-food/products/chicken-masala.html"],
  ["Fish Masala","https://faysaltalukder36-arch.github.io/halal-food/products/fish-masala.html"],
  ["Classic Black Tea","https://faysaltalukder36-arch.github.io/halal-food/products/classic-black-tea.html"],
  ["Green Tea","https://faysaltalukder36-arch.github.io/halal-food/products/green-tea.html"],
  ["Ginger Tea","https://faysaltalukder36-arch.github.io/halal-food/products/ginger-tea.html"],
  ["Herbal Tea","https://faysaltalukder36-arch.github.io/halal-food/products/herbal-tea.html"],
  ["Fresh Beef Cuts","https://faysaltalukder36-arch.github.io/halal-food/products/beef-cuts.html"],
  ["Beef Boneless","https://faysaltalukder36-arch.github.io/halal-food/products/beef-boneless.html"],
  ["Beef Curry Cut","https://faysaltalukder36-arch.github.io/halal-food/products/beef-curry-cut.html"],
  ["Fresh Mutton","https://faysaltalukder36-arch.github.io/halal-food/products/fresh-mutton.html"]
];

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#product-search");
  const results = document.querySelector("#search-results");
  if (!input || !results) return;

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    results.innerHTML = "";
    if (!q) return;

    PRODUCTS_INDEX.filter(([name]) => name.toLowerCase().includes(q))
      .slice(0, 8)
      .forEach(([name, url]) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = url;
        a.textContent = name;
        li.appendChild(a);
        results.appendChild(li);
      });
  });
});
