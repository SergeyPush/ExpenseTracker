const Transactiion = require("../models/TransactionModel");

//Get all transactions
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transactiion.find();
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      err: error.message
    });
  }
};

//Add transaction
exports.addTransaction = async (req, res, next) => {
  try {
    if (Object.keys(req.body).length <= 0) {
      throw new Error("Empty body");
    }

    const transaction = await Transactiion.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      err: error.message
    });
  }
};

//Remove transaction
exports.deleteTransactions = async (req, res, next) => {
  try {
    const transaction = await Transactiion.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: "No transaction found"
      });
    }
    await transaction.remove();
    return res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      err: error.message
    });
  }
};
