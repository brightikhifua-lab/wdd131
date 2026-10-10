const courses = [
  {
    id: "fe-101",
    title: "Responsive Web Design Foundations",
    category: "frontend",
    duration: "4 Weeks",
    level: "Beginner",
    description: "Master HTML5, CSS Grid, Flexbox, and responsive design principles."
  },
  {
    id: "fe-201",
    title: "Dynamic JavaScript & DOM Manipulation",
    category: "frontend",
    duration: "6 Weeks",
    level: "Intermediate",
    description: "Learn async operations, DOM events, array methods, and local storage."
  },
  {
    id: "be-101",
    title: "Node.js & Express API Development",
    category: "backend",
    duration: "6 Weeks",
    level: "Intermediate",
    description: "Build secure RESTful APIs, manage servers, and handle authentication."
  },
  {
    id: "fs-301",
    title: "Fullstack Web Engineering Bootcamp",
    category: "fullstack",
    duration: "12 Weeks",
    level: "Advanced",
    description: "Combine frontend interfaces with scalable backend databases."
  }
];

function setupNavigation() {
  const hamburger = document.querySelector("#hamburger");
  const navLinks = document.querySelector("#primary-nav");
  
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }
}

function displayCourses(courseList) {
  const container = document.querySelector("#courses-container");
  if (!container) return;

  container.innerHTML = ""; 

  courseList.forEach((course) => {
    const cardHTML = `
      <article class="course-card">
        <span class="badge">${course.level} | ${course.duration}</span>
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <button class="action-btn" onclick="savePathway('${course.id}')">Save Pathway</button>
      </article>
    `;
    container.innerHTML += cardHTML;
  });
}

function setupFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");

      const category = e.target.dataset.category;
      if (category === "all") {
        displayCourses(courses);
      } else {
        const filtered = courses.filter((c) => c.category === category);
        displayCourses(filtered);
      }
    });
  });
}

window.savePathway = function (courseId) {
  let saved = JSON.parse(localStorage.getItem("savedPathways-ls")) || [];
  
  if (!saved.includes(courseId)) {
    saved.push(courseId);
    localStorage.setItem("savedPathways-ls", JSON.stringify(saved));
    alert("Pathway saved to your bookmarks!");
    renderSavedPathways();
  } else {
    alert("Pathway is already saved.");
  }
};

function renderSavedPathways() {
  const savedContainer = document.querySelector("#saved-container");
  if (!savedContainer) return;

  const savedIds = JSON.parse(localStorage.getItem("savedPathways-ls")) || [];
  const savedCourses = courses.filter((c) => savedIds.includes(c.id));

  if (savedCourses.length === 0) {
    savedContainer.innerHTML = `<p class="empty-msg">No saved pathways yet. Click "Save Pathway" on any course to bookmark it!</p>`;
    return;
  }

  savedContainer.innerHTML = "";
  savedCourses.forEach((course) => {
    const cardHTML = `
      <article class="course-card">
        <span class="badge">${course.level}</span>
        <h3>${course.title}</h3>
        <p>${course.description}</p>
      </article>
    `;
    savedContainer.innerHTML += cardHTML;
  });
}

function setupFooter() {
  const currentYearEl = document.querySelector("#currentyear");
  const lastModifiedEl = document.querySelector("#lastModified");

  if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();
  if (lastModifiedEl) lastModifiedEl.textContent = `Last Modification: ${document.lastModified}`;
}

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  displayCourses(courses);
  setupFilters();
  renderSavedPathways();
  setupFooter();
});