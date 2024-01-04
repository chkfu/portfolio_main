function scrolling() {

  // 1. Declarations

  // 1a. Navigation Bar Tags
  const navbar = document.querySelector('nav');
  const navitems = document.querySelectorAll(".nav_items");
  // 1b. Index Hero Section Tags
  const index_heading_portfolio = document.getElementById("index_heading_portfolio");
  const index_heading_about = document.getElementById("index_heading_about");
  const index_heading_projects = document.getElementById("index_heading_projects");
  const index_heading_contact = document.getElementById("index_heading_contact");


  // 2. Navigation Bar Scrolling
  window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    // 2a. Color Change at y:10
    if (window.scrollY < 10) {
      navbar.style.backgroundColor = "transparent";
      navbar.style.transition = "all 1s";
    }
    else {
      navbar.style.backgroundColor = "#111111";
      navbar.style.transition = "all 1s";
      // 2b. Shrinked at y:769
      if (window.scrollY <= 768) {
        navbar.style.height = "80px";
        navbar.style.fontSize = "20px";

        navitems.forEach((item) => {
          item.style.padding = "24px";
        });
      }
      else {
        navbar.style.height = "40px";
        navbar.style.fontSize = "16px";
        navitems.forEach((item) => {
          item.style.padding = "8px 24px";
        });
      }
    }
  });


  // 3. Index Underlay Headings Scrolling
  window.addEventListener("scroll", () => {
    // 3a. Change Section Name
    if (window.scrollY <= 768) {
      index_heading_portfolio.style.display = "flex";
      index_heading_about.style.display = "flex";
      index_heading_projects.style.display = "none";
      index_heading_contact.style.display = "none";
    }
    else if (window.scrollY > 768 && window.scrollY <= 768 * 5) {
      index_heading_portfolio.style.display = "none";
      index_heading_about.style.display = "flex";
      index_heading_projects.style.display = "flex";
      index_heading_contact.style.display = "none";
    }
    else if (window.scrollY > 768 * 5 && window.scrollY <= 768 * 6) {
      index_heading_portfolio.style.display = "none";
      index_heading_about.style.display = "none";
      index_heading_projects.style.display = "flex";
      index_heading_contact.style.display = "flex";
    }
    else if (window.scrollY > 768 * 6 && window.scrollY <= 768 * 7) {
      index_heading_portfolio.style.display = "flex";
      index_heading_about.style.display = "none";
      index_heading_projects.style.display = "none";
      index_heading_contact.style.display = "flex";
    }
  });

};


// EXPORT

export { scrolling };

