var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {


  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/index.html"));
  });

  // Route to the cms page
  app.get("/dice", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/dice.html"));
  });

  app.get("/maker", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/maker"));
  });

};
