/* eslint-disable indent */
/* eslint-disable no-undef */
const BankAccount = require('../lib/BankAccount');
const Transaction = require('../lib/Transaction');
jest.mock('../lib/Transaction')

describe('BankAccount', () => {

	beforeEach(() => {
		mockTransaction = new Transaction();
    account = new BankAccount(mockTransaction);
	});

	it('opened account has a balance of zero', () => {
		expect(account.balance).toEqual(0);
	});

	describe('deposit', () => {
		it('user can deposit money', () => {
			account.deposit(100);
			expect(account.balance).toEqual(100.00);
		});
    
		it('user can deposit twice', () => {
			account.deposit(100);
			account.deposit(200);
			expect(account.balance).toEqual(300.00);
		});
	});
    
	describe('withdraw', () => {
		it('user can withdraw money', () => {
			account.deposit(100);
			account.withdraw(50);
			expect(account.balance).toEqual(50.00);
		});
	});
    
	describe('printStatement', () => {
		it('calls getTransactions from Transaction class', () => {
      account.printStatement();
			expect(mockTransaction.getTransactions()).toHaveBeenCalled();
		});
	});
});
