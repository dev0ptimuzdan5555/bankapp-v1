const Transaction = require('../models/transaction');
const mongoose = require('mongoose');
const { v4 } = require('uuid');
const { creditAccount, debitAccount } = require( '../utils/transaction');
const { errorHandler } = require("../helpers/dbErrorHandler");


const transfer = async (req, res) => {

  const session = await mongoose.startSession();
  session.startTransaction()
  try {
      const { toName, fromName, accountNumber, amount, routingNumber, swift, summary} = req.body;
      const reference = v4();
      if (!toName && !fromName && !amount && !summary && !swift && !routingNumber && !accountNumber) {
          return res.status(400).json({
            status: false,
            message: `Please fill all informaton correctly`
          })
      }

    const transferResult = await Promise.all([
      debitAccount(
        {amount, name:fromName, purpose:"transfer", reference, summary,
        trnxSummary: `TRFR TO: ${toName}. TRNX REF:${reference} `, session}),
      creditAccount(
        {amount, name:toName, purpose:"transfer", reference, summary,
        trnxSummary:`TRFR FROM: ${fromName}. TRNX REF:${reference} `, session})
    ]);


    const failedTxns = transferResult.filter((result) => result.status !== true);
    if (failedTxns.length) {
      const errors = failedTxns.map(a => a.message);
      session.abortTransaction();
      return res.status(400).json({
        status: false,
        message: errors
      })
    }

    await session.commitTransaction();
    session.endSession();

    return res.status(201).json({
      status: true,
      message: 'Transfer successful'
  })
  } catch (err) {
      session.abortTransaction();
      session.endSession();

      return res.status(201).json({
          status: true,
          message: `Transaction in Progress. Please contact your account Officer to provide Account 11 security Number`
      })
  }
}
module.exports = { transfer };