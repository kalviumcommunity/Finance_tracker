const Transaction = require("../models/transaction");

// @desc get all transactions
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    res
      .status(200)
      .json({ success: true, count: transactions.length, data: transactions });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};
exports.deleteTransaction = async (req, res, next) => {
    try {
      const removedTransaction = await Transaction.findByIdAndRemove(req.params.id);
      if (!removedTransaction) {
        return res.status(404).json({ success: false, error: "No transaction found" });
      }
      res.status(200).json({ success: true, data: removedTransaction });
    } catch (error) {
      res.status(500).json({ success: false, error: "Server Error", message: error.message });
    }
  };

// @desc to add a transaction
exports.addTransaction = async (req, res, next) => {
  const { text, amount } = req.body;
  try {
    const transaction = await Transaction.create(req.body);
    res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({ success: false, error: messages });
    } else {
      return res.status(500).json({ success: false, error: "Server Error" });
    }
  }
};
