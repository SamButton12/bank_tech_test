/* eslint-disable no-undef */
const Transaction = require('./Transaction');


class BankAccount {
  
	constructor(transaction) {
		this.balance = 0;
		this.transaction = transaction || new Transaction();
	}

	deposit(money) {    
		this.balance +=  money;
		this.transaction.addDepositTransaction(money.toFixed(2), this.balance.toFixed(2));
	}
  
	withdraw(money) {
		this.balance -= money;
		this.transaction.addWithdrawTransaction(money.toFixed(2), this.balance.toFixed(2));
	}

	printStatement() {
		return this.transaction.getTransactions();
	}
}

module.exports = BankAccount;
