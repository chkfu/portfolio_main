import { WINDOW_BREAKPOINT_X, SECTION_LENGTH_Y } from "../elements/variables.js";


// RESIZE EVENT LISTENER
function resizing() {

  // 1. Declarations
  let about_height_scrolled;
  // 1a. Index About Section Tags
  const index_about_fixedBox = document.getElementById("about_fixed_box");
  const index_about_scroll = document.getElementById("about_absolute_scroll");
  const inner_about_slides = document.querySelectorAll(".about_slides");


  // 2. About Section Resizing
  window.addEventListener("resize", () => {
    console.log('hi');
    // 2a. Frame position change
    if (window.innerWidth > WINDOW_BREAKPOINT_X.large) {
      index_about_fixedBox.style.left = `${WINDOW_BREAKPOINT_X.section_name}px`;
      console.log(index_about_fixedBox.style.left);
    }
    else {
      index_about_fixedBox.style.left = "0px";
      console.log(index_about_fixedBox.style.left);
    }

    // 2b. Fixed Resize Differentiation
    if (
      window.scrollY >= SECTION_LENGTH_Y.index_hero_height &&
      window.scrollY < SECTION_LENGTH_Y.index_hero_height + SECTION_LENGTH_Y.index_about_height) {
      index_about_fixedBox.style.position = "fixed";
      index_about_scroll.style.transition = `transform 1s ease-in-out`;

      // (i) width difference > 1024
      if (window.scrollY < SECTION_LENGTH_Y.index_hero_height + SECTION_LENGTH_Y.index_about_height) {
        window.innerWidth > WINDOW_BREAKPOINT_X.large ?
          index_about_scroll.style.transform = `translateX(${(window.innerWidth - 220) * 0}px)` :
          index_about_scroll.style.transform = `translateX(${window.innerWidth * 0}px)`;
      }
      else if (window.scrollY < SECTION_LENGTH_Y.index_hero_height + SECTION_LENGTH_Y.index_about_height + 768) {
        window.innerWidth > WINDOW_BREAKPOINT_X.large ?
          index_about_scroll.style.transform = `translateX(${(window.innerWidth - 220) * -1}px)` :
          index_about_scroll.style.transform = `translateX(${window.innerWidth * -1}px)`;
      }
    }
  });
}

// EXPORT
export { resizing };