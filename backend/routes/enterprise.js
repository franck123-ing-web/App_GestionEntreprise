const express = require("express");
const router = express.Router();
const enterpriseController = require("../controllers/enterpriseController");

router.get("/", enterpriseController.getAll);
router.get("/:id", enterpriseController.getOne);
router.post("/", enterpriseController.create);
router.put("/:id", enterpriseController.update);
router.delete("/:id", enterpriseController.deleteOne);
router.get("/search/:name", enterpriseController.searchByName);

module.exports = router;
