import { length } from "../elements/variables.js";


// RESIZE EVENT LISTENER
function clicking() {

  // 1. Declarations
  let highlight_status = "skills";
  // 1a. Index About Section Tags
  const index_about_highlighter = document.querySelectorAll(".icon_highlighter");
  const index_skills_text = document.querySelectorAll("span.text_gp01");
  const index_techs_text = document.querySelectorAll("span.text_gp02");

  // 2. About Section Resizing
  window.addEventListener("click", () => {
    index_about_highlighter.forEach((trigger) => {
      trigger.style.setProperty("--after-color", "#4dabf7");
      if (highlight_status === "skills") {
        trigger.setAttribute("data-highlight", "techs");
        trigger.style.setProperty("--after-color", "#fcc419");
        index_skills_text.forEach((text) => text.style.color = "#dddddd");
        index_techs_text.forEach((text) => text.style.color = "#fcc419");
        highlight_status = "techs";
      }
      else if (highlight_status === "techs") {
        trigger.setAttribute("data-highlight", "none");
        trigger.style.setProperty("--after-color", "#999999");
        index_skills_text.forEach((text) => text.style.color = "#dddddd");
        index_techs_text.forEach((text) => text.style.color = "#dddddd");
        highlight_status = "none";
      }
      else if (highlight_status === "none") {
        trigger.setAttribute("data-highlight", "skills");
        trigger.style.setProperty("--after-color", "#4dabf7");
        index_skills_text.forEach((text) => text.style.color = "#4dabf7");
        index_techs_text.forEach((text) => text.style.color = "#dddddd");
        highlight_status = "skills";
      }
    });
  });
}

// EXPORT
export { clicking };