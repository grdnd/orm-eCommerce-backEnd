// import express router
const router = require("express").Router();

// route directory
const apiRoutes = require("./api");

// tell router to get our routes from the routes directory
router.use("/api", apiRoutes);

// error response
router.use((req, res) => {
  res.send(
    "<h2>Sorry,</h2><h2>The route you have entered was incorrect.</h2><h2>Please try again</h2><h3>server is still running...</h3>"
  );
});

module.exports = router;
