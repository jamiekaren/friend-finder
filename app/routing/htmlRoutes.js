// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.


// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const path = require("path");

module.exports = function(app) {
  
    app.get("/survey.html", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
  
    // If no matching route is found default to home
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  };