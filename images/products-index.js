
const PRODUCTS_INDEX = [
  ["Premium Ajwa Dates","categories/dates.html"],
  ["Medjool Dates","categories/dates.html"],
  ["Safawi Dates","categories/dates.html"],
  ["Date Syrup","categories/dates.html"],
  ["Basmati Rice","categories/dry-food.html"],
  ["Chickpeas","categories/dry-food.html"],
  ["Red Lentils","categories/dry-food.html"],
  ["Roasted Chana","categories/dry-food.html"],
  ["Wild Forest Honey","categories/honey.html"],
  ["Black Seed Honey","categories/honey.html"],
  ["Litchi Honey","categories/honey.html"],
  ["Mustard Flower Honey","categories/honey.html"],
  ["Garlic & Honey Mix","categories/mix-food.html"],
  ["Honey Nut Mix","categories/mix-food.html"],
  ["Date & Nut Mix","categories/mix-food.html"],
  ["Dry Fruit Mix","categories/mix-food.html"],
  ["Mixed Roasted Nuts","categories/nuts-seeds.html"],
  ["Almonds","categories/nuts-seeds.html"],
  ["Cashews","categories/nuts-seeds.html"],
  ["Pumpkin Seeds","categories/nuts-seeds.html"],
  ["House Biryani Masala","categories/special-masala.html"],
  ["Beef Masala","categories/special-masala.html"],
  ["Chicken Masala","categories/special-masala.html"],
  ["Fish Masala","categories/special-masala.html"],
  ["Classic Black Tea","categories/tea.html"],
  ["Green Tea","categories/tea.html"],
  ["Ginger Tea","categories/tea.html"],
  ["Herbal Tea","categories/tea.html"],
  ["Fresh Beef Cuts","categories/fresh-meat.html"],
  ["Beef Boneless","categories/fresh-meat.html"],
  ["Beef Curry Cut","categories/fresh-meat.html"],
  ["Fresh Mutton","categories/fresh-meat.html"]
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
