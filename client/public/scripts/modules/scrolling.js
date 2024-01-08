import { length, colors } from "../elements/variables.js";


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
  const inner_about_poster02 = document.getElementById("poster_backend");
  // 1d. Index Project Section Tags
  const index_project_container = document.getElementById("index_section_projects");


  // 2. Navigation Bar Scrolling
  window.addEventListener('scroll', () => {
    // 2a. Color Change at y=10
    if (window.scrollY < 100) {
      navbar.style.backgroundColor = "transparent";
      navbar.style.height = length.nav_expand_height;
      navbar.style.transition = "all 1s";
    }
    else {

      navbar.style.backgroundColor = colors.navbar_bg_grey;
      navbar.style.transition = "all 1s";
      // 2b. Shrinked at y=768
      if (window.scrollY < length.index_hero_height) {
        navbar.style.height = `${length.nav_expand_height}px`;
        navbar.style.fontSize = "20px";
        navitems.forEach((item) => {
          item.style.padding = "24px";
        });
      }
      else {
        navbar.style.height = `${length.nav_shrink_height}px`;
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
    if (window.scrollY <= length.index_about_top) {
      index_heading_portfolio.style.display = "flex";
      index_heading_about.style.display = "flex";
      index_heading_projects.style.display = "none";
      index_heading_contact.style.display = "none";
    }
    else if (window.scrollY > length.index_about_top && window.scrollY <= length.index_projects_top) {
      index_heading_portfolio.style.display = "none";
      index_heading_about.style.display = "flex";
      index_heading_projects.style.display = "flex";
      index_heading_contact.style.display = "none";
    }
    else if (window.scrollY > length.index_projects_top && window.scrollY <= length.index_contact_top) {
      index_heading_portfolio.style.display = "none";
      index_heading_about.style.display = "none";
      index_heading_projects.style.display = "flex";
      index_heading_contact.style.display = "flex";
    }
    else if (window.scrollY > length.index_contact_top) {
      index_heading_portfolio.style.display = "none";
      index_heading_about.style.display = "none";
      index_heading_projects.style.display = "none";
      index_heading_contact.style.display = "flex";
    }
  });


  // 4. Index About Scrolling
  window.addEventListener("scroll", () => {
    // Update Variables
    about_height_scrolled = window.scrollY - length.index_about_top;

    // 4a. About Section Parallax Sliding
    if (
      window.scrollY >= length.index_about_top &&
      window.scrollY < length.index_projects_top
    ) {
      index_about_fixedBox.style.position = "fixed";
      index_about_scroll.style.transition = `transform 1s ease-in-out`;

      // (i) width difference > 1024
      if (window.innerWidth > length.breakpoint_large) {
        index_about_fixedBox.style.transition = "none";
        index_about_fixedBox.style.left = `${length.overlays_width}px`;
        // (ia) scroll setting for slides
        if (
          about_height_scrolled >= 0 &&
          about_height_scrolled < length.index_about_height * 1 / (inner_about_slides.length + 1
          )) {
          index_about_scroll.style.transform = `translateX(${window.innerWidth * 0}px)`;
        }
        else if (
          about_height_scrolled >= length.index_about_height * 1 / (inner_about_slides.length + 1) &&
          about_height_scrolled < length.index_about_height * 2 / (inner_about_slides.length + 1)
        ) {
          index_about_scroll.style.transform = `translateX(${(window.innerWidth - length.overlays_width) * -1}px)`;
        }
      }

      // (ii) width difference < 1024
      else {
        index_about_fixedBox.style.left = "0px";
        // (iia) scroll setting for slides
        if (
          about_height_scrolled >= 0 &&
          about_height_scrolled < length.index_about_height * 1 / (inner_about_slides.length + 1)
        ) {
          index_about_scroll.style.transform = `translateX(${window.innerWidth * 0}px)`;
        }
        else if (
          about_height_scrolled >= length.index_about_height * 1 / (inner_about_slides.length + 1) &&
          about_height_scrolled < length.index_about_height * 2 / (inner_about_slides.length + 1)
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


  // 5. Index Projects Scrolling
  window.addEventListener("scroll", () => {
    if (index_project_container.getBoundingClientRect().y <= 768 + 40 && window.innerWidth >= 1024) {
      inner_about_poster02.style.transition = "all 0.5s";
      inner_about_poster02.style.transform = `translateX(-${length.overlays_width}px) `;
    }
    else {
      inner_about_poster02.style.transition = "all 0.5s";
      inner_about_poster02.style.transform = `translateX(0px) `;
    }
  });

};


// EXPORT
export { scrolling };