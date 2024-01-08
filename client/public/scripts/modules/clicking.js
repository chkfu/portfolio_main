import { length, colors } from "../elements/variables.js";


// RESIZE EVENT LISTENER
function clicking() {

  // 1. Declarations
  let highlight_status = "techs";
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
      if (highlight_status === "techs") {
        highlight_status = "skills";
      }
      else if (highlight_status === "skills") {
        highlight_status = "none";
      }
      else if (highlight_status === "none") {
        highlight_status = "techs";
      }


      // 2b. Operating styling effects
      if (highlight_status === "skills") {
        // # Remarks: "trigger" only updated the clicked icon, another one will be skipped 
        about_highlight_trigger_01.setAttribute("data-highlight", "skills");
        about_highlight_trigger_01.style.setProperty("--after-color", colors.highlighter_blue);
        about_highlight_trigger_02.setAttribute("data-highlight", "skills");
        about_highlight_trigger_02.style.setProperty("--after-color", colors.highlighter_blue);
        index_skills_text.forEach((text) => text.style.color = colors.highlighter_blue);
        index_techs_text.forEach((text) => text.style.color = colors.highlighter_grey);
      }

      else if (highlight_status === "techs") {
        about_highlight_trigger_01.setAttribute("data-highlight", "techs");
        about_highlight_trigger_01.style.setProperty("--after-color", colors.highlighter_yellow);
        about_highlight_trigger_02.setAttribute("data-highlight", "techs");
        about_highlight_trigger_02.style.setProperty("--after-color", colors.highlighter_yellow);
        index_skills_text.forEach((text) => text.style.color = colors.highlighter_grey);
        index_techs_text.forEach((text) => text.style.color = colors.highlighter_yellow);
      }
      else if (highlight_status === "none") {
        about_highlight_trigger_01.setAttribute("data-highlight", "none");
        about_highlight_trigger_01.style.setProperty("--after-color", colors.highlighter_grey);
        about_highlight_trigger_02.setAttribute("data-highlight", "none");
        about_highlight_trigger_02.style.setProperty("--after-color", colors.highlighter_grey);
        index_skills_text.forEach((text) => text.style.color = colors.highlighter_grey);
        index_techs_text.forEach((text) => text.style.color = colors.highlighter_grey);
      }
    });
  });
}

// EXPORT
export { clicking };