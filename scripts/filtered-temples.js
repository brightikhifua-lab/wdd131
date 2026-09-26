// Temple objects array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Additional Temples added below
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple5.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2500x1660.jpg"
  },
  {
    templeName: "Bern Switzerland",
    location: "Zollikofen, Switzerland",
    dedicated: "1955, September, 11",
    area: 35500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-653070-wallpaper.jpg"
  }
];

// Target container
const container = document.querySelector("#temple-cards");
const pageHeading = document.querySelector("main h2");

// Function to render temple cards
function renderTemples(filteredTemples) {
  container.innerHTML = "";
  filteredTemples.forEach((temple) => {
    const card = document.createElement("figure");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><span class="label">Location:</span> ${temple.location}</p>
      <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
      <p><span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="400" height="250">
    `;

    container.appendChild(card);
  });
}

// Initial display (Home)
renderTemples(temples);

// Navigation filtering
document.querySelector("#home").addEventListener("click", (e) => {
  e.preventDefault();
  pageHeading.textContent = "Home";
  renderTemples(temples);
});

document.querySelector("#old").addEventListener("click", (e) => {
  e.preventDefault();
  pageHeading.textContent = "Old Temples (Built before 1900)";
  const oldTemples = temples.filter((t) => {
    const year = parseInt(t.dedicated.split(",")[0]);
    return year < 1900;
  });
  renderTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", (e) => {
  e.preventDefault();
  pageHeading.textContent = "New Temples (Built after 2000)";
  const newTemples = temples.filter((t) => {
    const year = parseInt(t.dedicated.split(",")[0]);
    return year > 2000;
  });
  renderTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", (e) => {
  e.preventDefault();
  pageHeading.textContent = "Large Temples (Larger than 90,000 sq ft)";
  const largeTemples = temples.filter((t) => t.area > 90000);
  renderTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", (e) => {
  e.preventDefault();
  pageHeading.textContent = "Small Temples (Smaller than 10,000 sq ft)";
  const smallTemples = temples.filter((t) => t.area < 10000);
  renderTemples(smallTemples);
});

// Footer Dates
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;