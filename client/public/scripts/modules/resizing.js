import { length } from "../elements/variables.js";


// RESIZE EVENT LISTENER
function resizing() {

  // 1. Declarations
  // 1a. Index About Section Tags
  const index_about_fixedBox = document.getElementById("about_fixed_box");
  const index_about_scroll = document.getElementById("about_absolute_scroll");


  // 2. About Section Resizing
  window.addEventListener("resize", () => {
    // 2a. Frame position change
    if (window.innerWidth > length.breakpoint_large) {
      index_about_fixedBox.style.left = `${length.overlays_width}px`;
      console.log(index_about_fixedBox.style.left);
    }
    else {
      index_about_fixedBox.style.left = "0px";
      console.log(index_about_fixedBox.style.left);
    }

    // 2b. Fixed Resize Differentiation
    if (
      // (i) for the frame container
      window.scrollY >= length.index_about_top &&
      window.scrollY < length.index_projects_top
    ) {
      index_about_fixedBox.style.position = "fixed";
      index_about_scroll.style.transition = `transform 1s ease-in-out`;

      // (ii) for the slides settings
      if (window.scrollY < length.index_about_top) {
        window.innerWidth > length.breakpoint_large ?
          index_about_scroll.style.transform = `translateX(${(window.innerWidth - length.overlays_width) * 0}px)` :
          index_about_scroll.style.transform = `translateX(${window.innerWidth * 0}px)`;
      }
      else if (window.scrollY < length.index_projects_top) {
        window.innerWidth > length.breakpoint_large ?
          index_about_scroll.style.transform = `translateX(${(window.innerWidth - length.overlays_width) * -1}px)` :
          index_about_scroll.style.transform = `translateX(${window.innerWidth * -1}px)`;
      }
    }
  });
}

// EXPORT
export { resizing };