class BankAccount {
  
  constructor(balance) {
    this.balance = 0;
  };

  deposit(money) {
    this.balance += money;
  };

  withdraw(money) {
    this.balance -= money;
  }

  statement() {
    return "date || credit || debit || balance"
  }
};

module.exports = BankAccount;
