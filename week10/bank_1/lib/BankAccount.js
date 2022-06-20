class BankAccount {
  
  constructor(balance) {
    this.balance = 0;
  };

  deposit(money) {
    this.balance += money;
  };

  currentBalance() {
    return this.balance;
  }

  withdraw(money) {
    this.balance -= money;
  }

};

module.exports = BankAccount;
