import { length } from "../elements/variables.js";


// RESIZE EVENT LISTENER
function clicking() {

  // 1. Declarations
  let highlight_status = "skills";
  // 1a. Index About Section Tags
  const index_about_highlighter = document.querySelectorAll(".icon_highlighter");
  const about_highlight_trigger_01 = document.getElementById("about_highlight_trigger01");
  const about_highlight_trigger_02 = document.getElementById("about_highlight_trigger02");
  const index_skills_text = document.querySelectorAll("span.text_gp01");
  const index_techs_text = document.querySelectorAll("span.text_gp02");

  // 2. About Section Resizing
  window.addEventListener("click", () => {
    index_about_highlighter.forEach(() => {
      // 2a. swapping icon text
      if (highlight_status === "skills") {
        highlight_status = "techs";
      }
      else if (highlight_status === "techs") {
        highlight_status = "none";
      }
      else if (highlight_status === "none") {
        highlight_status = "skills";
      }

      // 2b. Operating styling effects
      if (highlight_status === "skills") {
        // # Remarks: "trigger" only updated the clicked icon, another one will be skipped 
        about_highlight_trigger_01.setAttribute("data-highlight", "skills");
        about_highlight_trigger_01.style.setProperty("--after-color", "#4dabf7");
        about_highlight_trigger_02.setAttribute("data-highlight", "skills");
        about_highlight_trigger_02.style.setProperty("--after-color", "#4dabf7");
        index_skills_text.forEach((text) => text.style.color = "#4dabf7");
        index_techs_text.forEach((text) => text.style.color = "#dddddd");
      }

      else if (highlight_status === "techs") {
        about_highlight_trigger_01.setAttribute("data-highlight", "techs");
        about_highlight_trigger_01.style.setProperty("--after-color", "#fcc419");
        about_highlight_trigger_02.setAttribute("data-highlight", "techs");
        about_highlight_trigger_02.style.setProperty("--after-color", "#fcc419");
        index_skills_text.forEach((text) => text.style.color = "#dddddd");
        index_techs_text.forEach((text) => text.style.color = "#fcc419");
      }
      else if (highlight_status === "none") {
        about_highlight_trigger_01.setAttribute("data-highlight", "none");
        about_highlight_trigger_01.style.setProperty("--after-color", "#dddddd");
        about_highlight_trigger_02.setAttribute("data-highlight", "none");
        about_highlight_trigger_02.style.setProperty("--after-color", "#dddddd");
        index_skills_text.forEach((text) => text.style.color = "#dddddd");
        index_techs_text.forEach((text) => text.style.color = "#dddddd");
      }
    });
  });
}

// EXPORT
export { clicking };