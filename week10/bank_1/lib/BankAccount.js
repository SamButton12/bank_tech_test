const Transaction = require('./Transaction');

class BankAccount {
  
  constructor(balance) {
    this.balance = 0;
    this.transaction = [];
  };

  deposit(money) {
    this.balance += money;
  };

  withdraw(money) {
    this.balance -= money;
  }

  printStatement() {
    return 'date || credit || debit || balance';
  }

};

module.exports = BankAccount;
