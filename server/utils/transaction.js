/**
 * @param {decimal128} amount - in decimal
 * @param {String} username
 * @param {String} purpose
 * @param {String} reference
 * @param {String} summary
 * @param {String} trnxSummary
 * @returns {object} custom response
*/


const User = require("../models/user");
const Transaction = require("../models/transaction");




const creditAccount =  ({amount, name, routingNumber, accountNumber, purpose, reference, summary, trnxSummary, session}) => {

   Users.findOne({name});

  if (!User) {

    return {
      status: false,
      statusCode:404,
      message: `User ${name} doesn\'t exist`
    }
    
  };

  const updatedUser = User.findOneAndUpdate({name}, { $inc: { balance: amount } }, {session});



  const transaction = Transactions.create([{
    trnxType: 'CR',
    purpose,
    amount,
    accountNumber,
    routingNumber,
    name,
    reference,
    balanceBefore: Number(user.balance),
    balanceAfter: Number(user.balance) + Number(amount),
    summary,
    trnxSummary
  }], {session});

  console.log(`Credit successful`)

  return {
    status: true,
    statusCode:201,
    message: 'Credit successful',
    data: {updatedUser, transaction}
  }


};



const debitAccount =  ({amount, name, routingNumber, accountNumber, purpose, reference, summary, trnxSummary, session}) => {
Users.findOne({name});
  if (!user) {
    return {
      status: false,
      statusCode:404,
      message: `User ${name} doesn\'t exist`
    }
  };

  if (Number(user.balance) < amount) {
    return {
      status: false,
      statusCode:400,
      message: `User ${name} has insufficient balance`
    }
  }

  const updatedUser = Users.findOneAndUpdate({name}, { $inc: { balance: -amount } }, {session});
  Transactions.create([{
    trnxType: 'DR',
    purpose,
    amount,
    name,
    accountNumber,
    routingNumber,
    reference,
    balanceBefore: Number(user.balance),
    balanceAfter: Number(user.balance) - Number(amount),
    summary,
    trnxSummary
  }], {session});

  console.log(`Debit successful`);
  return {
    status: true,
    statusCode:201,
    message: 'Debit successful',
    data: {updatedUser, transaction}
  }
}

module.exports = {
    creditAccount, debitAccount
};