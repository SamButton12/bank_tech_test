/* eslint-disable indent */
class Transaction {

	constructor() {
		this.transactions = [];
	}

	addDepositTransaction(money, updatedBalance) {
		const date = this.newDate();
		this.transactions.unshift(`${date} || ${money} || || ${updatedBalance}`);
	}
	
	addWithdrawTransaction(money, updatedBalance) {
		const date = this.newDate();
		this.transactions.unshift(`${date} || || ${money} || ${updatedBalance}`);
	}

	getTransactions() {
		console.log('date || credit || debit || balance');
		this.transactions.forEach((transaction) => {
			console.log(transaction);
		});
		return;
	}

	newDate() {
		let date = new Date();
		let reformatedDate = date.toLocaleDateString();
		return reformatedDate;
	}
}

module.exports = Transaction;
