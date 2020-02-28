const { Router } = require("express");
const router = Router();

const {
  getTransactions,
  addTransaction,
  deleteTransactions
} = require("../controllers/transactionsController");

router.get("/", getTransactions);
router.post("/", addTransaction);
router.delete("/:id", deleteTransactions);

module.exports = router;
