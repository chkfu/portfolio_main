import { WINDOW_BREAKPOINT_X, SECTION_LENGTH_Y } from "../elements/variables.js";


// SCROLL EVENT LISTENER
function scrolling() {

  // 1. Declarations
  let about_height_scrolled;
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
  const inner_about_slides = document.querySelectorAll(".about_slides");


  // 2. Navigation Bar Scrolling
  window.addEventListener('scroll', () => {
    // 2a. Color Change at y=10
    if (window.scrollY < 100) {
      navbar.style.backgroundColor = "transparent";
      navbar.style.height = SECTION_LENGTH_Y.nav_expand_height;
      navbar.style.transition = "all 1s";
    }
    else {

      navbar.style.backgroundColor = "#111111";
      navbar.style.transition = "all 1s";
      // 2b. Shrinked at y=768
      if (window.scrollY < SECTION_LENGTH_Y.index_hero_height) {
        navbar.style.height = `${SECTION_LENGTH_Y.nav_expand_height}px`;
        navbar.style.fontSize = "20px";
        navitems.forEach((item) => {
          item.style.padding = "24px";
        });
      }
      else {
        navbar.style.height = `${SECTION_LENGTH_Y.nav_shrink_height}px`;
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
    else if (window.scrollY > 768 && window.scrollY <= 768 * 6) {
      index_heading_portfolio.style.display = "none";
      index_heading_about.style.display = "flex";
      index_heading_projects.style.display = "flex";
      index_heading_contact.style.display = "none";
    }
    else if (window.scrollY > 768 * 6 && window.scrollY <= 768 * 7) {
      index_heading_portfolio.style.display = "none";
      index_heading_about.style.display = "none";
      index_heading_projects.style.display = "flex";
      index_heading_contact.style.display = "flex";
    }
    else if (window.scrollY > 768 * 7) {
      index_heading_portfolio.style.display = "none";
      index_heading_about.style.display = "none";
      index_heading_projects.style.display = "none";
      index_heading_contact.style.display = "flex";
    }
  });


  // 4. Index About Scrolling
  window.addEventListener("scroll", () => {
    // Update Variables
    about_height_scrolled = window.scrollY - SECTION_LENGTH_Y.index_hero_height;

    // 4a. About Section Parallax Sliding
    if (window.scrollY >= SECTION_LENGTH_Y.index_hero_height && window.scrollY < SECTION_LENGTH_Y.index_hero_height + SECTION_LENGTH_Y.index_about_height) {
      index_about_fixedBox.style.position = "fixed";
      index_about_scroll.style.transition = `transform 1s ease-in-out`;

      // (i) width difference > 1024
      if (window.innerWidth > WINDOW_BREAKPOINT_X.large) {
        index_about_fixedBox.style.transition = "none";
        index_about_fixedBox.style.left = `${WINDOW_BREAKPOINT_X.section_name}px`;
        if (about_height_scrolled >= 0 && about_height_scrolled < SECTION_LENGTH_Y.index_about_height * 1 / inner_about_slides.length) {
          index_about_scroll.style.transform = `translateX(${window.innerWidth * 0}px)`;
        }
        else if (about_height_scrolled >= SECTION_LENGTH_Y.index_about_height * 1 / inner_about_slides.length && about_height_scrolled < SECTION_LENGTH_Y.index_about_height * 2 / inner_about_slides.length) {
          index_about_scroll.style.transform = `translateX(${(window.innerWidth - 220) * -1}px)`;
        }
      }
      else {
        index_about_fixedBox.style.left = "0px";
        if (
          about_height_scrolled >= 0 &&
          about_height_scrolled < SECTION_LENGTH_Y.index_about_height * 1 / inner_about_slides.length
        ) {
          index_about_scroll.style.transform = `translateX(${window.innerWidth * 0}px)`;
        }
        else if (
          about_height_scrolled >= SECTION_LENGTH_Y.index_about_height * 1 / inner_about_slides.length &&
          about_height_scrolled < SECTION_LENGTH_Y.index_about_height * 2 / inner_about_slides.length
        ) {
          index_about_scroll.style.transform = `translateX(${window.innerWidth * -1}px)`;
        }
      }

    }

    // (ii) width difference < 1024
    else {
      index_about_fixedBox.style.position = "absolute";
      index_about_fixedBox.style.left = "0px";
    }

  });
};


// EXPORT
export { scrolling };