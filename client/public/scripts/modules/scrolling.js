import { WINDOW_BREAKPOINT_X, SECTION_LENGTH_Y } from "../elements/variables";


// SCROLL EVENT LISTENER
function scrolling() {

  // 1. Declarations
  const WINDOW_BREAKPOINT_X = {
    large: 1024,
    middle: 768,
    small: 380,
    section_name: 220
  };
  const SECTION_LENGTH_Y = {
    index_hero: 768,
    index_about: 768 * 5
  };

  // 1a. Navigation Bar Tags
  const navbar = document.querySelector('nav');
  const navitems = document.querySelectorAll(".nav_items");
  // 1b. Index Hero Section Tags
  const index_heading_portfolio = document.getElementById("index_heading_portfolio");
  const index_heading_about = document.getElementById("index_heading_about");
  const index_heading_projects = document.getElementById("index_heading_projects");
  const index_heading_contact = document.getElementById("index_heading_contact");
  // 1c. Index About Section Tags
  const index_about_fixedBox = document.getElementById("about_fixed_box");
  const index_about_scroll = document.getElementById("about_absolute_scroll");


  // 2. Navigation Bar Scrolling
  window.addEventListener('scroll', () => {
    // 2a. Color Change at y=10
    if (window.scrollY < 1) {
      navbar.style.backgroundColor = "transparent";
      navbar.style.transition = "all 1s";
    }
    else {
      navbar.style.backgroundColor = "#111111";
      navbar.style.transition = "all 1s";
      // 2b. Shrinked at y=768
      if (window.scrollY <= SECTION_LENGTH_Y.index_hero) {
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


  // 3. Index Headings Scrolling
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


  // 4. Index About Scrolling
  window.addEventListener("scroll", () => {
    // 4a. About Section Parallax Sliding
    if (window.scrollY >= SECTION_LENGTH_Y.index_hero && window.scrollY < SECTION_LENGTH_Y.index_about) {
      index_about_fixedBox.style.position = "fixed";
      if (window.innerWidth > WINDOW_BREAKPOINT_X.large) {
        // ---- the frame
        index_about_fixedBox.style.transition = "none";
        index_about_fixedBox.style.left = `${WINDOW_BREAKPOINT_X.section_name}px`;
      }
      else {
        // ---- i. the frame
        index_about_fixedBox.style.left = "0px";
      }
    }
    else {
      index_about_fixedBox.style.position = "absolute";
      index_about_fixedBox.style.left = "0px";
    }

  });


};


// EXPORT
export { scrolling };