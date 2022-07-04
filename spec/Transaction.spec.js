/* eslint-disable indent */
/* eslint-disable no-undef */
const Transaction = require('../lib/Transaction');

describe('Transaction', () => {
  beforeEach(() => {
    transaction = new Transaction();
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2022-06-24'));
	});

	it('initializes with an empty array of transactions', () => {
		expect(transaction.transactions).toEqual([]);
	});

	describe('addDepositTransaction', () => {  
		it('can add a new deposit transaction to transactions array', () => {
			transaction.addDepositTransaction(100.00, 100.00);
			expect(transaction.transactions).toEqual(['24/06/2022 || 100 || || 100']);
		});
	});

	describe('addDepositTransaction', () => {  
		it('can add a new withdraw transaction to transactions array', () => {
			transaction.addWithdrawTransaction(100.00, -100.00);
			expect(transaction.transactions).toEqual(['24/06/2022 || || 100 || -100']);
		});
	});
  describe('newDate', () => {
    it('returns a date in the DD/MM/YYYY format', () => {
      expect(transaction.newDate()).toEqual('24/06/2022');
    });
  });
});
