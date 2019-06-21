var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {


  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/index.html"));
  });

  // Route to the cms page
  app.get("/assets/html/dice", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/dice.html"));
  });

  app.get("/assets/html/maker", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/maker.html"));
  });

};
