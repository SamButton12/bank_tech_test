/* eslint-disable indent */
/* eslint-disable no-undef */
const BankAccount = require('../lib/BankAccount');
const Transaction = require('../lib/Transaction');

describe('BankAccount', () => {

	beforeEach(() => {
		transaction = new Transaction();
    account = new BankAccount(transaction);
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
    beforeEach(() => {
      account.deposit(100);
    });
		it('displays a statement with one deposit', () => {
			expect(account.printStatement()).toEqual('date || credit || debit || balance\n24/06/2022 || 100.00 || || 100.00');
		});
    
		it('displays a statement with two different deposits', () => {
			account.deposit(99.99);
			expect(account.printStatement()).toEqual('date || credit || debit || balance\n24/06/2022 || 99.99 || || 199.99\n24/06/2022 || 100.00 || || 100.00');
		});
    
		it('displays a statement with two different withdrawals', () => {
			account.withdraw(99.99);
			expect(account.printStatement()).toEqual('date || credit || debit || balance\n24/06/2022 || || 99.99 || -199.99\n24/06/2022 || || 100.00 || -100.00');
		});
	});
});

// balance check, deposit, withdraw or close a closed account = throws error
// cannot withdraw more than deposited
// cannot withdraw negative amount
// cant deposit negative amount
