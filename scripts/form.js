const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const productSelect = document.querySelector("#product-name");

if (productSelect) {
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id; // Using array object id for option value attribute
    option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1); // Capitalize display name
    productSelect.appendChild(option);
  });
}

const counterDisplay = document.querySelector("#review-counter");

if (counterDisplay) {
 
  let reviewCount = Number(window.localStorage.getItem("reviewCount-ls")) || 0;

  reviewCount++;
  
  window.localStorage.setItem("reviewCount-ls", reviewCount);
 
  counterDisplay.textContent = reviewCount;
}

const currentYearEl = document.querySelector("#currentyear");
const lastModifiedEl = document.querySelector("#lastModified");

if (currentYearEl) {
  currentYearEl.textContent = new Date().getFullYear();
}

if (lastModifiedEl) {
  lastModifiedEl.textContent = `Last Modification: ${document.lastModified}`;
}