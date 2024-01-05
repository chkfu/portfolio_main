import { WINDOW_BREAKPOINT_X, SECTION_LENGTH_Y } from "../elements/variables";


// RESIZE EVENT LISTENER
function resizing() {

  // 1. Declarations
  // 1a. Index About Section Tags
  const index_about_fixedBox = document.getElementById("about_fixed_box");
  const index_about_scroll = document.getElementById("about_absolute_scroll");


  // 2. About Section Resizing
  window.addEventListener("resize", () => {
    if (window.scrollY >= SECTION_LENGTH_Y.index_hero && window.scrollY < SECTION_LENGTH_Y.index_about) {
      if (window.innerWidth > WINDOW_BREAKPOINT_X.large) {
        // the frame
        index_about_fixedBox.style.left = `${WINDOW_BREAKPOINT_X.section_name}px`;
      }
      else {
        // the frame
        index_about_fixedBox.style.left = "0px";

      }
    }


  });
}

// EXPORT
export { resizing };