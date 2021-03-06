var express = require("express");
var router = express.Router();
const {
  createBook,
  readBook,
  updateBook,
  readSingleBook,
} = require("../../controllers/bookControllers");

const {
  loginRequired,
  adminRequired,
} = require("./../../services/authenticationService");

/* GET books. */
router.get("/", readBook);

/* POST Create new books. */
// router.post("/", createBook);
router.route("/").post(loginRequired, adminRequired, createBook);
router
  .route("/books/:idbook")
  .get(readSingleBook)
  .put(loginRequired, adminRequired, updateBook);
module.exports = router;
