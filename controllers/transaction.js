// @desc to GET all the Transactions 
// @route GET /api/v1/transactions
// @access public
exports.getTransactions = (req, res, next) => {
    res.send("Get Transactions!!")
}

// @desc to add a transaction
// @route POST /api/v1/transactions
// @access public
exports.deleteTransaction = (req, res, next) => {
    res.send("DELETE Transactions!!")
}

// @desc to delete a transaction
// @route DELETE /api/v1/transactions
// @access public
exports.addTransaction = (req, res, next) => {
    res.send("POST Transactions!!")
}