const Transaction = require('./Transaction');

class BankAccount {
  
  constructor() {
    this.balance = 0;
    this.transaction = [];
  };

  deposit(money, date) {    
    this.balance +=  money;
    this.transaction.push(`\n${date} || ${money.toFixed(2)} || || ${this.balance.toFixed(2)}`);
  };
  
  withdraw(money, date) {
    this.balance -= money;
    this.transaction.push(`\n${date} || || ${money.toFixed(2)} || ${this.balance.toFixed(2)}`);
  }

  printStatement() {
    return 'date || credit || debit || balance' + this.transaction;
  }

};

module.exports = BankAccount;
