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


    // 2a. Fixed Resize Differentiation
    // (1) less than about section
    if (window.scrollY < length.index_about_top && window.innerWidth >= length.breakpoint_large) {
      index_about_fixedBox.style.transform = "translateX(-220px)";
    }
    else if (window.scrollY < length.index_about_top && window.innerWidth < length.breakpoint_large) {
      index_about_fixedBox.style.transform = "translateX(0px)";
    }
    // (2) within about section
    if (window.scrollY >= length.index_about_top && window.scrollY < length.index_projects_top) {
      index_about_fixedBox.style.position = "fixed";
      index_about_scroll.style.transition = `transform 1s ease-in-out`;
    }


  });

}

// EXPORT
export { resizing };