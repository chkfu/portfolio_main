import { length } from "../elements/variables.js";


// RESIZE EVENT LISTENER
function resizing() {

  // 1. Declarations
  // 1a. Index About Section Tags
  const index_about_fixedBox = document.getElementById("about_fixed_box");

  // 2. About Section Resizing
  window.addEventListener("resize", () => {
    // 2a. Frame position change
    /* 
      Remarks: 
      - "index_about_fixedBox.style.left" avoid overlapping with underlay background
      - Adjusting inner_about_scroll to specific length will lead to mis-positioning, after resizing
      - BEST SOLUTION: Overlapping now only exist between hero and about sections, can be solved by scrolling
    */
    if (window.innerWidth > length.breakpoint_large) {
      index_about_fixedBox.style.left = `${length.overlays_width}px`;
      console.log(index_about_fixedBox.style.left);
    }
    else {
      index_about_fixedBox.style.left = "0px";
      console.log(index_about_fixedBox.style.left);
    }
  });
}

// EXPORT
export { resizing };