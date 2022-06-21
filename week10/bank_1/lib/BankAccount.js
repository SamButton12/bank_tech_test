const Transaction = require('./Transaction');

class BankAccount {
  
  constructor(balance) {
    this.balance = 0;
    this.transaction = [];
  };

  deposit(money, date) {
    this.balance += money;
    this.transaction.push('\n21/06/22 || 100.00 || || 100.00')
  };

  withdraw(money) {
    this.balance -= money;
  }

  printStatement() {
    return 'date || credit || debit || balance' + this.transaction;
  }

};

module.exports = BankAccount;
